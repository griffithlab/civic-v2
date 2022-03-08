import {
  AssertionClinicalSignificance,
  AssertionDirection,
  AssertionType,
  Maybe
} from "@app/generated/civic.apollo";
import { $enum } from "ts-enum-util";

interface ValidAssertionItem {
  assertionType: AssertionType;
  clinicalSignificance: AssertionClinicalSignificance[];
  assertionDirection: AssertionDirection[];
  requiresDisease: boolean;
  requiresDrug: boolean;
  requiresAcmgCodes: boolean;
  requiresAmpLevel: boolean;
}

interface IAssertionState {
  validStates: Map<AssertionType, ValidAssertionItem>;
  getSignificanceOptions: (et?: AssertionType) => AssertionClinicalSignificance[];
  getDirectionOptions: (at: AssertionType) => AssertionDirection[];
  isValidSignificanceOption: (at: AssertionType, cs: AssertionClinicalSignificance) => boolean;
  requiresDrug: (at: AssertionType) => boolean;
  requiresDisease: (at: AssertionType) => boolean;
  requiresAcmgCodes: (at: AssertionType) => boolean;
  requiresAmpLevel: (at: AssertionType) => boolean;
}

class AssertionState implements IAssertionState {
  validStates = new Map<AssertionType, ValidAssertionItem>();
  constructor() {
    this.validStates.set(AssertionType.Predictive, {
      assertionType: AssertionType.Predictive,
      clinicalSignificance: [
        AssertionClinicalSignificance.Sensitivityresponse,
        AssertionClinicalSignificance.Resistance,
        AssertionClinicalSignificance.AdverseResponse,
        AssertionClinicalSignificance.ReducedSensitivity,
        AssertionClinicalSignificance.Na,
      ],
      assertionDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: true,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Diagnostic, {
      assertionType: AssertionType.Diagnostic,
      clinicalSignificance: [
        AssertionClinicalSignificance.Positive,
        AssertionClinicalSignificance.Negative,
      ],
      assertionDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Prognostic, {
      assertionType: AssertionType.Prognostic,
      clinicalSignificance: [
        AssertionClinicalSignificance.BetterOutcome,
        AssertionClinicalSignificance.PoorOutcome,
        AssertionClinicalSignificance.Na
      ],
      assertionDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Predisposing, {
      assertionType: AssertionType.Predisposing,
      clinicalSignificance: [
        AssertionClinicalSignificance.Pathogenic,
        AssertionClinicalSignificance.LikelyPathogenic,
        AssertionClinicalSignificance.Benign,
        AssertionClinicalSignificance.LikelyBenign,
        AssertionClinicalSignificance.UncertainSignificance,
      ],
      assertionDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
    });

  }

  // call with no argument to get all significance options
  getSignificanceOptions = (at: Maybe<AssertionType>): AssertionClinicalSignificance[] => {
    if (!at) { return $enum(AssertionClinicalSignificance).map(value => value); }
    const state = this.validStates.get(at);
    return state?.clinicalSignificance || [];
  }

  isValidSignificanceOption = (at: AssertionType,
    cs: AssertionClinicalSignificance): boolean => {
    const state = this.validStates.get(at);
    if (!state) { return true; }
    return state.clinicalSignificance.includes(cs);
  }

  getDirectionOptions = (at: AssertionType): AssertionDirection[] => {
    const state = this.validStates.get(at);
    return state?.assertionDirection || [];
  }

  isValidDirectionOption = (at: AssertionType, ed: AssertionDirection): boolean => {
    const state = this.validStates.get(at);
    if (!state) { return true; }
    return state.assertionDirection.includes(ed);
  }

  requiresDrug = (at: AssertionType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresDrug : true;
  }

  requiresDisease = (at: AssertionType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresDisease : true;
  }

  requiresAcmgCodes = (at: AssertionType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresAcmgCodes: true;
  }

  requiresAmpLevel = (at: AssertionType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresAmpLevel: true;
  }
}

export { AssertionState, IAssertionState };
