import { Controller } from "@hotwired/stimulus";

// Mobile sidebar drawer controller for chats layout.
export default class extends Controller {
  static targets = ["drawer", "backdrop"];

  connect() {
    if (!this.hasDrawerTarget || !this.hasBackdropTarget) return;
    this.close();
  }

  disconnect() {
    document.body.classList.remove("overflow-hidden");
  }

  toggle(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (!this.hasDrawerTarget || !this.hasBackdropTarget) return;
    this.drawerTarget.classList.remove("-translate-x-full");
    this.backdropTarget.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  close() {
    if (!this.hasDrawerTarget || !this.hasBackdropTarget) return;
    this.drawerTarget.classList.add("-translate-x-full");
    this.backdropTarget.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  closeOnEscape(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  closeFromNav() {
    if (window.innerWidth < 1024) {
      this.close();
    }
  }

  isOpen() {
    return !this.drawerTarget.classList.contains("-translate-x-full");
  }
}
