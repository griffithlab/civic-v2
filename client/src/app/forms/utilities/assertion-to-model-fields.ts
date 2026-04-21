import { Maybe, RevisableAssertionFieldsFragment, SubmitAssertionInput, SuggestAssertionRevisionInput } from "@app/generated/civic.apollo";
import { AssertionFields } from "../models/assertion-fields.model";
import { AssertionReviseModel } from "../models/assertion-revise.model";
import * as fmt from '@app/forms/utilities/input-formatters'
import { AssertionSubmitModel } from "../models/assertion-submit.model";

export function assertionToModelFields(a: RevisableAssertionFieldsFragment): AssertionFields {
  return {
    specificationCriteriumIds: a.specificationCriteria.map(s => s.id),
    assertionDirection: a.assertionDirection,
    assertionType: a.assertionType,
    significance: a.significance,
    description: a.description,
    diseaseId: a.disease?.id,
    therapyIds: a.therapies.map(t => t.id),
    therapyInteractionType: a.therapyInteractionType,
    evidenceItemIds: a.evidenceItems.map(e => e.id),
    fdaCompanionTest: a.fdaCompanionTest,
    fdaRegulatoryApproval: a.regulatoryApproval,
    molecularProfileId: a.molecularProfile.id,
    nccnGuidelineId: a.nccnGuideline?.id,
    nccnGuidelineVersion: a.nccnGuidelineVersion,
    phenotypeIds: a.phenotypes.map(p => p.id),
    summary: a.summary,
    variantOrigin: a.variantOrigin
  }
}

export function assertionFormModelToInput(model: AssertionSubmitModel): Maybe<SubmitAssertionInput> {
  const fields = model.fields

  let requiredFields = [
    fields.assertionDirection,
    fields.assertionType,
    fields.significance,
    fields.variantOrigin,
    fields.molecularProfileId,
    model.comment
  ]

  if(requiredFields.find((f) => f === undefined)) {
    return undefined
  } else {

    return {
      fields: {
        specificationCriteriumIds: fields.specificationCriteriumIds || [],
        assertionDirection: fields.assertionDirection!,
        assertionType: fields.assertionType!,
        significance: fields.significance!,
        description: fmt.toNullableString(fields.description),
        diseaseId: fmt.toNullableInput(fields.diseaseId),
        therapyIds: fields.therapyIds || [],
        therapyInteractionType: fmt.toNullableInput(fields.therapyInteractionType),
        evidenceItemIds: fields.evidenceItemIds || [],
        fdaCompanionTest: fmt.toNullableInput(fields.fdaCompanionTest),
        fdaRegulatoryApproval: fmt.toNullableInput(fields.fdaRegulatoryApproval),
        molecularProfileId: fields.molecularProfileId!,
        nccnGuidelineId: fmt.toNullableInput(fields.nccnGuidelineId),
        nccnGuidelineVersion: fmt.toNullableString(fields.nccnGuidelineVersion),
        phenotypeIds: fields.phenotypeIds || [],
        summary: fmt.toNullableString(fields.summary),
        variantOrigin: fields.variantOrigin!
      },
      organizationId: model.organizationId,
      comment: model.comment!
    }
  }

}

export function assertionFormModelToReviseInput(aid: number, model: AssertionReviseModel): Maybe<SuggestAssertionRevisionInput> {
  let input = assertionFormModelToInput(model)
  if(input) {
    return {
      id: aid,
      comment: input.comment!,
      organizationId: input.organizationId,
      fields: input.fields
    }
  } else {
    return undefined
  }
}
