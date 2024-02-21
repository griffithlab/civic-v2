import {
  Maybe,
  RevisableFactorFieldsFragment,
  SuggestFactorRevisionInput,
} from '@app/generated/civic.apollo'
import * as fmt from '@app/forms/utilities/input-formatters'
import { FactorFields } from '../models/factor-fields.model'
import { FactorReviseModel } from '../models/factor-revise.model'

export function factorToModelFields(
  factor: RevisableFactorFieldsFragment
): Maybe<FactorFields> {
  if (factor.featureInstance.__typename === 'Factor') {
    return {
      description: factor.description,
      name: factor.name,
      fullName: factor.fullName,
      sourceIds: factor.sources.map((s) => s.id),
      aliases: factor.featureAliases,
      ncitId: factor.featureInstance.ncitId,
    }
  } else {
    return undefined
  }
}

export function factorFormModelToReviseInput(
  fid: number,
  model: FactorReviseModel
): Maybe<SuggestFactorRevisionInput> {
  const fields = model.fields

  if (!model.comment || !fields.name) {
    return undefined
  }

  return {
    id: fid,
    fields: {
      description: fmt.toNullableString(fields.description),
      fullName: fmt.toNullableString(fields.fullName),
      name: fields.name,
      sourceIds: fields.sourceIds || [],
      aliases: fields.aliases || [],
      ncitId: fmt.toNullableString(fields.ncitId),
    },
    organizationId: model.organizationId,
    comment: model.comment!,
  }
}
