import {
  formatEvidenceEnum,
  InputEnum,
} from '@app/core/utilities/enum-formatters/format-evidence-enum';
import {
  AssertionSignificance,
  AssertionDirection,
  AssertionType,
  EvidenceSignificance,
  EvidenceDirection,
  EvidenceType,
} from '@app/generated/civic.apollo';
import { $enum } from 'ts-enum-util';

export type EntityType = EvidenceType | AssertionType;

export type EntitySignificance = EvidenceSignificance | AssertionSignificance;

export type EntityDirection = EvidenceDirection | AssertionDirection;

export type ValidEntity = {
  entityType: EntityType;
  significance: EntitySignificance[];
  entityDirection: EntityDirection[];
  requiresDisease: boolean;
  requiresDrug: boolean;
  requiresAcmgCodes: boolean;
  requiresAmpLevel: boolean;
  requiresClingenCodes: boolean;
  allowsFdaApproval: boolean;
};

export type SelectOption = { [key: string | number]: string | number };

export enum EntityName {
  EVIDENCE = 'Evidence',
  ASSERTION = 'Assertion',
}

export enum SelectType {
  CS = 'significance',
  ED = 'entityDirection',
}

// export type OptionValidator = {
//    selectType: SelectType
//    expression: FieldValidatorFn
//    message: (error: any, field: FormlyFieldConfig) => string
// }

export interface IEntityState {
  validStates: Map<EntityType, ValidEntity>;
  getTypeOptions: () => EntityType[];
  getSignificanceOptions: (et: EntityType) => EntitySignificance[];
  getDirectionOptions: (et: EntityType) => EntityDirection[];
  isValidSignificanceOption: (
    et: EntityType,
    cs: EntitySignificance
  ) => boolean;
  isValidDirectionOption: (et: EntityType, cs: EntityDirection) => boolean;
  requiresDrug: (et: EntityType) => boolean;
  requiresDisease: (et: EntityType) => boolean;
  requiresAcmgCodes: (et: EntityType) => boolean;
  requiresAmpLevel: (et: EntityType) => boolean;
  requiresClingenCodes: (et: EntityType) => boolean;
  allowsFdaApproval: (et: EntityType) => boolean;
}

class EntityState implements IEntityState {
  validStates = new Map<EntityType, ValidEntity>();
  entityName: EntityName;

  pluralNames: Map<EntityName, string>;
  constructor(en: EntityName) {
    this.entityName = en;
    this.pluralNames = new Map<EntityName, string>();

    this.pluralNames.set(EntityName.ASSERTION, 'Assertions');
    this.pluralNames.set(EntityName.EVIDENCE, 'Evidence');
  }

  getTypeOptions = (): EntityType[] => {
    if (this.entityName == EntityName.ASSERTION) {
      return $enum(AssertionType).map((value) => value);
    } else {
      return $enum(EvidenceType).map((value) => value);
    }
  };

  getSignificanceOptions = (et: EntityType): EntitySignificance[] => {
    const state = this.validStates.get(et);
    return state?.significance || [];
  };

  isValidSignificanceOption = (
    et: EntityType,
    cs: EntitySignificance
  ): boolean => {
    const state = this.validStates.get(et);
    if (!state) {
      return true;
    }
    return state.significance.includes(cs);
  };

  getDirectionOptions = (et: EntityType): EntityDirection[] => {
    const state = this.validStates.get(et);
    return state?.entityDirection || [];
  };

  isValidDirectionOption = (et: EntityType, ed: EntityDirection): boolean => {
    const state = this.validStates.get(et);
    if (!state) {
      return true;
    }
    return state.entityDirection.includes(ed);
  };

  requiresDrug = (et: EntityType): boolean => {
    const state = this.validStates.get(et);
    return state !== undefined ? state.requiresDrug : true;
  };

  requiresDisease = (et: EntityType): boolean => {
    const state = this.validStates.get(et);
    return state !== undefined ? state.requiresDisease : true;
  };

  requiresAcmgCodes = (at: EntityType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresAcmgCodes : true;
  };

  requiresAmpLevel = (at: EntityType): boolean => {
    const state = this.validStates.get(at);
    return state !== undefined ? state.requiresAmpLevel : true;
  };

  requiresClingenCodes = (et: EntityType): boolean => {
    const state = this.validStates.get(et);
    return state !== undefined ? state.requiresClingenCodes : true;
  };

  allowsFdaApproval = (et: EntityType): boolean => {
    const state = this.validStates.get(et);
    return state !== undefined ? state.allowsFdaApproval : true;
  };

  getOptionsFromEnums = (e: InputEnum[]): SelectOption[] => {
    if (e.length === 0) {
      return [];
    }
    return e.map((value) => {
      return { value: value, label: formatEvidenceEnum(value) };
    });
  };
}

export { EntityState };
