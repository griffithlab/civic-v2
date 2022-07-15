// Map of [__typename, hexcolor]
// TODO: swap Variant and Molecular Profile colors when MP feature implemented
export const EntityColors = new Map<string, string>([
  ['Assertion', '#7243b5'],
  ['CoordinateSystem', '#1db8a9'],
  ['Disease', '#e62f76'],
  ['Event', '#ffdb00'],
  // ['EvidenceItem', '#f68f37'],
  ['EvidenceItem', '#1db8a9'],
  ['Gene', '#07aff0'],
  ['Intervention', '#ac3996'],
  ['Flag', '#e24759'],
  ['Variant', '#33b358'],
  ['VariantGroup', '#33b358'],
  ['Phenotype', '#2a63b6'],
  ['Revision', '#f0673a'],
  ['Source', '#f9ba45'],
  ['MolecularProfile', '#b2d44a'],
  ['Rejected', '#BBBBBB']
])

export function getEntityColor(entity: string): string {
  let color = '#CCCCCC' // set a default color
  if (entity) {
    const c = EntityColors.get(entity)
    if(c) color = c
  }
  return color
}
