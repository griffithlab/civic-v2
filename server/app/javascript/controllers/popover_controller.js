import { Controller } from "@hotwired/stimulus"

// Toggles a popover/dropdown menu on click.
// Closes on outside click or Escape key.
//
// Usage:
//   <div data-controller="popover">
//     <button data-action="click->popover#toggle">...</button>
//     <div data-popover-target="menu" class="hidden">...</div>
//   </div>
export default class extends Controller {
  static targets = ["menu"]

  connect() {
    this.boundClose = this.closeOnOutsideClick.bind(this)
    this.boundEscape = this.closeOnEscape.bind(this)
    this.boundMouseLeave = this.closeOnMouseLeave.bind(this)
    document.addEventListener("click", this.boundClose)
    document.addEventListener("keydown", this.boundEscape)

    // Close when the mouse leaves the parent group container,
    // so the menu doesn't linger after hover-revealed triggers disappear.
    this.groupWrapper = this.element.closest(".group")
    if (this.groupWrapper) {
      this.groupWrapper.addEventListener("mouseleave", this.boundMouseLeave)
    }
  }

  disconnect() {
    document.removeEventListener("click", this.boundClose)
    document.removeEventListener("keydown", this.boundEscape)

    if (this.groupWrapper) {
      this.groupWrapper.removeEventListener("mouseleave", this.boundMouseLeave)
    }
  }

  toggle(event) {
    event.stopPropagation()
    const isHidden = this.menuTarget.classList.contains("hidden")
    this.menuTarget.classList.toggle("hidden")

    // Elevate the nearest relative-positioned ancestor so the menu
    // renders above sibling items in scrollable containers.
    const wrapper = this.element.closest(".group")
    if (wrapper) {
      wrapper.classList.toggle("z-10", isHidden)
    }
  }

  close() {
    this.menuTarget.classList.add("hidden")

    const wrapper = this.element.closest(".group")
    if (wrapper) {
      wrapper.classList.remove("z-10")
    }
  }

  closeOnOutsideClick(event) {
    if (!this.element.contains(event.target)) {
      this.close()
    }
  }

  closeOnEscape(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }

  closeOnMouseLeave() {
    this.close()
  }
}
