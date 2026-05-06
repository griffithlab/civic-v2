import {
  Maybe,
  RevisableFactorVariantFieldsFragment,
  SuggestFactorVariantRevisionInput,
} from '@app/generated/civic.apollo'
import * as fmt from '@app/forms/utilities/input-formatters'
import { FactorVariantReviseModel } from '../models/factor-variant-revise.model'
import { FactorVariantFields } from '../models/factor-variant-fields.model'

export function factorVariantToModelFields(
  variant: RevisableFactorVariantFieldsFragment
): FactorVariantFields {
  return {
    name: variant.name,
    aliases: variant.variantAliases,
    variantTypeIds: variant.variantTypes.map((vt) => vt.id),
    featureId: variant.feature.id,
    ncitId: variant.ncitId,
  }
}

export function factorVariantFormModelToReviseInput(
  vid: number,
  model: FactorVariantReviseModel
): Maybe<SuggestFactorVariantRevisionInput> {
  const fields = model.fields
  if (!model.comment || !fields.name || !fields.featureId) {
    return undefined
  }

  return {
    id: vid,
    fields: {
      name: fields.name,
      aliases: fields.aliases || [],
      variantTypeIds: fields.variantTypeIds || [],
      featureId: fields.featureId,
      ncitId: fmt.toNullableString(fields.ncitId),
    },
    organizationId: model.organizationId,
    comment: model.comment!,
  }
}
