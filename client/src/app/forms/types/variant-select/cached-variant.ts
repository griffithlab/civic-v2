import { Maybe } from '@app/generated/civic.apollo.types'
import { Apollo } from 'apollo-angular'
import {
  VariantSelectTypeaheadFieldsFragment,
  VariantSelectTypeaheadFieldsFragmentDoc,
} from './variant-select.query.gql.generated'

/** every concrete type implementing VariantInterface, plain Variant last */
const VARIANT_TYPENAMES = [
  'GeneVariant',
  'FactorVariant',
  'FusionVariant',
  'RegionVariant',
  'Variant',
] as const

/**
 * Reads a Variant out of the Apollo cache by id, whatever its concrete type.
 *
 * Variants are polymorphic, so a cache id needs a concrete typename, and
 * callers usually know only the Feature type. This reads the generated
 * fragment, trying `preferredTypename` first; a miss on one typename is
 * expected, not an error.
 */
export function readCachedVariant(
  apollo: Apollo,
  variantId: Maybe<number>,
  preferredTypename?: string
): Maybe<VariantSelectTypeaheadFieldsFragment> {
  if (!variantId) return undefined

  const candidates = preferredTypename
    ? [preferredTypename, ...VARIANT_TYPENAMES.filter((t) => t !== preferredTypename)]
    : [...VARIANT_TYPENAMES]

  for (const typename of candidates) {
    try {
      const variant =
        apollo.client.readFragment<VariantSelectTypeaheadFieldsFragment>({
          id: `${typename}:${variantId}`,
          fragment: VariantSelectTypeaheadFieldsFragmentDoc,
          fragmentName: 'VariantSelectTypeaheadFields',
        })
      if (variant) return variant
    } catch {
      // this typename is not the one; keep looking
    }
  }
  return undefined
}
