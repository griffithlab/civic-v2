export function entityTypeToTypename(s: string): string {
  return s
    .toLowerCase()
    .split('_')
    .map((n) => n[0].toUpperCase() + n.substring(1))
    .join('')
}
