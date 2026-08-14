import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Type,
  effect,
  inject,
} from '@angular/core'
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop'
import { ReactiveFormsModule } from '@angular/forms'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import {
  CvcEntitySelectDirective,
  CvcEntitySelectFieldBase,
  CvcEntitySelectFieldProps,
  CvcEntitySelectValue,
  CvcHighlightComponent,
  CvcSelectAddFormComponent,
  CvcSelectMessagesComponent,
  entitySelectConfig,
} from '@app/forms/select'
import { EntityType } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo.types'
import { CvcTagComponent } from '@app/tags'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { filter, take } from 'rxjs'
import { CvcDiseaseQuickAddForm } from './disease-quick-add/disease-quick-add.form'
import {
  DiseaseSelectTagGQL,
  DiseaseSelectTypeaheadFieldsFragment,
  DiseaseSelectTypeaheadGQL,
} from './disease-select.query.gql.generated'

export type CvcDiseaseSelectFieldOptions = Partial<
  FieldTypeConfig<CvcDiseaseSelectFieldProps>
>

export interface CvcDiseaseSelectFieldProps extends CvcEntitySelectFieldProps {
  /** the form's entity type must be chosen before a disease can be */
  requireType: boolean
  requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) => string
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcDiseaseSelectFieldConfig
  extends FormlyFieldConfig<CvcDiseaseSelectFieldProps> {
  type: 'disease-select' | 'disease-multi-select' | Type<CvcDiseaseSelectField>
}

@Component({
  selector: 'cvc-disease-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    NzTooltipModule,
    NzTypographyModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcHighlightComponent,
    CvcSelectAddFormComponent,
    CvcSelectMessagesComponent,
    CvcDiseaseQuickAddForm,
  ],
  templateUrl: './disease-select.type.html',
  styleUrl: './disease-select.type.less',
})
export class CvcDiseaseSelectField extends CvcEntitySelectFieldBase<
  DiseaseSelectTypeaheadFieldsFragment,
  void,
  CvcDiseaseSelectFieldProps
> {
  private readonly injector = inject(Injector)
  private readonly cdr = inject(ChangeDetectorRef)
  private readonly typeaheadGQL = inject(DiseaseSelectTypeaheadGQL)
  private readonly tagGQL = inject(DiseaseSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'Disease', plural: 'Diseases' },
    typename: 'Disease',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (name: string) => ({ name }),
    typeaheadResults: (data) => data?.diseaseTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.disease,
    },
  })

  defaultOptions: CvcDiseaseSelectFieldOptions = {
    props: {
      entityName: { singular: 'Disease', plural: 'Diseases' },
      tooltip:
        'Cancer or cancer subtype that is a result of the described variant',
      isMultiSelect: false,
      requireType: true,
      placeholder: 'Search Diseases',
      requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) =>
        `Select an ${entityName} Type to select an associated Disease${
          isMultiSelect ? '(s)' : ''
        }`,
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    if (!this.state?.formReady$) return
    // the form component populates its model, then announces formReady$
    this.state.formReady$
      .pipe(
        filter(Boolean),
        take(1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.connectFormState())
  }

  /**
   * Disease availability is driven by the form's entity type: some evidence and
   * assertion types have no associated disease at all.
   */
  private connectFormState(): void {
    const state = this.state!
    const requires = state.requires['requiresDisease$']
    if (!requires) {
      console.warn(
        `${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`
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

    const requiresDisease = toSignal(requires, { injector: this.injector })
    const entityType = entityTypeSubject
      ? toSignal(entityTypeSubject, { injector: this.injector })
      : () => undefined

    effect(
      () =>
        this.applyStateUpdates(
          requiresDisease() ?? false,
          entityType(),
          this.value()
        ),
      { injector: this.injector }
    )
  }

  private applyStateUpdates(
    requiresDisease: boolean,
    entityType: Maybe<EntityType>,
    diseaseId: CvcEntitySelectValue
  ): void {
    // diseases are not associated with this entity type
    if (!requiresDisease && entityType) {
      this.props.required = false
      this.props.disabled = true
      this.props.description = `${formatEvidenceEnum(entityType)} ${
        this.state!.entityName
      } does not include associated diseases`
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
    // state only reports requiresDisease once an entity type is set
    if (requiresDisease) {
      this.props.required = true
      this.props.disabled = false
      this.props.description = undefined
      this.props.extraType = undefined
    }
    // a value survives from before the type changed: drop it
    if (
      (!requiresDisease && diseaseId !== undefined) ||
      (this.props.requireType && !entityType && this.formControl.value)
    ) {
      this.resetField()
    }
    // props are plain objects read by the OnPush form-field wrapper above this
    // field; only marking the view dirty makes the wrapper re-render them
    this.cdr.markForCheck()
  }
}
