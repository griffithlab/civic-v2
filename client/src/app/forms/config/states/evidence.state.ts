import {
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceType
} from "@app/generated/civic.apollo";
import { $enum } from "ts-enum-util";

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

validStates.set(EvidenceType.Predisposing, {
  evidenceType: EvidenceType.Predisposing,
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
  requiresDisease: false,
  requiresDrug: false
});

export function getAllSignificanceOptions(): EvidenceClinicalSignificance[] {
  return $enum(EvidenceClinicalSignificance).map(value => value);
}

export function getSignificanceOptions(t: EvidenceType): EvidenceClinicalSignificance[] {
  let state = validStates.get(t);
  return state?.clinicalSignificance || [];
}

export function isValidSignificanceOption(t: EvidenceType,
                                          cs: EvidenceClinicalSignificance): boolean {
  let state = validStates.get(t);
  if(!state) { return true; }
  // why doesn't this more elegant option work here?
  // return cs in state.clinicalSignificance;
  return state.clinicalSignificance.find(vcs => vcs === cs) ? true : false;
}

export function getDirectionOptions(t: EvidenceType): EvidenceDirection[] {
  let state = validStates.get(t);
  return state?.evidenceDirection || [];
}

export function requiresDrug(t: EvidenceType): boolean {
  let state = validStates.get(t);
  return state !== undefined ? state.requiresDrug : true;
}

export function requiresDisease(t: EvidenceType): boolean {
  let state = validStates.get(t);
  return state !== undefined ? state.requiresDisease : true;
}
