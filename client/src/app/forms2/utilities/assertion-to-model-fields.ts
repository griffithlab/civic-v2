import { RevisableAssertionFieldsFragment } from "@app/generated/civic.apollo";
import { AssertionFields } from "../models/assertion-fields.model";

export function assertionToModelFields(a: RevisableAssertionFieldsFragment): AssertionFields {
  return {
    acmgCodeIds: a.acmgCodes.map(c => c.id),
    ampLevel: a.ampLevel,
    assertionDirection: a.assertionDirection,
    assertionType: a.assertionType,
    clingenCodeIds: a.clingenCodes.map(c => c.id),
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