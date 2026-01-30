import {
  Maybe,
  RevisableGeneFieldsFragment,
  SuggestGeneRevisionInput,
} from '@app/generated/civic.apollo'
import { GeneFields } from '../models/gene-fields.model'
import { GeneReviseModel } from '../models/gene-revise.model'
import * as fmt from '@app/forms/utilities/input-formatters'

export function geneToModelFields(
  gene: RevisableGeneFieldsFragment
): GeneFields {
  if (gene.featureInstance.__typename == 'Gene') {
    return {
      description: gene.featureInstance.description,
      sourceIds: gene.sources.map((s) => s.id),
    }
  } else {
    return {
      description: undefined,
      sourceIds: [],
    }
  }
}

export function geneFormModelToReviseInput(
  gid: number,
  model: GeneReviseModel
): Maybe<SuggestGeneRevisionInput> {
  const fields = model.fields
  if (!model.comment) {
    return undefined
  }

  return {
    id: gid,
    fields: {
      description: fmt.toNullableString(fields.description),
      sourceIds: fields.sourceIds || [],
    },
    organizationId: model.organizationId,
    comment: model.comment!,
  }
}
