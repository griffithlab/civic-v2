// Map of [__typename, hexcolor]
// TODO: swap Variant and Molecular Profile colors when MP feature implemented
export const EntityColors = new Map<string, string>([
  ['Assertion', '#7243b5'],
  ['CoordinateSystem', '#f68f37'],
  ['Disease', '#e62f76'],
  ['EvidenceItem', '#1db8a9'],
  ['Gene', '#07aff0'],
  ['Intervention', '#ac3996'],
  ['Variant', '#33b358'],
  ['VariantGroup', '#33b358'],
  ['Phenotype', '#2a63b6'],
  ['Source', '#f9ba45'],
  ['MolecularProfile', '#b2d44a'],

  // artifacts
  ['Event', '#ffdb00'],
  ['Flag', '#e24759'],
  ['Revision', '#f0673a'],
  ['Comment', '#44d8ef'],

  // user types
  ['Editor', '#58a0c4'],
  ['Curator', '#a0d8f5'],
  ['Organization', '#3d7b99'],

  // entity state colors
  ['Rejected', '#BBBBBB']
  
])

export function getEntityColor(entity: string): string {
  let color = '#AAAAAA' // default color
  if (entity) {
    const c = EntityColors.get(entity)
    if(c) color = c
  }
  return color
}
