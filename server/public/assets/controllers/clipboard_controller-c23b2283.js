import { Controller } from "@hotwired/stimulus"

// Minimal controller for copying text to the clipboard.
// Usage: <button data-controller="clipboard" data-clipboard-text-value="..." data-action="click->clipboard#copy">Copy</button>
export default class extends Controller {
  static values = { text: String }

  copy() {
    navigator.clipboard.writeText(this.textValue).then(() => {
      const original = this.element.textContent
      this.element.textContent = "Copied!"
      setTimeout(() => this.element.textContent = original, 2000)
    }).catch(() => {
      // Fallback: select the text in the nearest input for manual copy
      const input = this.element.closest("[data-share-notification]")?.querySelector("input")
      if (input) input.select()
    })
  }
}
