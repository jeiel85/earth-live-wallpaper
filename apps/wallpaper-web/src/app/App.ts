import { StatusDisplay } from "@/ui/StatusDisplay";
import {
  CesiumGlobeRenderer,
  type RendererStatus,
} from "@/renderer/CesiumGlobeRenderer";

export interface AppStatus {
  renderer: RendererStatus;
  location: "unset" | "detecting" | "ready" | "error";
  solar: "uninitialized" | "ready" | "error";
  weather: "unavailable" | "ready" | "error";
  apiKeys: "none" | "partial" | "ready";
}

export class App {
  private readonly root: HTMLElement;
  private readonly statusDisplay: StatusDisplay;
  private readonly globeContainer: HTMLElement;
  private readonly statusOverlay: HTMLElement;
  private renderer: CesiumGlobeRenderer | null = null;
  private currentStatus: AppStatus = {
    renderer: "initializing",
    location: "unset",
    solar: "uninitialized",
    weather: "unavailable",
    apiKeys: "none",
  };

  constructor(root: HTMLElement) {
    this.root = root;
    this.statusDisplay = new StatusDisplay();

    this.globeContainer = document.createElement("div");
    this.globeContainer.className = "globe-container";

    this.statusOverlay = document.createElement("div");
    this.statusOverlay.className = "status-overlay";
  }

  init(): void {
    this.renderLayout();
    this.initRenderer();
  }

  private renderLayout(): void {
    this.root.innerHTML = "";

    // Globe container fills the entire app area
    this.root.appendChild(this.globeContainer);

    // Status overlay sits on top
    this.root.appendChild(this.statusOverlay);
    this.statusOverlay.appendChild(this.statusDisplay.element);
  }

  private initRenderer(): void {
    this.renderer = new CesiumGlobeRenderer(this.globeContainer);

    this.renderer.onStatus((rendererStatus, errorMessage) => {
      this.currentStatus = { ...this.currentStatus, renderer: rendererStatus };
      this.statusDisplay.update(this.currentStatus, errorMessage);
    });

    this.renderer.init().catch((err: unknown) => {
      const msg = err instanceof Error ? err.message : "Unknown error";
      this.currentStatus = { ...this.currentStatus, renderer: "error" };
      this.statusDisplay.update(this.currentStatus, msg);
    });
  }
}
