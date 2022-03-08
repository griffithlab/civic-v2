import {
  AssertionClinicalSignificance,
  AssertionDirection,
  AssertionType,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceType
} from "@app/generated/civic.apollo";

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
