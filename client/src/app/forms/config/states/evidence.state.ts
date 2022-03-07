import {
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceType,
  Maybe
} from "@app/generated/civic.apollo";
import { $enum } from "ts-enum-util";

interface ValidEvidenceItem {
  evidenceType: EvidenceType
  clinicalSignificance: EvidenceClinicalSignificance[]
  evidenceDirection: EvidenceDirection[]
  requiresDisease: boolean
  requiresDrug: boolean
}

interface OptionsFn {
  (et?: EvidenceType): EvidenceClinicalSignificance[] | EvidenceDirection[]
}

interface ValidationFn {
  (et: EvidenceType, cs: EvidenceClinicalSignificance): boolean
}

interface IEvidenceState {
  validStates: Map<EvidenceType, ValidEvidenceItem>
  getSignificanceOptions: (et?: EvidenceType) => EvidenceClinicalSignificance[]
  getDirectionOptions: (et: EvidenceType) => EvidenceDirection[]
  isValidSignificanceOption: (et: EvidenceType, cs: EvidenceClinicalSignificance) => boolean
  requiresDrug: (et: EvidenceType) => boolean
  requiresDisease: (et: EvidenceType) => boolean
}

class EvidenceState implements IEvidenceState {
  validStates = new Map<EvidenceType, ValidEvidenceItem>();
  constructor() {
    this.validStates.set(EvidenceType.Predictive, {
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

    this.validStates.set(EvidenceType.Diagnostic, {
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

    this.validStates.set(EvidenceType.Prognostic, {
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

    this.validStates.set(EvidenceType.Oncogenic, {
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

    this.validStates.set(EvidenceType.Predisposing, {
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

    this.validStates.set(EvidenceType.Functional, {
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
  }

  // call with no argument to get all significance options
  getSignificanceOptions = (et: Maybe<EvidenceType>): EvidenceClinicalSignificance[] => {
    if(!et) { return $enum(EvidenceClinicalSignificance).map(value => value); }
    const state = this.validStates.get(et);
    return state?.clinicalSignificance || [];
  }

  isValidSignificanceOption = (et: EvidenceType,
    cs: EvidenceClinicalSignificance): boolean => {
    const state = this.validStates.get(et);
    if (!state) { return true; }
    return state.clinicalSignificance.includes(cs);
  }

  getDirectionOptions = (et: EvidenceType): EvidenceDirection[] => {
    const state = this.validStates.get(et);
    return state?.evidenceDirection || [];
  }

  isValidDirectionOption = (et: EvidenceType, ed: EvidenceDirection): boolean => {
    const state = this.validStates.get(et);
    if (!state) { return true; }
    return state.evidenceDirection.includes(ed);
  }

  requiresDrug = (et: EvidenceType): boolean => {
    const state = this.validStates.get(et);
    return state !== undefined ? state.requiresDrug : true;
  }

  requiresDisease = (et: EvidenceType): boolean => {
    const state = this.validStates.get(et);
    return state !== undefined ? state.requiresDisease : true;
  }

}

export { EvidenceState, IEvidenceState };
