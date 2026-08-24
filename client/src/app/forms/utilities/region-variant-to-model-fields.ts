import { RevisableRegionVariantFieldsFragment } from '@app/forms/config/region-variant-revise/region-variant-revise.query.gql.generated'
import {
  Maybe,
  SuggestRegionVariantRevisionInput,
} from '@app/generated/civic.apollo.types'
import * as fmt from '@app/forms/utilities/input-formatters'
import { RegionVariantReviseModel } from '../models/region-variant-revise.model'
import { RegionVariantFields } from '../models/region-variant-fields.model'

export function regionVariantToModelFields(
  variant: RevisableRegionVariantFieldsFragment
): RegionVariantFields {
  return {
    aliases: variant.variantAliases,
    variantTypeIds: variant.variantTypes.map((vt) => vt.id),
  }
}

export function regionVariantFormModelToReviseInput(
  vid: number,
  model: RegionVariantReviseModel
): Maybe<SuggestRegionVariantRevisionInput> {
  const fields = model.fields
  if (!model.comment) {
    return undefined
  }

  return {
    id: vid,
    fields: {
      aliases: fields.aliases || [],
      variantTypeIds: fields.variantTypeIds || [],
    },
    organizationId: model.organizationId,
    comment: model.comment!,
  }
}
