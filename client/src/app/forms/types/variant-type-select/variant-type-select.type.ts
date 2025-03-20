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
import {
  Maybe,
  VariantTypeSelectTagGQL,
  VariantTypeSelectTagQuery,
  VariantTypeSelectTagQueryVariables,
  VariantTypeSelectTypeaheadFieldsFragment,
  VariantTypeSelectTypeaheadGQL,
  VariantTypeSelectTypeaheadQuery,
  VariantTypeSelectTypeaheadQueryVariables,
} from '@app/generated/civic.apollo'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject, Subject } from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcVariantTypeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcVariantTypeSelectFieldProps>
>
// TODO: finish implementing updated props interface w/ labels, placeholders groups,
// and multiMax limits, multiDefault placeholder
export interface CvcVariantTypeSelectFieldProps extends FormlyFieldProps {
  // entity names, singular & plural
  entityName: CvcSelectEntityName
  // if true, field is a multi-select & its model value should be an array
  isMultiSelect: boolean
  placeholders: {
    // default placeholder
    default: string
    // default placeholder for multi-selects
    multiDefault: string
  }
  tooltip?: string
  description?: string
  extraType?: string
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcVariantTypeSelectFieldConfig
  extends FormlyFieldConfig<CvcVariantTypeSelectFieldProps> {
  type:
    | 'variant-type-select'
    | 'variant-type-multi-select'
    | Type<CvcVariantTypeSelectField>
}

const VariantTypeSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcVariantTypeSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    VariantTypeSelectTypeaheadQuery,
    VariantTypeSelectTypeaheadQueryVariables,
    VariantTypeSelectTypeaheadFieldsFragment,
    VariantTypeSelectTagQuery,
    VariantTypeSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
    selector: 'cvc-variant-type-select',
    templateUrl: './variant-type-select.type.html',
    styleUrls: ['./variant-type-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcVariantTypeSelectField
  extends VariantTypeSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<string>

  // FieldTypeConfig defaults
  defaultOptions: CvcVariantTypeSelectFieldOptions = {
    props: {
      entityName: { singular: 'VariantType', plural: 'VariantTypes' },
      isMultiSelect: false,
      placeholders: {
        default: 'Search Variant Types',
        multiDefault: 'Select VariantType(s)',
      },
      description:
        'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.',
      
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>


  constructor(
    private taq: VariantTypeSelectTypeaheadGQL,
    private tq: VariantTypeSelectTagGQL,
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

  getTypeaheadVarsFn(str: string): VariantTypeSelectTypeaheadQueryVariables {
    return { name: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<VariantTypeSelectTypeaheadQuery>) {
    return r.data.variantTypeTypeahead
  }

  getTagQueryVarsFn(id: number): VariantTypeSelectTagQueryVariables {
    return { id: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<VariantTypeSelectTagQuery>
  ): Maybe<VariantTypeSelectTypeaheadFieldsFragment> {
    return r.data.variantType
  }

  getSelectedItemOptionFn(
    vt: VariantTypeSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: vt.id, label: vt.name }
  }

  getSelectOptionsFn(
    results: VariantTypeSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (phenotype: VariantTypeSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || phenotype.name,
          value: phenotype.id,
        }
      }
    )
  }
}
