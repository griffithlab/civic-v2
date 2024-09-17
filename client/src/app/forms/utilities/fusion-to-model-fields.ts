import {
  Maybe,
  RevisableFusionFieldsFragment,
  SuggestFusionRevisionInput,
} from '@app/generated/civic.apollo'
import * as fmt from '@app/forms/utilities/input-formatters'
import { FusionFields } from '../models/fusion-fields.model'
import { FusionReviseModel } from '../models/fusion-revise.model'

export function fusionToModelFields(
  fusion: RevisableFusionFieldsFragment
): Maybe<FusionFields> {
  if (fusion.featureInstance.__typename === 'Fusion') {
    return {
      description: fusion.description,
      sourceIds: fusion.sources.map((s) => s.id),
      aliases: fusion.featureAliases,
    }
  } else {
    return undefined
  }
}

export function fusionFormModelToReviseInput(
  fid: number,
  model: FusionReviseModel
): Maybe<SuggestFusionRevisionInput> {
  const fields = model.fields

  if (!model.comment) {
    return undefined
  }

  return {
    id: fid,
    fields: {
      description: fmt.toNullableString(fields.description),
      sourceIds: fields.sourceIds || [],
      aliases: fields.aliases || [],
    },
    organizationId: model.organizationId,
    comment: model.comment!,
  }
}
