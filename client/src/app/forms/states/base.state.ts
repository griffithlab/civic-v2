import {
  AssertionSignificance,
  AssertionDirection,
  AssertionType,
  TherapyInteraction,
  EvidenceSignificance,
  EvidenceDirection,
  EvidenceType,
} from '@app/generated/civic.apollo.types'
import { Signal, WritableSignal } from '@angular/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { $enum } from 'ts-enum-util'

export type EntityType = EvidenceType | AssertionType

export type EntitySignificance = EvidenceSignificance | AssertionSignificance

export type EntityDirection = EvidenceDirection | AssertionDirection

export type CvcFormMode = 'revise' | 'add' | 'clone'

export type ValidEntity = {
  entityType: EntityType
  significance: EntitySignificance[]
  entityDirection: EntityDirection[]
  requiresDisease: boolean
  requiresTherapy: boolean
  requiresAcmgCodes: boolean
  requiresAmpLevel: boolean
  requiresClingenCodes: boolean
  allowsFdaApproval: boolean
}

export enum EntityName {
  EVIDENCE = 'Evidence',
  ASSERTION = 'Assertion',
}

export enum SelectType {
  CS = 'significance',
  ED = 'entityDirection',
}

/**
 * Where each field publishes its current value, keyed by the field's formly
 * `key`. Writable because the fields own them.
 */
export type EntityFieldSignalMap = { [key: string]: WritableSignal<any> }

/**
 * Everything derived from those values — which enum options apply, which fields
 * the chosen entity type requires. Read-only because nothing pushes into them;
 * they are `computed` from `fields`.
 */
export type EntityDerivedSignalMap = { [key: string]: Signal<any> }

// 'state' for non-entity forms that just stores layout for form-field.wrapper's template logic
export type NoStateFormOptions = { formState: { formLayout: NzFormLayoutType } }

export interface IEntityState {
  formLayout: NzFormLayoutType
  formMode: CvcFormMode
  validStates: Map<EntityType, ValidEntity>
  getTypeOptions: () => EntityType[]
  getSignificanceOptions: (et: EntityType) => EntitySignificance[]
  getDirectionOptions: (et: EntityType) => EntityDirection[]
  isValidSignificanceOption: (et: EntityType, cs: EntitySignificance) => boolean
  isValidDirectionOption: (et: EntityType, cs: EntityDirection) => boolean
  requiresTherapy: (et: EntityType) => boolean
  requiresDisease: (et: EntityType) => boolean
  requiresAcmgCodes: (et: EntityType) => boolean
  requiresAmpLevel: (et: EntityType) => boolean
  requiresClingenCodes: (et: EntityType) => boolean
  allowsFdaApproval: (et: EntityType) => boolean
}

/**
 * Form state as signals rather than subjects.
 *
 * This replaced a map of BehaviorSubjects plus a `formReady$` barrier. The
 * barrier existed because a BehaviorSubject replays its current value to every
 * new subscriber, and during population that value is the initial `undefined` —
 * so a field subscribing to a sibling's value immediately received an event
 * indistinguishable from "the user just cleared this", and dutifully cleared a
 * value the revise form had only just loaded. `formReady$` was a global "don't
 * subscribe yet" flag compensating for that.
 *
 * Signals remove the need for it. A signal has a current value rather than a
 * stream of events, so there is nothing to replay and misread; and effects flush
 * at the end of a change-detection cycle, by which point every field's ngOnInit
 * has published. A field created later still reads the truth whenever it reads,
 * which is the case the old barrier could not handle at all.
 */
class BaseState implements IEntityState {
  formLayout: NzFormLayoutType = 'vertical'
  formMode: CvcFormMode = 'add'
  fields: EntityFieldSignalMap
  enums: EntityDerivedSignalMap
  requires: EntityDerivedSignalMap
  validStates = new Map<EntityType, ValidEntity>()
  entityName: EntityName
  pluralNames: Map<EntityName, string>

  constructor(en: EntityName) {
    this.fields = {}
    this.enums = {}
    this.requires = {}

    this.entityName = en
    this.pluralNames = new Map<EntityName, string>()

    this.pluralNames.set(EntityName.ASSERTION, 'Assertions')
    this.pluralNames.set(EntityName.EVIDENCE, 'Evidence')
  }

  getTypeOptions = (): EntityType[] => {
    if (this.entityName == EntityName.ASSERTION) {
      return $enum(AssertionType).map((value) => value)
    } else {
      return $enum(EvidenceType).map((value) => value)
    }
  }

  getSignificanceOptions = (et: EntityType): EntitySignificance[] => {
    const state = this.validStates.get(et)
    return state?.significance || []
  }

  getInteractionOptions = (): TherapyInteraction[] => {
    return $enum(TherapyInteraction).map((value) => value)
  }

  isValidSignificanceOption = (
    et: EntityType,
    cs: EntitySignificance
  ): boolean => {
    const state = this.validStates.get(et)
    if (!state) {
      return true
    }
    return state.significance.includes(cs)
  }

  getDirectionOptions = (et: EntityType): EntityDirection[] => {
    const state = this.validStates.get(et)
    return state?.entityDirection || []
  }

  isValidDirectionOption = (et: EntityType, ed: EntityDirection): boolean => {
    const state = this.validStates.get(et)
    if (!state) {
      return true
    }
    return state.entityDirection.includes(ed)
  }

  requiresTherapy = (et: EntityType): boolean => {
    const state = this.validStates.get(et)
    return state !== undefined ? state.requiresTherapy : true
  }

  requiresDisease = (et: EntityType): boolean => {
    const state = this.validStates.get(et)
    return state !== undefined ? state.requiresDisease : true
  }

  requiresAcmgCodes = (at: EntityType): boolean => {
    const state = this.validStates.get(at)
    return state !== undefined ? state.requiresAcmgCodes : true
  }

  requiresAmpLevel = (at: EntityType): boolean => {
    const state = this.validStates.get(at)
    return state !== undefined ? state.requiresAmpLevel : true
  }

  requiresClingenCodes = (et: EntityType): boolean => {
    const state = this.validStates.get(et)
    return state !== undefined ? state.requiresClingenCodes : true
  }

  allowsFdaApproval = (et: EntityType): boolean => {
    const state = this.validStates.get(et)
    return state !== undefined ? state.allowsFdaApproval : true
  }

  /**
   * Kept because the form components call it from ngOnDestroy. There is nothing
   * left to tear down — the derived state is `computed`, which needs no
   * unsubscribing — but removing it would mean touching every form config.
   */
  onDestroy() {}
}

export { BaseState }
