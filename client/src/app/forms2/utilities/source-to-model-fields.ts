import { Maybe, SuggestSourceInput } from "@app/generated/civic.apollo";
import { SourceFields } from "../models/source-fields.model";
import { FormReviseBaseModel } from "../models/form-revise-base.model";

export interface SourceModel extends FormReviseBaseModel {
  fields: SourceFields
}

export function sourceFormModelToInput(model: SourceModel): Maybe<SuggestSourceInput> {
  const fields = model.fields
  const requiredFields = [
    model.comment,
    fields.sourceId
  ]
  if (requiredFields.find(f => f === undefined)) {
    return undefined
  }
  
  return {
    sourceId: fields.sourceId!,
    molecularProfileId: fields.molecularProfileId,
    diseaseId: fields.diseaseId,
    organizationId: model.organizationId,
    comment: model.comment!
  }
}