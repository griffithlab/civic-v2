import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  Type,
  ViewChild,
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
  DiseaseSelectTagGQL,
  DiseaseSelectTagQuery,
  DiseaseSelectTagQueryVariables,
  DiseaseSelectTypeaheadFieldsFragment,
  DiseaseSelectTypeaheadGQL,
  DiseaseSelectTypeaheadQuery,
  DiseaseSelectTypeaheadQueryVariables,
  Maybe,
  QuickAddDiseaseMutationVariables,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzTSType } from 'ng-zorro-antd/core/types'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  combineLatest,
  filter,
  ReplaySubject,
  Subject,
  take,
} from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcDiseaseSelectFieldOptions = Partial<
  FieldTypeConfig<CvcDiseaseSelectFieldProps>
>
export interface CvcDiseaseSelectFieldProps extends FormlyFieldProps {
  entityName: CvcSelectEntityName
  isMultiSelect: boolean
  requireType: boolean
  placeholder: string
  requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) => string
  tooltip?: string
  description?: string
  extraType?: CvcFormFieldExtraType
  addFormTitle: NzTSType
  addFormContent?: NzTSType
  addFormParams?: QuickAddDiseaseMutationVariables
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcDiseaseSelectFieldConfig
  extends FormlyFieldConfig<CvcDiseaseSelectFieldProps> {
  type: 'disease-select' | 'disease-multi-select' | Type<CvcDiseaseSelectField>
}

const DiseaseSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcDiseaseSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    DiseaseSelectTypeaheadQuery,
    DiseaseSelectTypeaheadQueryVariables,
    DiseaseSelectTypeaheadFieldsFragment,
    DiseaseSelectTagQuery,
    DiseaseSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
    selector: 'cvc-disease-select',
    templateUrl: './disease-select.type.html',
    styleUrls: ['./disease-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcDiseaseSelectField
  extends DiseaseSelectMixin
  implements AfterViewInit
{
  // get option template query list to populate entity-select
  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>
  onRequiresDisease$?: BehaviorSubject<boolean>

  selectOpen$: ReplaySubject<Maybe<boolean>>
  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<Maybe<string>>

  stateEntityName?: string

  // FieldTypeConfig defaults
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
      addFormTitle: 'Add a New Disease',
    },
  }

  constructor(
    private taq: DiseaseSelectTypeaheadGQL,
    private tq: DiseaseSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.placeholder$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.selectOpen$ = new ReplaySubject<Maybe<boolean>>()
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
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
    // if state formReady exists,listen for parent ready event,
    // then configure - otherwise configure the field immediately
    if (this.state && this.state.formReady$) {
      this.state.formReady$
        .pipe(
          filter((r) => r), // only pass true values
          take(1), // unsubscribe after 1st emit
          untilDestroyed(this) // or form destroyed
        )
        .subscribe((_) => {
          this.configureField()
        })
    } else {
      this.configureField()
    }
  } // ngAfterViewInit()

  configureField(): void {
    this.placeholder$.next(this.props.placeholder)
    this.configureStateConnections()
  }

  configureStateConnections(): void {
    if (!this.state) return
    // connect to onRequiresDisease$
    if (!this.state.requires.requiresDisease$) {
      console.warn(
        `${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`
      )
    } else {
      this.onRequiresDisease$ = this.state.requires.requiresDisease$
    }

    // connect onEntityType$
    if (this.props.requireType) {
      const etName = `${this.state.entityName.toLowerCase()}Type$`
      if (!this.state.fields[etName]) {
        console.error(
          `${this.field.id} requireType is true, however form state does not provide Subject ${etName}.`
        )
      } else {
        this.onEntityType$ = this.state.fields[etName]
      }
    }
    if (!this.onRequiresDisease$ || !this.onEntityType$) return

    // watch requiresDisease and entityType to update field placeholders
    combineLatest([
      this.onRequiresDisease$,
      this.onEntityType$,
      this.onValueChange$,
    ])
      .pipe(
        // tag(
        //   `${this.field.id} combineLatest([this.onRequiresDisease$, this.onEntityType$])`
        // ),
        untilDestroyed(this)
      )
      .subscribe(
        ([requiresDisease, entityType, diseaseId]: [
          boolean,
          Maybe<EntityType>,
          Maybe<number | number[]>
        ]) => {
          this.onStateUpdates(requiresDisease, entityType, diseaseId)
        }
      )
  }

  onStateUpdates(
    requiresDisease: boolean,
    entityType: Maybe<EntityType>,
    diseaseId: Maybe<number | number[]>
  ): void {
    // diseases are not associated with this entity type
    if (!requiresDisease && entityType) {
      this.props.required = false
      this.props.disabled = true
      // no disease required, entity type specified
      this.props.description = `${formatEvidenceEnum(entityType)} ${
        this.state!.entityName
      } does not include associated diseases`
      this.props.extraType = 'prompt'
      // TODO: figure out why markForCheck is required here
      this.cdr.markForCheck()
    }
    // if type required, toggle field required property off and show a 'Select Type..' prompt
    if (this.props.requireType && !entityType) {
      this.props.required = false
      this.props.disabled = true
      // no disease required, entity type not specified
      this.props.description = this.props.requireTypePromptFn(
        this.state!.entityName,
        this.props.isMultiSelect
      )
      this.props.extraType = 'prompt'
    }
    // state indicates disease is required, set required, unset disabled,
    // and show the placeholder (state will only return true from requiresDisease$
    // if entityType provided)
    if (requiresDisease) {
      this.props.required = true
      this.props.disabled = false
      this.props.description = undefined
      this.props.extraType = undefined
    }
    // field currently has a value, but state indicates no disease is required,
    //  or no type is provided && type is required, so reset field
    if (
      (!requiresDisease && diseaseId !== undefined) ||
      (this.props.requireType && !entityType && this.formControl.value)
    ) {
      this.resetField()
    }
  }

  getTypeaheadVarsFn(str: string): DiseaseSelectTypeaheadQueryVariables {
    return { name: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<DiseaseSelectTypeaheadQuery>) {
    return r.data.diseaseTypeahead
  }

  getTagQueryVarsFn(id: number): DiseaseSelectTagQueryVariables {
    return { id: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<DiseaseSelectTagQuery>
  ): Maybe<DiseaseSelectTypeaheadFieldsFragment> {
    return r.data.disease
  }

  getSelectedItemOptionFn(
    disease: DiseaseSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: disease.id, label: disease.name }
  }

  getSelectOptionsFn(
    results: DiseaseSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (disease: DiseaseSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || disease.name,
          value: disease.id,
        }
      }
    )
  }
}
