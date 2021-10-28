export function entityTypeToTypename(s: string): string {
  return s
    .toLowerCase()
    .split('_')
    .map(n => n[0].toUpperCase() + n.substring(1)).join('')
}

export function typenameToEnumName(s: string): string {
  return s.replace(/([A-Z])/g, "_$1").toUpperCase()
}
