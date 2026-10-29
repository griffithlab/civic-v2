import { Controller } from "@hotwired/stimulus"

const MAX_HEIGHT = 200

export default class extends Controller {
  connect() {
    this.resize()
  }

  resize() {
    this.element.style.height = "auto"
    this.element.style.height =
      `${Math.min(this.element.scrollHeight, MAX_HEIGHT)}px`
    this.element.style.overflowY =
      this.element.scrollHeight > MAX_HEIGHT ? "auto" : "hidden"
  }

  submit(event) {
    if (event.key !== "Enter" || event.shiftKey || event.isComposing) return

    event.preventDefault()
    this.element.form?.requestSubmit()
  }
}
