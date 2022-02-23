import { EvidenceClinicalSignificance, EvidenceDirection, EvidenceType } from "@app/generated/civic.apollo";

export interface ValidEvidenceItem {
  evidenceType: EvidenceType
  clinicalSignificance: EvidenceClinicalSignificance[]
  evidenceDirection: EvidenceDirection[]
  hasDisease: boolean
  hasDrug: boolean
}

let validStates = new Map<EvidenceType, ValidEvidenceItem>();

validStates.set(EvidenceType.Prognostic, {
  evidenceType: EvidenceType.Prognostic,
  clinicalSignificance: [
    EvidenceClinicalSignificance.BetterOutcome,
    EvidenceClinicalSignificance.PoorOutcome,
    EvidenceClinicalSignificance.Na
  ],
  evidenceDirection: [
    EvidenceDirection.Supports,
    EvidenceDirection.DoesNotSupport
  ],
  hasDisease: true,
  hasDrug: false
});

export function getSignificanceOptions(t: EvidenceType): EvidenceClinicalSignificance[] {
  let state = validStates.get(t);
  return state?.clinicalSignificance || [];
}
