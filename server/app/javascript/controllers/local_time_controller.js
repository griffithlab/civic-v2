import { Controller } from "@hotwired/stimulus"

// Converts UTC timestamps rendered by the server into the
// browser's local timezone. Attach to a <time> element with
// a `datetime` attribute containing an ISO 8601 UTC string.
//
// Usage:
//   <time datetime="2026-04-10T14:35:00Z"
//         data-controller="local-time"
//         data-local-time-format-value="time">
//     02:35 PM
//   </time>
//
// Format values:
//   "time"     -> "2:35 PM"
//   "date"     -> "Apr 10"
//   "datetime" -> "Apr 10, 2:35 PM"
export default class extends Controller {
  static values = { format: { type: String, default: "time" } }

  connect() {
    const utc = new Date(this.element.dateTime)
    if (isNaN(utc)) return

    const options = this.#optionsForFormat()
    this.element.textContent = utc.toLocaleString(undefined, options)
  }

  #optionsForFormat() {
    switch (this.formatValue) {
      case "date":
        return { month: "short", day: "numeric" }
      case "datetime":
        return { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }
      default:
        return { hour: "numeric", minute: "2-digit" }
    }
  }
}
