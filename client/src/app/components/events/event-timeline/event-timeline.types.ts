/**
 * Which tags an event row suppresses, so a feed scoped to one entity does not
 * repeat that entity on every line.
 *
 * Declared in its own leaf module: cvc-event-timeline passes it down to
 * cvc-event-timeline-item, so owning it on either would make one import its
 * sibling.
 */
export type EventDisplayOption =
  | 'hideSubject'
  | 'hideUser'
  | 'hideOrg'
  | 'displayAll'
