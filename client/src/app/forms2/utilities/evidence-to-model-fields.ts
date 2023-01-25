import { Maybe, RevisableEvidenceFieldsFragment, SubmitEvidenceItemInput } from '@app/generated/civic.apollo'
import { EvidenceItemFields } from '../models/evidence-fields.model'
import { EvidenceSubmitModel } from '../models/evidence-submit.model'
import * as fmt from '@app/forms/config/utilities/input-formatters'

export function evidenceToModelFields(
  eid: RevisableEvidenceFieldsFragment
): EvidenceItemFields {
  return {
    significance: eid.significance,
    description: eid.description,
    diseaseId: eid.disease?.id,
    therapyIds: eid.therapies.map((d) => d.id),
    therapyInteractionType: eid.therapyInteractionType,
    evidenceDirection: eid.evidenceDirection,
    evidenceLevel: eid.evidenceLevel,
    evidenceType: eid.evidenceType,
    molecularProfileId: eid.molecularProfile.id,
    phenotypeIds: eid.phenotypes.map((p) => p.id),
    rating: eid.evidenceRating,
    sourceId: eid.source.id,
    variantOrigin: eid.variantOrigin,
  }
}

export function evidenceFormModelToInput(model: EvidenceSubmitModel): Maybe<SubmitEvidenceItemInput> {
  const fields = model.fields;
  let requiredFields = [
    fields.molecularProfileId,
    fields.variantOrigin,
    fields.sourceId,
    fields.evidenceType,
    fields.significance,
    fields.evidenceLevel,
    fields.evidenceDirection,
    fields.rating
  ]

  //Bail out if any required fields aren't filled in
  if (requiredFields.find((f) => f === undefined)) {
    return undefined
  } else {
    return {
      fields: {
        molecularProfileId: fields.molecularProfileId!,
        variantOrigin: fields.variantOrigin!,
        sourceId: fields.sourceId!,
        evidenceType: fields.evidenceType!,
        significance: fields.significance!,
        evidenceLevel: fields.evidenceLevel!,
        evidenceDirection: fields.evidenceDirection!,
        rating: fields.rating!,
        description: fmt.toNullableString(fields.description),
        diseaseId: fmt.toNullableInput(fields.diseaseId),
        phenotypeIds: fields.phenotypeIds ? fields.phenotypeIds : [],
        therapyIds: fields.therapyIds ? fields.therapyIds : [],
        therapyInteractionType: fmt.toNullableInput(
          fields.therapyInteractionType
        ),
      },
      organizationId: model.organizationId,
      comment: model.comment,
    }
  }
}

