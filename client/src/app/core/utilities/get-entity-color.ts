// Map of [__typename, hexcolor]
export const EntityColors = new Map<string, string>([
  ['Assertion', '#7243b5'],
  ['CoordinateSystem', '#1db8a9'],
  ['Disease', '#e62f76'],
  ['Event', '#ffdb00'],
  ['EvidenceItem', '#f68f37'],
  ['Gene', '#07aff0'],
  ['Intervention', '#ac3996'],
  ['Flag', '#e24759'],
  ['MolecularProfile', '#33b358'],
  ['Phenotype', '#2a63b6'],
  ['Revision', '#f0673a'],
  ['Source', '#f9ba45'],
  ['Variant', '#b2d44a'],
])

export function getEntityColor(entity: string): string {
  let color = '#CCCCCC' // set a default color
  if (entity) {
    const c = EntityColors.get(entity)
    if(c) color = c
  }
  return color
}
