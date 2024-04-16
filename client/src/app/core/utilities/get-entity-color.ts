// Map of [__typename, hexcolor]
// TODO: swap Variant and Molecular Profile colors when MP feature implemented
export const EntityColors = new Map<string, string>([
  ['Assertion', '#7243b5'],
  ['ClinicalTrial', '#ac3996'],
  ['CoordinateSystem', '#f68f37'],
  ['Disease', '#e62f76'],
  ['Event', '#1db8a9'],
  ['EvidenceItem', '#2a63b6'],
  ['Feature', '#07aff0'],
  ['MolecularProfile', '#33b358'],
  ['NccnGuideline', '#49566D'],
  ['Phenotype', '#1db8a9'],
  ['Source', '#f9ba45'],
  ['Therapy', '#ac3996'],
  ['Variant', '#74d34c'],
  ['GeneVariant', '#74d34c'],
  ['FactorVariant', '#74d34c'],
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
  ['Rejected', '#BBBBBB'],

  ['Greyscale', '#999999'],
])

export function getEntityColor(entity: string): string {
  let color = '#AAAAAA' // default color
  if (entity) {
    const c = EntityColors.get(entity)
    if (c) color = c
  }
  return color
}
