import {
  ChangeDetectorRef,
  Directive,
  Injector,
  effect,
  inject,
} from '@angular/core'
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { EntityType } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo.types'
import { filter, take } from 'rxjs'
import { CvcEntitySelectResult } from './entity-select-config'
import {
  CvcEntitySelectFieldBase,
  CvcEntitySelectValue,
} from './entity-select-field.base'
import { CvcTypeGatedSelectFieldProps } from './select.types'

/** How a field's availability follows the form's entity type. */
export interface CvcTypeGateConfig {
  /**
   * Key into the form state's `requires` map — 'requiresDisease$',
   * 'requiresTherapy$', 'requiresAcmgCodes$', 'requiresClingenCodes$'.
   * The state only reports it once an entity type has been chosen.
   */
  requiresKey: string
  /**
   * Description shown when the chosen entity type excludes this field, e.g.
   * `(t, e) => `${t} ${e} does not include associated diseases``.
   */
  excludedDescription: (entityType: string, entityName: string) => string
}

/**
 * An entity-select whose enabled/required state is driven by the form's entity
 * type. Four fields share this behavior (disease, therapy, acmg-code,
 * clingen-code); each supplies only its `requires` subject key and its
 * "excluded" wording.
 *
 * Subclasses that need extra reactions to the gate override
 * `onTypeGateApplied`.
 */
@Directive()
export abstract class CvcTypeGatedSelectFieldBase<
  TResult extends CvcEntitySelectResult,
  TParam = void,
  P extends CvcTypeGatedSelectFieldProps = CvcTypeGatedSelectFieldProps,
> extends CvcEntitySelectFieldBase<TResult, TParam, P> {
  protected abstract readonly typeGate: CvcTypeGateConfig

  private readonly injector = inject(Injector)
  protected readonly cdr = inject(ChangeDetectorRef)

  override ngOnInit(): void {
    super.ngOnInit()
    if (!this.state?.formReady$) return
    // the form component populates its model, then announces formReady$
    this.state.formReady$
      .pipe(filter(Boolean), take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.connectTypeGate())
  }

  private connectTypeGate(): void {
    const state = this.state!
    const requires = state.requires[this.typeGate.requiresKey]
    if (!requires) {
      console.warn(
        `${this.field.id} field's form provides a state, but could not find ${this.typeGate.requiresKey} subject to attach.`
      )
      return
    }

    const entityTypeKey = `${state.entityName.toLowerCase()}Type$`
    const entityTypeSubject = this.props.requireType
      ? state.fields[entityTypeKey]
      : undefined
    if (this.props.requireType && !entityTypeSubject) {
      console.error(
        `${this.field.id} requireType is true, however form state does not provide Subject ${entityTypeKey}.`
      )
      return
    }

    const isRequired = toSignal(requires, { injector: this.injector })
    const entityType = entityTypeSubject
      ? toSignal(entityTypeSubject, { injector: this.injector })
      : () => undefined

    effect(
      () =>
        this.applyStateUpdates(
          isRequired() ?? false,
          entityType(),
          this.value()
        ),
      { injector: this.injector }
    )
  }

  private applyStateUpdates(
    isRequired: boolean,
    entityType: Maybe<EntityType>,
    value: CvcEntitySelectValue
  ): void {
    // this entity type has no association with what the field selects
    if (!isRequired && entityType) {
      this.props.required = false
      this.props.disabled = true
      this.props.description = this.typeGate.excludedDescription(
        formatEvidenceEnum(entityType),
        this.state!.entityName
      )
      this.props.extraType = 'prompt'
    }
    // type required but not yet chosen: prompt for it instead of a search box
    if (this.props.requireType && !entityType) {
      this.props.required = false
      this.props.disabled = true
      this.props.description = this.props.requireTypePromptFn(
        this.state!.entityName,
        this.props.isMultiSelect
      )
      this.props.extraType = 'prompt'
    }
    // state only reports the requires flag once an entity type is set
    if (isRequired) {
      this.props.required = true
      this.props.disabled = false
      this.props.description = undefined
      this.props.extraType = undefined
    }
    // a value survives from before the type changed: drop it
    if (
      (!isRequired && value !== undefined) ||
      (this.props.requireType && !entityType && this.formControl.value)
    ) {
      this.resetField()
    }

    this.onTypeGateApplied(isRequired, entityType)

    // props are plain objects read by the OnPush form-field wrapper above this
    // field; only marking the view dirty makes the wrapper re-render them
    this.cdr.markForCheck()
  }

  /** hook for field-specific reactions; runs before the view is marked dirty */
  protected onTypeGateApplied(
    _isRequired: boolean,
    _entityType: Maybe<EntityType>
  ): void {}
}
