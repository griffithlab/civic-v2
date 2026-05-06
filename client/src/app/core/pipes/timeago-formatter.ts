import { Pipe } from '@angular/core'

const SECONDS_IN_MINUTE = 60
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60
const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24
const SECONDS_IN_MONTH = SECONDS_IN_DAY * 30
const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365

const noYearOptions: Intl.DateTimeFormatOptions = {
  weekday: undefined,
  year: undefined,
  month: 'short',
  day: 'numeric',
}
const noYearFormatter = new Intl.DateTimeFormat('en-US', noYearOptions)

const withYearOptions: Intl.DateTimeFormatOptions = {
  weekday: undefined,
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}
const withYearFormatter = new Intl.DateTimeFormat('en-US', withYearOptions)

@Pipe({
    name: 'timeAgo',
    pure: true,
    standalone: false
})
export class CivicTimeagoFormatter {
  transform(input: number | string): string {
    if (!input) return '--'

    let then: number
    if (typeof input == 'number') {
      then = input
    } else {
      then = Date.parse(input)
    }

    const now = Date.now()
    const elapsedSeconds = Math.round(Math.abs(now - then) / 1000)

    if (
      elapsedSeconds >= SECONDS_IN_MONTH &&
      elapsedSeconds < SECONDS_IN_YEAR
    ) {
      let date = new Date(then)
      return noYearFormatter.format(date)
    }

    if (elapsedSeconds >= SECONDS_IN_YEAR) {
      let date = new Date(then)
      return withYearFormatter.format(date)
    }

    let value: number
    let unit: string
    if (elapsedSeconds < SECONDS_IN_MINUTE) {
      value = Math.round(elapsedSeconds)
      unit = 'second'
    } else if (elapsedSeconds < SECONDS_IN_HOUR) {
      value = Math.round(elapsedSeconds / SECONDS_IN_MINUTE)
      unit = 'minute'
    } else if (elapsedSeconds < SECONDS_IN_DAY) {
      value = Math.round(elapsedSeconds / SECONDS_IN_HOUR)
      unit = 'hour'
    } else {
      value = Math.round(elapsedSeconds / SECONDS_IN_DAY)
      unit = 'day'
    }

    let plural = value > 1 ? 's' : ''

    return `${value} ${unit}${plural} ago`
  }
}
