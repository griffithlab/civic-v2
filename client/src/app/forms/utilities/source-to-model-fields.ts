import { Maybe, SuggestSourceInput, CreateLinkedSourceInput } from "@app/generated/civic.apollo";
import { SourceFields } from "../models/source-fields.model";
import { LinkedSourceFields } from "../models/linked-source-fields.model";
import { FormReviseBaseModel } from "../models/form-revise-base.model";

export interface SourceModel extends FormReviseBaseModel {
  fields: SourceFields
}

export interface LinkedSourceModel extends FormReviseBaseModel {
  fields: LinkedSourceFields
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

export function sourceFormModelToCreateLinkedSourceInput(model: LinkedSourceModel): Maybe<CreateLinkedSourceInput> {
  const fields = model.fields
  return fields.sourceId && fields.linkedSourceId && fields.reason
    ? {
        sourceId: fields.sourceId,
        linkedSourceId: fields.linkedSourceId,
        organizationId: model.organizationId,
        reason: fields.reason,
        note: model.comment,
      }
    : undefined
}