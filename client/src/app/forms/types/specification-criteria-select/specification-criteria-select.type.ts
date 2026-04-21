import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  QueryList,
  effect,
  signal,
  Signal,
  TemplateRef,
  Type,
  ViewChildren,
  WritableSignal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ApolloQueryResult } from '@apollo/client/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import { EntityType } from '@app/forms/states/base.state'
import {
  SpecificationCriteriumSelectTagGQL,
  SpecificationCriteriumSelectTagQuery,
  SpecificationCriteriumSelectTagQueryVariables,
  SpecificationCriteriumSelectTypeaheadGQL,
  SpecificationCriteriumSelectTypeaheadQuery,
  SpecificationCriteriumSelectTypeaheadQueryVariables,
  Maybe,
  SpecificationCriteriumSelectTypeaheadFieldsFragment,
  AssertionType,
  ValidSpecificationsGQL,
  SpecificationSelectFieldsFragment
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
} from 'rxjs'
import mixin from 'ts-mixin-extended'

export type SpecificationSelectFieldOptions = Partial<
  FieldTypeConfig<CvcSpecificationCriteriaSelectFieldProps>
>
export interface CvcSpecificationCriteriaSelectFieldProps extends FormlyFieldProps {
  // entity names, singular & plural
  entityName: CvcSelectEntityName
  // if true, field is a multi-select & its model value should be an array
  isMultiSelect: boolean
  // if true, field disabled when no entity type available
  requireType: boolean
  placeholder: string
  requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) => string
  tooltip?: string
  description?: string
  extraType?: string
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcSpecificationCriteriaSelectFieldConfig
  extends FormlyFieldConfig<CvcSpecificationCriteriaSelectFieldProps> {
  type:
    | 'specification-criteria-select'
    | 'specification-criteria-multi-select'
    | Type<CvcSpecificationCriteriaSelectField>
}

const SpecificationCriteriaSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcSpecificationCriteriaSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    SpecificationCriteriumSelectTypeaheadQuery,
    SpecificationCriteriumSelectTypeaheadQueryVariables,
    SpecificationCriteriumSelectTypeaheadFieldsFragment,
    SpecificationCriteriumSelectTagQuery,
    SpecificationCriteriumSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
  selector: 'cvc-specification-criteria-select',
  templateUrl: './specification-criteria-select.type.html',
  styleUrls: ['./specification-criteria-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcSpecificationCriteriaSelectField
  extends SpecificationCriteriaSelectMixin
  implements AfterViewInit
{

  placeholder$: BehaviorSubject<Maybe<string>>

  // FieldTypeConfig defaults
  defaultOptions: SpecificationSelectFieldOptions = {
    props: {
      entityName: { singular: 'Specification Criteria', plural: 'Specification Criteria' },
      disabled: true,
      label: "Specification Criteria",
      isMultiSelect: false,
      requireType: true,
      extraType: 'description',
      description: '',
      tooltip: 'Specification Criteria Depend on the Type of Assertion being curated.',
      placeholder: 'Search Criteria',
      requireTypePromptFn: (entityName: string, _isMultiSelect?: boolean) =>
        `Select an ${entityName} Type To Search Specification Criteria`,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  stateEntityName?: string

  viewer: Signal<Maybe<Viewer>>
  entityType: WritableSignal<Maybe<EntityType>> = signal(undefined)
  selectedOrgId: Signal<Maybe<number>> = computed(() => this.viewer()?.mostRecentOrg?.id)
  formProps: Signal<SpecificationSelectFieldOptions> = signal(this.defaultOptions)
  validSpecifications: WritableSignal<Maybe<SpecificationSelectFieldsFragment[]>> = signal([])
  selectedSpecificationId?: number

  formOptions = new Map<EntityType, SpecificationSelectFieldOptions>()

  constructor(
    private taq: SpecificationCriteriumSelectTypeaheadGQL,
    private tq: SpecificationCriteriumSelectTagGQL,
    private vsq: ValidSpecificationsGQL,
    private viewerService: ViewerService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.placeholder$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.viewer = toSignal(this.viewerService.viewer$)

    this.formOptions.set(AssertionType.Predisposing, {
      props: {
      entityName: { singular: 'ACMG/AMP Code', plural: 'ACMG/AMP Codes' },
      label: "Specification Criteria: ACMG/AMP Code(s)",
      isMultiSelect: true,
      requireType: true,
      required: true,
      disabled: false,
      tooltip:
        'If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.',
      placeholder: 'Search ACMG/AMP Codes',
      requireTypePromptFn: (entityName: string, _isMultiSelect?: boolean) =>
        `Select an ${entityName} Type to search associated ACMG Code(s)`,
      }
    })
    this.formOptions.set(AssertionType.Diagnostic, {
      props: {
        entityName: { singular: 'AMP/ASCO/CAP Category', plural: 'AMP/ASCO/CAP Categories' },
        label: "Specification Criteria: AMP/ASCO/CAP Category",
        isMultiSelect: false,
        requireType: true,
        required: true,
        disabled: false,
        tooltip: 'If applicable, please provide the AMP/ASCO/CAP somatic variant classification.',
        placeholder: 'Search AMP/ASCO/CAP Categories',
        requireTypePromptFn: (entityName: string, _isMultiSelect?: boolean) =>
          `Select an ${entityName} Type to search associated AMP/ASCO/CAP Categories`,
      },
    })
    this.formOptions.set(AssertionType.Prognostic, {
      props: {
        entityName: { singular: 'AMP/ASCO/CAP Category', plural: 'AMP/ASCO/CAP Categories' },
        label: "Specification Criteria: AMP/ASCO/CAP Category",
        isMultiSelect: false,
        requireType: true,
        required: true,
        disabled: false,
        tooltip: 'If applicable, please provide the AMP/ASCO/CAP somatic variant classification.',
        placeholder: 'Search AMP/ASCO/CAP Categories',
        requireTypePromptFn: (entityName: string, _isMultiSelect?: boolean) =>
          `Select an ${entityName} Type to search associated AMP/ASCO/CAP Categories`,
      },
    })
    this.formOptions.set(AssertionType.Predictive, {
      props: {
        entityName: { singular: 'AMP/ASCO/CAP Category', plural: 'AMP/ASCO/CAP Categories' },
        label: "Specification Criteria: AMP/ASCO/CAP Category",
        isMultiSelect: false,
        requireType: true,
        required: true,
        disabled: false,
        tooltip: 'If applicable, please provide the AMP/ASCO/CAP somatic variant classification.',
        placeholder: 'Search AMP/ASCO/CAP Categories',
        requireTypePromptFn: (entityName: string, _isMultiSelect?: boolean) =>
          `Select an ${entityName} Type to search associated AMP/ASCO/CAP Categories`,
      },
    })
    this.formOptions.set(AssertionType.Oncogenic, {
      props: {
        entityName: {
          singular: 'ClinGen/CGC/VICC Code',
          plural: 'ClinGen/CGC/VICC Codes',
        },
        label: "Specification Criteria: ClinGen/CGC/VICC Code(s)",
        isMultiSelect: true,
        requireType: true,
        required: true,
        disabled: false,
        tooltip:
          'If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).',
        placeholder: 'Search ClinGen/CGC/VICC Codes',
        requireTypePromptFn: (entityName: string, _isMultiSelect?: boolean) =>
          `Select an ${entityName} Type to search associated ClinGen Code(s)`,
      },
    })

    effect(() => {
      const selectedType = this.entityType()
      this.resetField()
      if (selectedType) {
        const newConfig = this.formOptions.get(selectedType)
        if (newConfig) {
          Object.assign(this.props, newConfig.props)
        } else {
          Object.assign(this.props, this.defaultOptions.props)
        }
      } else {
        Object.assign(this.props, this.defaultOptions.props)
      }
    })

    effect(() => {
      const selectedType = this.entityType()
      const selectedOrgId = this.selectedOrgId()
      this.selectedSpecificationId = undefined

      if (selectedType) {
        this.vsq.fetch({
          orgId: selectedOrgId,
          assertionType: selectedType as AssertionType
        }).pipe(untilDestroyed(this)).subscribe(
          (res) => {
            if(res.data) {
              this.validSpecifications.set(res.data.specifications)
            }
          }
        )
      } else {
        this.validSpecifications.set([])
      }
    })
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
      selectComponent: this.selectComponent,
    })
    this.configurePlaceholders()
  } // ngAfterViewInit()

  configureStateConnections(): void {
    if (!this.state) return
    this.stateEntityName = this.state.entityName

    if (this.props.requireType) {
      const etName = `${this.stateEntityName.toLowerCase()}Type$`
      if (!this.state.fields[etName]) {
        console.error(
          `${this.field.id} requireType is true, however form state does not provide Subject ${etName}.`
        )
      } else {
        this.state.fields[etName].pipe(untilDestroyed(this)).subscribe(
          (selectedType : EntityType) => {
            this.entityType.set(selectedType)
          }
        )
      }
    }
  }

  configurePlaceholders(): void {
    this.placeholder$.next(this.props.placeholders)
  }

  getTypeaheadVarsFn(str: string): SpecificationCriteriumSelectTypeaheadQueryVariables {
    return { code: str, specification: this.selectedSpecificationId }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<SpecificationCriteriumSelectTypeaheadQuery>) {
    return r.data.specificationCriteriumTypeahead
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<SpecificationCriteriumSelectTagQuery>
  ): Maybe<SpecificationCriteriumSelectTypeaheadFieldsFragment> {
    return r.data.specificationCriterium
  }

  getTagQueryVarsFn(id: number): SpecificationCriteriumSelectTagQueryVariables {
    return { id: id }
  }

  getSelectedItemOptionFn(
    specificationCriterium: SpecificationCriteriumSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: specificationCriterium.id, label: specificationCriterium.code }
  }

  getSelectOptionsFn(
    results: SpecificationCriteriumSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (specificationCriterium: SpecificationCriteriumSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || specificationCriterium.code,
          value: specificationCriterium.id,
        }
      }
    )
  }
}
