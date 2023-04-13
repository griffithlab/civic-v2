import {
  VariantGroupFields,
  VariantGroupReviseModel,
} from '../models/variant-group-revise.model'
import * as fmt from '@app/forms2/utilities/input-formatters'
import {
  Maybe,
  SubmitVariantGroupInput,
  SuggestVariantGroupRevisionInput,
  VariantGroupRevisableFields2Fragment,
} from '@app/generated/civic.apollo'
import { VariantGroupSubmitModel } from '../models/variant-group-submit.model'

export function variantGroupToModelFields(
  variantGroup: VariantGroupRevisableFields2Fragment
): VariantGroupFields {
  return {
    description: variantGroup.description,
    sourceIds: variantGroup.sources.map((s) => s.id),
    variantIds: variantGroup.variants.nodes.map((s) => s.id),
    name: variantGroup.name,
  }
}

export function variantGroupFormModelToReviseInput(
  gid: number,
  model: VariantGroupReviseModel
): Maybe<SuggestVariantGroupRevisionInput> {
  let input = variantGroupFormModelToInput(model)
  if(input) {
    return {
      id: gid,
      fields: {
        ...input,
        description: fmt.toNullableString(input.description),
      },
      organizationId: model.organizationId,
      comment: model.comment!,
    }
  } else {
    return
  }
}

export function variantGroupFormModelToInput(
  model: VariantGroupSubmitModel
): Maybe<SubmitVariantGroupInput> {
  const fields = model.fields
  const requiredFields = [fields.name, model.comment]
  if (requiredFields.find((f) => f === undefined)) return
  else {
    return {
      description: fields.description,
      sourceIds: fields.sourceIds || [],
      name: fields.name!,
      variantIds: fields.variantIds || [],
      organizationId: model.organizationId
    }
  }
}
