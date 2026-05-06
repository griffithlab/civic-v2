export function entityTypeToTypeLabel(s: string): string {
  switch (s) {
    case 'EvidenceItem':
      return 'Evidence Item'
    case 'FusionVariant':
      return 'Fusion Variant'
    case 'FactorVariant':
      return 'Factor Variant'
    case 'GeneVariant':
      return 'Gene Variant'
    case 'RegionVariant':
      return 'Region Variant'
    default:
      return s
        .toLowerCase()
        .split('_')
        .map((n) => n[0].toUpperCase() + n.substring(1))
        .join('')
  }
}
