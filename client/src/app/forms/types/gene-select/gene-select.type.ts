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
    FeatureInstanceTypes,
  FeatureSelectTagGQL,
  FeatureSelectTagQuery,
  FeatureSelectTagQueryVariables,
  FeatureSelectTypeaheadFieldsFragment,
  FeatureSelectTypeaheadGQL,
  FeatureSelectTypeaheadQuery,
  FeatureSelectTypeaheadQueryVariables,
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
    FeatureSelectTypeaheadQuery,
    FeatureSelectTypeaheadQueryVariables,
    FeatureSelectTypeaheadFieldsFragment,
    FeatureSelectTagQuery,
    FeatureSelectTagQueryVariables,
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
    featureType: FeatureInstanceTypes.Gene
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: FeatureSelectTypeaheadGQL,
    private tq: FeatureSelectTagGQL,
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

  getTypeaheadVarsFn(str: string): FeatureSelectTypeaheadQueryVariables {
    return { queryTerm: str, featureType: this.props.featureType }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<FeatureSelectTypeaheadQuery>) {
    return r.data.featureTypeahead
  }

  getTagQueryVarsFn(id: number): FeatureSelectTagQueryVariables {
    return { featureId: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<FeatureSelectTagQuery>
  ): Maybe<FeatureSelectTypeaheadFieldsFragment> {
    return r.data.feature
  }

  getSelectedItemOptionFn(
    feature: FeatureSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: feature.id, label: feature.name }
  }

  getSelectOptionsFn(
    results: FeatureSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (feature: FeatureSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || feature.name,
          value: feature.id,
        }
      }
    )
  }
}
