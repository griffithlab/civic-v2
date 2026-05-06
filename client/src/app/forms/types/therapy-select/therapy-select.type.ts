import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import { EntityType } from '@app/forms/states/base.state'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import {
  Maybe,
  TherapySelectTagGQL,
  TherapySelectTagQuery,
  TherapySelectTagQueryVariables,
  TherapySelectTypeaheadFieldsFragment,
  TherapySelectTypeaheadGQL,
  TherapySelectTypeaheadQuery,
  TherapySelectTypeaheadQueryVariables,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  Subject,
} from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcTherapySelectFieldOptions = Partial<
  FieldTypeConfig<CvcTherapySelectFieldProps>
>
// TODO: finish implementing updated props interface w/ labels, placeholders groups,
// and multiMax limits, multiDefault placeholder
export interface CvcTherapySelectFieldProps extends FormlyFieldProps {
  entityName: CvcSelectEntityName
  isMultiSelect: boolean
  requireType: boolean
  placeholder: string
  requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) => string
  tooltip?: string
  description?: string
  extraType?: CvcFormFieldExtraType
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcTherapySelectFieldConfig
  extends FormlyFieldConfig<CvcTherapySelectFieldProps> {
  type: 'therapy-select' | 'therapy-multi-select' | Type<CvcTherapySelectField>
}

const TherapySelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcTherapySelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    TherapySelectTypeaheadQuery,
    TherapySelectTypeaheadQueryVariables,
    TherapySelectTypeaheadFieldsFragment,
    TherapySelectTagQuery,
    TherapySelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
    selector: 'cvc-therapy-select',
    templateUrl: './therapy-select.type.html',
    styleUrls: ['./therapy-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcTherapySelectField
  extends TherapySelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>
  onRequiresTherapy$?: BehaviorSubject<boolean>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<Maybe<string>>

  // FieldTypeConfig defaults
  defaultOptions: CvcTherapySelectFieldOptions = {
    props: {
      entityName: { singular: 'Therapy', plural: 'Therapies' },
      isMultiSelect: false,
      requireType: true,
      tooltip:
        'Therapy or therapy combination which interacts with the specified variant',
      placeholder: 'Search Therapies',
      requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) =>
        `Select an ${entityName} Type to search associated Therapies`,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  stateEntityName?: string

  constructor(
    private taq: TherapySelectTypeaheadGQL,
    private tq: TherapySelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.placeholder$ = new BehaviorSubject<Maybe<string>>(undefined)
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEntitySelectField({
      // mixin fn
      typeaheadQuery: this.taq,
      typeaheadParam$: undefined,
      tagQuery: this.tq,
      getTypeaheadVarsFn: this.getTypeaheadVarsFn,
      getTypeaheadResultsFn: this.getTypeaheadResultsFn,
      getTagQueryVarsFn: this.getTagQueryVarsFn,
      getTagQueryResultsFn: this.getTagQueryResultsFn,
      getSelectedItemOptionFn: this.getSelectedItemOptionFn,
      getSelectOptionsFn: this.getSelectOptionsFn,
      changeDetectorRef: this.changeDetectorRef,
      selectOpen$: this.selectOpen$,
      selectComponent: this.selectComponent,
    })
    this.configurePlaceholders()
  } // ngAfterViewInit()

  configureStateConnections(): void {
    if (!this.state) return
    this.stateEntityName = this.state.entityName
    // connect to onRequiresTherapy$
    if (!this.state.requires.requiresTherapy$) {
      console.warn(
        `${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`
      )
    } else {
      this.onRequiresTherapy$ = this.state.requires.requiresTherapy$
    }

    // connect onEntityType$
    if (this.props.requireType) {
      const etName = `${this.stateEntityName.toLowerCase()}Type$`
      if (!this.state.fields[etName]) {
        console.error(
          `${this.field.id} requireType is true, however form state does not provide Subject ${etName}.`
        )
      } else {
        this.onEntityType$ = this.state.fields[etName]
        // this.onEntityType$.pipe(tag(`${this.field.id} onEntityType$`)).subscribe()
      }
    }
  }

  configurePlaceholders(): void {
    this.placeholder$.next(this.props.placeholder)
    if (!this.onRequiresTherapy$ || !this.onEntityType$) return
    // update field placeholders & required status on state input events
    combineLatest([this.onRequiresTherapy$, this.onEntityType$])
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe(([requiresTherapy, entityType]: [boolean, Maybe<EntityType>]) => {
        // therapies are not associated with this entity type
        if (!requiresTherapy && entityType) {
          this.props.required = false
          this.props.disabled = true
          // no drug required, entity type specified
          this.props.description = `${formatEvidenceEnum(entityType)} ${
            this.state!.entityName
          } does not include associated therapies`
          this.props.extraType = 'prompt'
          this.resetField()
          this.cdr.markForCheck()
        }
        // if type required, toggle field required property off and show a 'Select Type..' prompt
        else if (this.props.requireType && !entityType) {
          this.props.required = false
          this.props.disabled = true
          // no drug required, entity type not specified
          this.props.description = this.props.requireTypePromptFn(
            this.state!.entityName,
            this.props.isMultiSelect
          )
          this.props.extraType = 'prompt'
        }
        // state indicates drug is required, set required, unset disabled, and show the placeholder (state will only return true from requiresTherapy$ if entityType provided)
        else if (requiresTherapy) {
          this.props.required = true
          this.props.disabled = false
          this.props.description = undefined
          this.props.extraType = undefined
        }
        // field currently has a value, but state indicates no drug is required, or no type is provided && type is required, so reset field
        else if (
          (!requiresTherapy && this.formControl.value) ||
          (this.props.requireType && !entityType && this.formControl.value)
        ) {
          this.resetField()
        console.log("HERE2")
        }
      })
  }

  getTypeaheadVarsFn(str: string): TherapySelectTypeaheadQueryVariables {
    return { name: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<TherapySelectTypeaheadQuery>) {
    return r.data.therapyTypeahead
  }

  getTagQueryVarsFn(id: number): TherapySelectTagQueryVariables {
    return { id: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<TherapySelectTagQuery>
  ): Maybe<TherapySelectTypeaheadFieldsFragment> {
    return r.data.therapy
  }

  getSelectedItemOptionFn(
    therapy: TherapySelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: therapy.id, label: therapy.name }
  }

  getSelectOptionsFn(
    results: TherapySelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (drug: TherapySelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || drug.name,
          value: drug.id,
        }
      }
    )
  }
}
