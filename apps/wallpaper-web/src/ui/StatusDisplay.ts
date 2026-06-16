import type { AppStatus } from "@/app/App";

export class StatusDisplay {
  readonly element: HTMLElement;
  private readonly titleEl: HTMLElement;
  private readonly statusEl: HTMLElement;
  private readonly messageEl: HTMLElement;
  private readonly errorEl: HTMLElement;

  constructor() {
    this.element = document.createElement("div");
    this.element.className = "status-display";

    this.titleEl = document.createElement("h1");
    this.titleEl.className = "status-display__title";
    this.titleEl.textContent = "EarthLive Wallpaper";

    this.statusEl = document.createElement("div");
    this.statusEl.className = "status-display__status";
    this.statusEl.setAttribute("role", "status");
    this.statusEl.setAttribute("aria-live", "polite");

    this.messageEl = document.createElement("p");
    this.messageEl.className = "status-display__message";

    this.errorEl = document.createElement("p");
    this.errorEl.className = "status-display__error";
    this.errorEl.style.display = "none";

    this.statusEl.appendChild(this.messageEl);
    this.statusEl.appendChild(this.errorEl);
    this.element.appendChild(this.titleEl);
    this.element.appendChild(this.statusEl);
  }

  update(status: AppStatus, errorMessage: string | null = null): void {
    if (errorMessage || status.renderer === "error") {
      this.errorEl.textContent = errorMessage ?? "Renderer error";
      this.errorEl.style.display = "";
      this.messageEl.style.display = "none";
    } else {
      this.messageEl.style.display = "";
      this.errorEl.style.display = "none";

      const parts: string[] = [
        `Renderer: ${status.renderer}`,
        `Location: ${status.location}`,
        `Solar: ${status.solar}`,
        `Weather: ${status.weather}`,
        `API Keys: ${status.apiKeys}`,
      ];

      this.messageEl.textContent = parts.join("  |  ");
    }
  }
}
