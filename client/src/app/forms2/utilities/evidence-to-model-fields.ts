import { RevisableEvidenceFieldsFragment } from '@app/generated/civic.apollo'
import { EvidenceItemFields } from '../models/evidence-fields.model'

export default function evidenceToModelFields(
  eid: RevisableEvidenceFieldsFragment
): EvidenceItemFields {
  return {
    geneId: 5, // debug
    variantId: 1388, // debug
    significance: eid.significance,
    description: eid.description,
    diseaseId: eid.disease?.id,
    drugIds: eid.therapies.map(d => d.id),
    therapyInteractionType: eid.therapyInteractionType,
    evidenceDirection: eid.evidenceDirection,
    evidenceLevel: eid.evidenceLevel,
    evidenceType: eid.evidenceType,
    molecularProfileId: eid.molecularProfile.id,
    phenotypeIds: eid.phenotypes.map(p => p.id),
    rating: eid.evidenceRating,
    sourceId: eid.source.id,
    variantOrigin: eid.variantOrigin
  }
}
