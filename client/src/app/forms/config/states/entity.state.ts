import {
  AssertionClinicalSignificance,
  AssertionDirection,
  AssertionType,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceType,
} from "@app/generated/civic.apollo";
import { $enum } from "ts-enum-util";

export type EntityClinicalSignificance =
  EvidenceClinicalSignificance | AssertionClinicalSignificance;

export type EntityType = EvidenceType | AssertionType

export type EntityDirection = EvidenceDirection | AssertionDirection;

export type ValidEntity = {
  entityType: EntityType
  clinicalSignificance: EntityClinicalSignificance[]
  entityDirection: EntityDirection[]
  requiresDisease: boolean
  requiresDrug: boolean
  requiresAcmgCodes: boolean
  requiresAmpLevel: boolean
}

export interface IEntityState {
  validStates: Map<EntityType, ValidEntity>
  getTypeOptions: () => EntityType[];
  getSignificanceOptions: (et: EntityType) => EntityClinicalSignificance[];
  getDirectionOptions: (et: EntityType) => EntityDirection[];
  isValidSignificanceOption: (et: EntityType, cs: EntityClinicalSignificance) => boolean;
  isValidDirectionOption: (et: EntityType, cs: EntityDirection) => boolean
  requiresDrug: (et: EntityType) => boolean;
  requiresDisease: (et: EntityType) => boolean;
  requiresAcmgCodes: (et: EntityType) => boolean;
  requiresAmpLevel: (et: EntityType) => boolean;
}

class EntityState implements IEntityState {
  validStates = new Map<EntityType, ValidEntity>();
  constructor() {
  }

  getTypeOptions = (): EntityType[] => {
    return $enum(EvidenceType).map(value => value);
  }

  getSignificanceOptions = (et: EntityType): EntityClinicalSignificance[] => {
    const state = this.validStates.get(et);
    return state?.clinicalSignificance || [];
  }

  isValidSignificanceOption = (et: EntityType,
    cs: EntityClinicalSignificance): boolean => {
    const state = this.validStates.get(et);
    if (!state) { return true; }
    return state.clinicalSignificance.includes(cs);
  }

  getDirectionOptions = (et: EntityType): EntityDirection[] => {
    const state = this.validStates.get(et);
    return state?.entityDirection || [];
  }

  isValidDirectionOption = (et: EntityType, ed: EntityDirection): boolean => {
    const state = this.validStates.get(et);
    if (!state) { return true; }
    return state.entityDirection.includes(ed);
  }

  requiresDrug = (et: EntityType): boolean => {
    const state = this.validStates.get(et);
    return state !== undefined ? state.requiresDrug : true;
  }

  requiresDisease = (et: EntityType): boolean => {
    const state = this.validStates.get(et);
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

export { EntityState };
