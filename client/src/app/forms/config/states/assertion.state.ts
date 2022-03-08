import {
  AssertionClinicalSignificance,
  AssertionDirection,
  AssertionType,
  Maybe
} from "@app/generated/civic.apollo";
import { $enum } from "ts-enum-util";
import {
  IEntityState,
  EntityType,
  EntityDirection,
  EntityClinicalSignificance,
  ValidEntity
} from "./state.types";

class AssertionState implements IEntityState {
  validStates = new Map<EntityType, ValidEntity>();
  constructor() {
    this.validStates.set(AssertionType.Predictive, {
      entityType: AssertionType.Predictive,
      clinicalSignificance: [
        AssertionClinicalSignificance.Sensitivityresponse,
        AssertionClinicalSignificance.Resistance,
        AssertionClinicalSignificance.AdverseResponse,
        AssertionClinicalSignificance.ReducedSensitivity,
        AssertionClinicalSignificance.Na,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: true,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Diagnostic, {
      entityType: AssertionType.Diagnostic,
      clinicalSignificance: [
        AssertionClinicalSignificance.Positive,
        AssertionClinicalSignificance.Negative,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Prognostic, {
      entityType: AssertionType.Prognostic,
      clinicalSignificance: [
        AssertionClinicalSignificance.BetterOutcome,
        AssertionClinicalSignificance.PoorOutcome,
        AssertionClinicalSignificance.Na
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Predisposing, {
      entityType: AssertionType.Predisposing,
      clinicalSignificance: [
        AssertionClinicalSignificance.Pathogenic,
        AssertionClinicalSignificance.LikelyPathogenic,
        AssertionClinicalSignificance.Benign,
        AssertionClinicalSignificance.LikelyBenign,
        AssertionClinicalSignificance.UncertainSignificance,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
    });

  }

  getTypeOptions = (): EntityType[] => {
    return $enum(AssertionType).map(value => value);
  }

  // call with no argument to get all significance options
  getSignificanceOptions = (at: Maybe<EntityType>): EntityClinicalSignificance[] => {
    if (!at) { return $enum(AssertionClinicalSignificance).map(value => value); }
    const state = this.validStates.get(at);
    return state?.clinicalSignificance || [];
  }

  isValidSignificanceOption = (at: EntityType,
    cs: EntityClinicalSignificance): boolean => {
    const state = this.validStates.get(at);
    if (!state) { return true; }
    return state.clinicalSignificance.includes(cs);
  }

  getDirectionOptions = (at: EntityType): EntityDirection[] => {
    const state = this.validStates.get(at);
    return state?.entityDirection || [];
  }

  isValidDirectionOption = (at: AssertionType, ed: AssertionDirection): boolean => {
    const state = this.validStates.get(at);
    if (!state) { return true; }
    return state.entityDirection.includes(ed);
  }

  requiresDrug = (at: EntityType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresDrug : true;
  }

  requiresDisease = (at: EntityType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresDisease : true;
  }

  requiresAcmgCodes = (at: EntityType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresAcmgCodes : true;
  }

  requiresAmpLevel = (at: EntityType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresAmpLevel : true;
  }
}

export { AssertionState };
