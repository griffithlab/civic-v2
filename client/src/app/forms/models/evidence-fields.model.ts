import {
  TherapyInteraction,
  EvidenceSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  VariantOrigin,
} from '@app/generated/civic.apollo'

export type EvidenceItemFields = {
  // gene, variant included for initial input type development
  featureId?: number
  variantId?: number
  significance?: EvidenceSignificance
  description?: string
  diseaseId?: number
  therapyIds?: number[]
  therapyInteractionType?: TherapyInteraction
  evidenceDirection?: EvidenceDirection
  evidenceLevel?: EvidenceLevel
  evidenceType?: EvidenceType
  molecularProfileId?: number
  phenotypeIds?: number[]
  rating?: number
  sourceId?: number
  variantOrigin?: VariantOrigin
}
