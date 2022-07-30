// Map of [__typename, hexcolor]
// TODO: swap Variant and Molecular Profile colors when MP feature implemented
export const EntityColors = new Map<string, string>([
  ['Assertion', '#7243b5'],
  ['ClinicalTrial', '#ac3996'],
  ['CoordinateSystem', '#f68f37'],
  ['Disease', '#e62f76'],
  ['Event', '#1db8a9'],
  ['EvidenceItem', '#2a63b6'],
  ['Gene', '#07aff0'],
  ['Intervention', '#ac3996'],
  ['MolecularProfile', '#33b358'],
  ['Phenotype', '#1db8a9'],
  ['Source', '#f9ba45'],
  ['Variant', '#74d34c'],
  ['VariantGroup', '#74d34c'],
  ['VariantType', '#74d34c'],

  // artifacts
  ['Comment', '#44d8ef'],
  ['Event', '#ffdb00'],
  ['Flag', '#e24759'],
  ['Queue', '#666699'],
  ['Revision', '#f0673a'],

  // user types
  ['Curator', '#a0d8f5'],
  ['Editor', '#58a0c4'],
  ['Admin', '#58a0c4'],
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
