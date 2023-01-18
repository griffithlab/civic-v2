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
import {
  CvcEntitySelectMessageOptions,
  CvcSelectEntityName,
} from '@app/forms2/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms2/mixins/base/base-field'
import { EntityTagField } from '@app/forms2/mixins/entity-tag-field.mixin'
import { CvcFormFieldExtraType } from '@app/forms2/wrappers/form-field/form-field.wrapper'
import {
  GeneSelectTagGQL,
  GeneSelectTagQuery,
  GeneSelectTagQueryVariables,
  GeneSelectTypeaheadFieldsFragment,
  GeneSelectTypeaheadGQL,
  GeneSelectTypeaheadQuery,
  GeneSelectTypeaheadQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import mixin from 'ts-mixin-extended'

export interface CvcGeneSelectFieldProps extends FormlyFieldProps {
  placeholder?: string
  isMultiSelect: boolean
  selectMessages?: CvcEntitySelectMessageOptions
  entityName: CvcSelectEntityName
  helpText?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcGeneSelectFieldConfig
  extends FormlyFieldConfig<CvcGeneSelectFieldProps> {
  type: 'gene-select' | 'gene-multi-select' | Type<CvcGeneSelectField>
}

const GeneSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcGeneSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntityTagField<
    GeneSelectTypeaheadQuery,
    GeneSelectTypeaheadQueryVariables,
    GeneSelectTypeaheadFieldsFragment,
    GeneSelectTagQuery,
    GeneSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
  selector: 'cvc-gene-select',
  templateUrl: './gene-select.type.html',
  styleUrls: ['./gene-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcGeneSelectField
  extends GeneSelectMixin
  implements AfterViewInit
{
  // FieldTypeConfig defaults
  defaultOptions: Partial<FieldTypeConfig<CvcGeneSelectFieldProps>> = {
    props: {
      label: 'Gene',
      placeholder: 'Search Genes',
      isMultiSelect: false,
      entityName: { singular: 'Gene', plural: 'Genes' },
      helpText:
        'Entrez Gene (e.g. BRAF). Gene must be known to the Entrez database.',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: GeneSelectTypeaheadGQL,
    private tq: GeneSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
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
  } // ngAfterViewInit()

  getTypeaheadVarsFn(str: string): GeneSelectTypeaheadQueryVariables {
    return { entrezSymbol: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<GeneSelectTypeaheadQuery>) {
    return r.data.geneTypeahead
  }

  getTagQueryVarsFn(id: number): GeneSelectTagQueryVariables {
    return { geneId: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<GeneSelectTagQuery>
  ): Maybe<GeneSelectTypeaheadFieldsFragment> {
    return r.data.gene
  }

  getSelectedItemOptionFn(
    gene: GeneSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: gene.id, label: gene.name }
  }

  getSelectOptionsFn(
    results: GeneSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (gene: GeneSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || gene.name,
          value: gene.id,
        }
      }
    )
  }
}
