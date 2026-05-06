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
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import { EntityType } from '@app/forms/states/base.state'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import {
  Maybe,
  PhenotypeSelectTagGQL,
  PhenotypeSelectTagQuery,
  PhenotypeSelectTagQueryVariables,
  PhenotypeSelectTypeaheadFieldsFragment,
  PhenotypeSelectTypeaheadGQL,
  PhenotypeSelectTypeaheadQuery,
  PhenotypeSelectTypeaheadQueryVariables,
} from '@app/generated/civic.apollo'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject, Subject } from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcPhenotypeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcPhenotypeSelectFieldProps>
>
// TODO: finish implementing updated props interface w/ labels, placeholders groups,
// and multiMax limits, multiDefault placeholder
export interface CvcPhenotypeSelectFieldProps extends FormlyFieldProps {
  // entity names, singular & plural
  entityName: CvcSelectEntityName
  // if true, field is a multi-select & its model value should be an array
  isMultiSelect: boolean
  // if true, field disabled when no entity type available
  requireType: boolean
  placeholders: {
    // default placeholder
    default: string
    // default placeholder for multi-selects
    multiDefault: string
    // placeholder if evidence/assertion type required & field disabled
    requireTypePrompt: string
  }
  tooltip?: string
  description?: string
  extraType?: CvcFormFieldExtraType
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcPhenotypeSelectFieldConfig
  extends FormlyFieldConfig<CvcPhenotypeSelectFieldProps> {
  type:
    | 'phenotype-select'
    | 'phenotype-multi-select'
    | Type<CvcPhenotypeSelectField>
}

const PhenotypeSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcPhenotypeSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    PhenotypeSelectTypeaheadQuery,
    PhenotypeSelectTypeaheadQueryVariables,
    PhenotypeSelectTypeaheadFieldsFragment,
    PhenotypeSelectTagQuery,
    PhenotypeSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
    selector: 'cvc-phenotype-select',
    templateUrl: './phenotype-select.type.html',
    styleUrls: ['./phenotype-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcPhenotypeSelectField
  extends PhenotypeSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>
  onRequiresPhenotype$?: BehaviorSubject<boolean>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<string>

  // FieldTypeConfig defaults
  defaultOptions: CvcPhenotypeSelectFieldOptions = {
    props: {
      entityName: { singular: 'Phenotype', plural: 'Phenotypes' },
      isMultiSelect: false,
      requireType: true,
      tooltip:
        'Phenotype or phenotype combination which interacts with the specified variant',
      // TODO: implement labels/placeholders w/ string replacement using typescript
      // template strings: https://www.codevscolor.com/typescript-template-string
      placeholders: {
        default: 'Search Phenotypes',
        multiDefault: 'Select Phenotype(s) (max MULTI_MAX)',
        requireTypePrompt: 'Select an ENTITY_NAME Type to search Phenotypes',
      },
      description:
        'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',
      extraType: 'prompt',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  stateEntityName?: string

  constructor(
    private taq: PhenotypeSelectTypeaheadGQL,
    private tq: PhenotypeSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.placeholder$ = new BehaviorSubject<string>(
      this.defaultOptions.props!.placeholders!.default
    )
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
  }

  configurePlaceholders(): void {}

  getTypeaheadVarsFn(str: string): PhenotypeSelectTypeaheadQueryVariables {
    return { name: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<PhenotypeSelectTypeaheadQuery>) {
    return r.data.phenotypeTypeahead
  }

  getTagQueryVarsFn(id: number): PhenotypeSelectTagQueryVariables {
    return { id: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<PhenotypeSelectTagQuery>
  ): Maybe<PhenotypeSelectTypeaheadFieldsFragment> {
    return r.data.phenotype
  }

  getSelectedItemOptionFn(
    phenotype: PhenotypeSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: phenotype.id, label: phenotype.name }
  }

  getSelectOptionsFn(
    results: PhenotypeSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (phenotype: PhenotypeSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || phenotype.name,
          value: phenotype.id,
        }
      }
    )
  }
}
