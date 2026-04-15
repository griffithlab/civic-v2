import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  QueryList,
  Signal,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ApolloQueryResult } from '@apollo/client/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
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

export type CvcAmpCategorySelectFieldOptions = Partial<
  FieldTypeConfig<CvcAmpCategorySelectFieldProps>
>
// TODO: finish implementing updated props interface w/ labels, placeholders groups,
// and multiMax limits, multiDefault placeholder
export interface CvcAmpCategorySelectFieldProps extends FormlyFieldProps {
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
export interface CvcAmpCategorySelectFieldConfig
  extends FormlyFieldConfig<CvcAmpCategorySelectFieldProps> {
  type:
    | 'amp-category-select'
    | 'amp-category-multi-select'
    | Type<CvcAmpCategorySelectField>
}

const AmpCategorySelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcAmpCategorySelectFieldProps>,
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
  selector: 'cvc-amp-category-select',
  templateUrl: './amp-category-select.type.html',
  styleUrls: ['./amp-category-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcAmpCategorySelectField
  extends AmpCategorySelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>
  onRequiresAmpLevel$?: BehaviorSubject<boolean>

  placeholder$: BehaviorSubject<Maybe<string>>

  // FieldTypeConfig defaults
  defaultOptions: CvcAmpCategorySelectFieldOptions = {
    props: {
      entityName: { singular: 'AMP/ASCO/CAP Category', plural: 'AMP/ASCO/CAP Categories' },
      isMultiSelect: false,
      requireType: true,
      tooltip: 'If applicable, please provide the AMP/ASCO/CAP somatic variant classification.',
      placeholder: 'Search AMP/ASCO/CAP Categories',
      requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) =>
        `Select an ${entityName} Type to search associated AMP/ASCO/CAP Categories`,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  stateEntityName?: string

  viewer: Signal<Maybe<Viewer>>
  selectedOrgId: Signal<Maybe<number>> = computed(() => this.viewer()?.mostRecentOrg?.id)

  constructor(
    private taq: SpecificationCriteriumSelectTypeaheadGQL,
    private tq: SpecificationCriteriumSelectTagGQL,
    private viewerService: ViewerService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.placeholder$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.viewer = toSignal(this.viewerService.viewer$)
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
    // connect to onRequiresAmpLevel$
    if (!this.state.requires.requiresAmpLevel$) {
      console.warn(
        `${this.field.id} field's form provides a state, but could not find requiresAmpLevels$ subject to attach.`
      )
    } else {
      this.onRequiresAmpLevel$ = this.state.requires.requiresAmpLevel$
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
    this.placeholder$.next(this.props.placeholders)
    if (!this.onRequiresAmpLevel$ || !this.onEntityType$) return
    // update field placeholders & required status on state input events
    combineLatest([this.onRequiresAmpLevel$, this.onEntityType$])
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe(
        ([requiresAmpLevel, entityType]: [boolean, Maybe<EntityType>]) => {
          // ACMG Codes are not associated with this entity type
          if (!requiresAmpLevel && entityType) {
            this.props.required = false
            this.props.disabled = true
            // no ACMG Code required, entity type specified
            this.props.description = `${formatEvidenceEnum(entityType)} ${
              this.state!.entityName
            } does not include associated AMP/ASCO/CAP Categories`
            this.props.extraType = 'prompt'
            this.resetField()
            this.cdr.markForCheck()
          }
          // if type required, toggle field required property off and show a 'Select Type..' prompt
          else if (this.props.requireType && !entityType) {
            this.props.required = false
            this.props.disabled = true
            // no ACMG Code required, entity type not specified
            this.props.description = this.props.requireTypePromptFn(
              this.state!.entityName,
              this.props.isMultiSelect
            )
            this.props.extraType = 'prompt'
          }
          // state indicates ACMG Code is required, set required, unset disabled, and show the placeholder
          // (state will only return true from requiresAmpLevel$ if entityType provided)
          else if (requiresAmpLevel) {
            this.props.required = true
            this.props.disabled = false
            ;(this.props.description =
              'Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),
              (this.props.extraType = 'description')
          }
          // field currently has a value, but state indicates no ACMG Code is required, or no type is
          // provided && type is required, so reset field
          else if (
            (!requiresAmpLevel && this.formControl.value) ||
            (this.props.requireType && !entityType && this.formControl.value)
          ) {
            this.resetField()
          }
        }
      )
  }

  getTypeaheadVarsFn(str: string): SpecificationCriteriumSelectTypeaheadQueryVariables {
    return { code: str }
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
