import { Controller } from "@hotwired/stimulus"

// Inline rename editing for chat names.
// Replaces display text with an input field, submits via PATCH on Enter/blur,
// cancels on Escape.
//
// Usage:
//   <div data-controller="inline-edit" data-inline-edit-url-value="/chats/123">
//     <span data-inline-edit-target="display">Chat Name</span>
//     <form data-inline-edit-target="form" class="hidden">
//       <input data-inline-edit-target="input" data-action="keydown->inline-edit#keydown blur->inline-edit#save" />
//     </form>
//   </div>
export default class extends Controller {
  static targets = ["display", "input", "form"]
  static values = { url: String }

  activate(event) {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    this.originalName = this.displayTarget.textContent.trim()
    this.inputTarget.value = this.originalName
    this.displayTarget.classList.add("hidden")
    this.formTarget.classList.remove("hidden")
    this.inputTarget.focus()
    this.inputTarget.select()
    this.isCancelling = false
  }

  async save() {
    if (this.isCancelling) return

    const newName = this.inputTarget.value.trim()

    this.formTarget.classList.add("hidden")
    this.displayTarget.classList.remove("hidden")

    if (!newName || newName === this.originalName) return

    // Optimistically update the display
    this.displayTarget.textContent = newName

    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content
      const response = await fetch(this.urlValue, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
          "Accept": "text/vnd.turbo-stream.html",
        },
        body: JSON.stringify({ chat: { name: newName } }),
      })

      if (!response.ok) {
        // Revert on failure
        this.displayTarget.textContent = this.originalName
      }
    } catch {
      this.displayTarget.textContent = this.originalName
    }
  }

  cancel() {
    this.isCancelling = true
    this.formTarget.classList.add("hidden")
    this.displayTarget.classList.remove("hidden")
    this.displayTarget.textContent = this.originalName
  }

  keydown(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      this.inputTarget.blur()
    } else if (event.key === "Escape") {
      event.preventDefault()
      this.cancel()
    }
  }
}
