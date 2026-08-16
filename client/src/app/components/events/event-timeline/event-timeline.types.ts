/**
 * Which tags an event row suppresses, so a feed scoped to one entity does not
 * repeat that entity on every line.
 *
 * Declared in its own leaf module rather than on either timeline component:
 * cvc-event-timeline passes it down to cvc-event-timeline-item, so owning it on
 * one of them would make the other import its sibling. It previously lived on
 * the now-deleted event-feed component.
 */
export type EventDisplayOption =
  | 'hideSubject'
  | 'hideUser'
  | 'hideOrg'
  | 'displayAll'
