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
} from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
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

export type CvcGeneSelectFieldOption = Partial<
  FieldTypeConfig<Partial<CvcGeneSelectFieldProps>>
>

export interface CvcGeneSelectFieldProps extends FormlyFieldProps {
  placeholder: string
  isMultiSelect: boolean
  selectMessages?: CvcEntitySelectMessageOptions
  entityName: CvcSelectEntityName
  description?: string
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
  EntitySelectField<
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
  defaultOptions = {
    props: {
      label: 'Gene',
      placeholder: 'Search Genes',
      isMultiSelect: false,
      entityName: { singular: 'Gene', plural: 'Genes' },
      description:
        'Entrez Gene Symbol',
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
    // this.onOpenChange$.pipe(tag('gene-select onOpenChange$')).subscribe()
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
