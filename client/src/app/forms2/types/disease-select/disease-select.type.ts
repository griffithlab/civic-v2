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
import { CvcSelectEntityName } from '@app/forms2/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms2/mixins/base/base-field'
import { EntityTagField } from '@app/forms2/mixins/entity-tag-field.mixin'
import { EntityType } from '@app/forms2/states/base.state'
import { CvcFormFieldExtraType } from '@app/forms2/wrappers/form-field/form-field.wrapper'
import {
  DiseaseSelectTagGQL,
  DiseaseSelectTagQuery,
  DiseaseSelectTagQueryVariables,
  DiseaseSelectTypeaheadFieldsFragment,
  DiseaseSelectTypeaheadGQL,
  DiseaseSelectTypeaheadQuery,
  DiseaseSelectTypeaheadQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject, combineLatest, Subject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'

export type CvcDiseaseSelectFieldOptions = Partial<
  FieldTypeConfig<CvcDiseaseSelectFieldProps>
>
export interface CvcDiseaseSelectFieldProps extends FormlyFieldProps {
  entityName: CvcSelectEntityName
  isMultiSelect: boolean
  requireType: boolean
  labels: {
    multi: string
    plural: string
  }
  placeholder: string
  requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) => string
  tooltip?: string
  description?: string
  extraType?: CvcFormFieldExtraType
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
  EntityTagField<
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
})
export class CvcDiseaseSelectField
  extends DiseaseSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>
  onRequiresDisease$?: BehaviorSubject<boolean>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<Maybe<string>>

  // FieldTypeConfig defaults
  defaultOptions: CvcDiseaseSelectFieldOptions = {
    props: {
      entityName: { singular: 'Disease', plural: 'Diseases' },
      label: 'Disease',
      tooltip:
        'Cancer or cancer subtype that is a result of the described variant',
      labels: {
        multi: 'Disease(s)',
        plural: 'Diseases',
      },
      isMultiSelect: false,
      requireType: true,
      placeholder: 'Search Diseases',
      requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) =>
        `Select an ${entityName} Type to search associated Disease${
          isMultiSelect ? '(s)' : ''
        }`,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  stateEntityName?: string

  constructor(
    private taq: DiseaseSelectTypeaheadGQL,
    private tq: DiseaseSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.placeholder$ = new BehaviorSubject<Maybe<string>>(undefined)
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEntityTagField({
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
    })
    this.configurePlaceholders()
    this.configureLabels()
  } // ngAfterViewInit()

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
        // this.onEntityType$.pipe(tag(`${this.field.id} onEntityType$`)).subscribe()
      }
    }
  }

  configurePlaceholders(): void {
    this.placeholder$.next(this.props.placeholder)
    if (!this.onRequiresDisease$ || !this.onEntityType$) return
    // update field placeholders & required status on state input events
    combineLatest([this.onRequiresDisease$, this.onEntityType$])
      // .pipe(
      //   tag(
      //     `${this.field.id} combineLatest([this.onRequiresDisease$, this.onEntityType$])`
      //   ),
      //   untilDestroyed(this)
      // )
      .subscribe(
        ([requiresDisease, entityType]: [boolean, Maybe<EntityType>]) => {
          // diseases are not associated with this entity type
          if (!requiresDisease && entityType) {
            this.props.required = false
            this.props.disabled = true
            // no disease required, entity type specified
            try {
              this.props.description = `${formatEvidenceEnum(entityType)} ${
                this.state!.entityName
              } does not include associated diseases`
            } catch (error) {
              console.log(error)
            }
            this.props.extraType = 'prompt'
            // TODO: figure out why markForCheck is required here, when identical code in drug-select does not require it. If this is removed, this description msg is not updated.
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
          // state indicates disease is required, set required, unset disabled, and show the placeholder (state will only return true from requiresDisease$ if entityType provided)
          if (requiresDisease) {
            this.props.required = true
            this.props.disabled = false
            this.props.description = undefined
            this.props.extraType = undefined
          }
          // field currently has a value, but state indicates no disease is required, or no type is provided && type is required, so reset field
          if (
            (!requiresDisease && this.formControl.value) ||
            (this.props.requireType && !entityType && this.formControl.value)
          ) {
            this.resetField()
          }
        }
      )
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
