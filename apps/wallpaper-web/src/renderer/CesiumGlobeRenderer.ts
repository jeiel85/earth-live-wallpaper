import {
  Viewer,
  Cartesian3,
  HeadingPitchRange,
  Math as CesiumMath,
  Matrix4,
  Ion,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export type RendererStatus = "initializing" | "ready" | "error" | "unsupported";
export type RendererStatusChange = (
  status: RendererStatus,
  errorMessage: string | null,
) => void;

interface RendererError {
  message: string;
  detail?: string;
}

export class CesiumGlobeRenderer {
  private viewer: Viewer | null = null;
  private container: HTMLElement;
  private status: RendererStatus = "initializing";
  private errorMessage: string | null = null;
  private destroyed = false;
  private onStatusChange: RendererStatusChange | null = null;
  private removePostUpdate: (() => void) | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  onStatus(callback: RendererStatusChange): void {
    this.onStatusChange = callback;
  }

  async init(): Promise<void> {
    try {
      if (!this.checkWebGLSupport()) {
        this.setError({
          message: "WebGL is not supported in this browser.",
          detail:
            "EarthLive Wallpaper requires WebGL to render the 3D globe. Please try a modern browser like Chrome, Firefox, or Edge.",
        });
        return;
      }

      Ion.defaultAccessToken = "";

      this.viewer = new Viewer(this.container, {
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        selectionIndicator: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false,
        timeline: false,
        scene3DOnly: true,
        creditContainer: document.createElement("div"),
      });

      this.configureCamera();
      this.startAutoRotation();

      this.setStatus("ready");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unknown initialization error";
      this.setError({
        message: "Failed to initialize the 3D globe renderer.",
        detail: message,
      });
    }
  }

  getStatus(): RendererStatus {
    return this.status;
  }

  getErrorMessage(): string | null {
    return this.errorMessage;
  }

  destroy(): void {
    this.destroyed = true;
    this.removePostUpdate?.();
    this.removePostUpdate = null;
    if (this.viewer && !this.viewer.isDestroyed()) {
      this.viewer.destroy();
    }
    this.viewer = null;
  }

  private checkWebGLSupport(): boolean {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        canvas.getContext("webgl") || canvas.getContext("webgl2")
      );
    } catch {
      return false;
    }
  }

  private configureCamera(): void {
    if (!this.viewer) return;

    const center = Cartesian3.fromDegrees(0, 20, 0);

    this.viewer.camera.lookAt(
      center,
      new HeadingPitchRange(
        CesiumMath.toRadians(0),
        CesiumMath.toRadians(-30),
        20000000,
      ),
    );

    this.viewer.scene.globe.enableLighting = true;
  }

  private startAutoRotation(): void {
    if (!this.viewer) return;

    const rotationSpeed = CesiumMath.toRadians(0.5);
    let heading = CesiumMath.toRadians(0);

    const callback = () => {
      if (this.destroyed || !this.viewer || this.viewer.isDestroyed()) return;

      heading += rotationSpeed;
      if (heading > CesiumMath.TWO_PI) {
        heading -= CesiumMath.TWO_PI;
      }

      const center = Cartesian3.fromDegrees(0, 0, 0);
      const range = Cartesian3.distance(
        this.viewer.camera.position,
        center,
      );

      this.viewer.camera.lookAtTransform(Matrix4.IDENTITY);
      this.viewer.camera.lookAt(
        center,
        new HeadingPitchRange(heading, this.viewer.camera.pitch, range),
      );
    };

    this.viewer.scene.postUpdate.addEventListener(callback);
    this.removePostUpdate = () => {
      this.viewer?.scene.postUpdate.removeEventListener(callback);
    };
  }

  private setStatus(status: RendererStatus): void {
    this.status = status;
    this.onStatusChange?.(status, this.errorMessage);
  }

  private setError(error: RendererError): void {
    this.status = "error";
    this.errorMessage = error.detail
      ? `${error.message} ${error.detail}`
      : error.message;

    this.renderFallback(error.message, error.detail);
    this.onStatusChange?.("error", this.errorMessage);
  }

  private renderFallback(message: string, detail?: string): void {
    this.container.innerHTML = "";
    this.container.className = "renderer-fallback";

    const title = document.createElement("h2");
    title.className = "renderer-fallback__title";
    title.textContent = "EarthLive Wallpaper";

    const msg = document.createElement("p");
    msg.className = "renderer-fallback__message";
    msg.textContent = message;

    this.container.appendChild(title);
    this.container.appendChild(msg);

    if (detail) {
      const det = document.createElement("p");
      det.className = "renderer-fallback__detail";
      det.textContent = detail;
      this.container.appendChild(det);
    }
  }
}
