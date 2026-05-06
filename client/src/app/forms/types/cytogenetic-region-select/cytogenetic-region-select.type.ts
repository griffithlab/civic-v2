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
  CytogeneticRegionSelectTagGQL,
  CytogeneticRegionSelectTagQuery,
  CytogeneticRegionSelectTagQueryVariables,
  CytogeneticRegionSelectTypeaheadFieldsFragment,
  CytogeneticRegionSelectTypeaheadGQL,
  CytogeneticRegionSelectTypeaheadQuery,
  CytogeneticRegionSelectTypeaheadQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import mixin from 'ts-mixin-extended'
import { BehaviorSubject } from 'rxjs'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { NzModalService } from 'ng-zorro-antd/modal'

export type CvcCytogeneticRegionSelectFieldOption = Partial<
  FieldTypeConfig<Partial<CvcCytogeneticRegionSelectFieldProps>>
>

export interface CvcCytogeneticRegionSelectFieldProps extends FormlyFieldProps {
  placeholder: string
  isMultiSelect: boolean
  selectMessages?: CvcEntitySelectMessageOptions
  entityName: CvcSelectEntityName
  description?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcCytogeneticRegionSelectFieldConfig
  extends FormlyFieldConfig<CvcCytogeneticRegionSelectFieldProps> {
  type: 'cytogenetic-region-select' | 'cytogenetic-region-multi-select' | Type<CvcCytogeneticRegionSelectField>
}

const CytogeneticRegionSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcCytogeneticRegionSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    CytogeneticRegionSelectTypeaheadQuery,
    CytogeneticRegionSelectTypeaheadQueryVariables,
    CytogeneticRegionSelectTypeaheadFieldsFragment,
    CytogeneticRegionSelectTagQuery,
    CytogeneticRegionSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@UntilDestroy()
@Component({
    selector: 'cvc-cytogenetic-region-select',
    templateUrl: './cytogenetic-region-select.type.html',
    styleUrls: ['./cytogenetic-region-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcCytogeneticRegionSelectField
  extends CytogeneticRegionSelectMixin
  implements AfterViewInit
{
  // FieldTypeConfig defaults
  defaultOptions = {
    props: {
      label: 'Region',
      placeholder: 'Search Regions',
      isMultiSelect: false,
      entityName: { singular: 'Region', plural: 'Regions' },
      description: '',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: CytogeneticRegionSelectTypeaheadGQL,
    private tq: CytogeneticRegionSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef,
    private modal: NzModalService
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
    // this.onOpenChange$.pipe(tag('feature-select onOpenChange$')).subscribe()
  } // ngAfterViewInit()

  getTypeaheadVarsFn(str: string): CytogeneticRegionSelectTypeaheadQueryVariables {
    return { queryTerm: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<CytogeneticRegionSelectTypeaheadQuery>) {
    return r.data.cytogeneticRegionTypeahead
  }

  getTagQueryVarsFn(id: number): CytogeneticRegionSelectTagQueryVariables {
    return { cytogeneticRegionId: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<CytogeneticRegionSelectTagQuery>
  ): Maybe<CytogeneticRegionSelectTypeaheadFieldsFragment> {
    return r.data.cytogeneticRegion
  }

  getSelectedItemOptionFn(
    cytogeneticRegion: CytogeneticRegionSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: cytogeneticRegion.id, label: cytogeneticRegion.name }
  }

  getSelectOptionsFn(
    results: CytogeneticRegionSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (cytogeneticRegion: CytogeneticRegionSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || cytogeneticRegion.name,
          value: cytogeneticRegion.id,
        }
      }
    )
  }
}