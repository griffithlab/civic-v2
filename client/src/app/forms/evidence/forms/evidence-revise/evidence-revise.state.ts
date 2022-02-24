import { EvidenceClinicalSignificance, EvidenceDirection, EvidenceType } from "@app/generated/civic.apollo";

export interface ValidEvidenceItem {
  evidenceType: EvidenceType
  clinicalSignificance: EvidenceClinicalSignificance[]
  evidenceDirection: EvidenceDirection[]
  requiresDisease: boolean
  requiresDrug: boolean
}

let validStates = new Map<EvidenceType, ValidEvidenceItem>();

validStates.set(EvidenceType.Predictive, {
  evidenceType: EvidenceType.Predictive,
  clinicalSignificance: [
    EvidenceClinicalSignificance.Sensitivityresponse,
    EvidenceClinicalSignificance.Resistance,
    EvidenceClinicalSignificance.AdverseResponse,
    EvidenceClinicalSignificance.ReducedSensitivity,
    EvidenceClinicalSignificance.Na,
  ],
  evidenceDirection: [
    EvidenceDirection.Supports,
    EvidenceDirection.DoesNotSupport
  ],
  requiresDisease: true,
  requiresDrug: true
});

validStates.set(EvidenceType.Diagnostic, {
  evidenceType: EvidenceType.Diagnostic,
  clinicalSignificance: [
    EvidenceClinicalSignificance.Positive,
    EvidenceClinicalSignificance.Negative,
  ],
  evidenceDirection: [
    EvidenceDirection.Supports,
    EvidenceDirection.DoesNotSupport
  ],
  requiresDisease: true,
  requiresDrug: false
});

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
  requiresDisease: true,
  requiresDrug: false
});

validStates.set(EvidenceType.Oncogenic, {
  evidenceType: EvidenceType.Oncogenic,
  clinicalSignificance: [
    EvidenceClinicalSignificance.Na,
  ],
  evidenceDirection: [
    EvidenceDirection.Na,
  ],
  requiresDisease: true,
  requiresDrug: false
});

validStates.set(EvidenceType.Functional, {
  evidenceType: EvidenceType.Functional,
  clinicalSignificance: [
    EvidenceClinicalSignificance.GainOfFunction,
    EvidenceClinicalSignificance.LossOfFunction,
    EvidenceClinicalSignificance.UnalteredFunction,
    EvidenceClinicalSignificance.Neomorphic,
    EvidenceClinicalSignificance.DominantNegative,
    EvidenceClinicalSignificance.Unknown,
  ],
  evidenceDirection: [
    EvidenceDirection.Supports,
    EvidenceDirection.DoesNotSupport
  ],
  requiresDisease: true,
  requiresDrug: false
});


export function getSignificanceOptions(t: EvidenceType): EvidenceClinicalSignificance[] {
  let state = validStates.get(t);
  return state?.clinicalSignificance || [];
}

export function requiresDrug(t: EvidenceType): boolean {
  let state = validStates.get(t);
  return state !== undefined ? state.requiresDrug : true;
}
