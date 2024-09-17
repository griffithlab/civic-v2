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
import { FeatureIdWithCreationStatus } from './feature-quick-add/feature-quick-add.form'
import { BehaviorSubject } from 'rxjs'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { NzModalService } from 'ng-zorro-antd/modal'
import {
  CvcFusionSelectForm,
  FusionSelectModalData,
} from './fusion-select/fusion-select.form'

export type CvcFeatureSelectFieldOption = Partial<
  FieldTypeConfig<Partial<CvcFeatureSelectFieldProps>>
>

export interface CvcFeatureSelectFieldProps extends FormlyFieldProps {
  placeholder: string
  isMultiSelect: boolean
  selectMessages?: CvcEntitySelectMessageOptions
  entityName: CvcSelectEntityName
  description?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcFeatureSelectFieldConfig
  extends FormlyFieldConfig<CvcFeatureSelectFieldProps> {
  type: 'feature-select' | 'feature-multi-select' | Type<CvcFeatureSelectField>
}

const FeatureSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcFeatureSelectFieldProps>,
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

@UntilDestroy()
@Component({
  selector: 'cvc-feature-select',
  templateUrl: './feature-select.type.html',
  styleUrls: ['./feature-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFeatureSelectField
  extends FeatureSelectMixin
  implements AfterViewInit
{
  // FieldTypeConfig defaults
  defaultOptions = {
    props: {
      label: 'Feature',
      placeholder: 'Search Features',
      isMultiSelect: false,
      entityName: { singular: 'Feature', plural: 'Features' },
      description: '',
      featureType: FeatureInstanceTypes.Gene,
      canChangeFeatureType: true,
      hideFeatureTypeSelect: false,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  selectedFeatureType?: FeatureInstanceTypes = this.props.featureType
  onFeatureType$: BehaviorSubject<Maybe<FeatureInstanceTypes>> =
    new BehaviorSubject<Maybe<FeatureInstanceTypes>>(undefined)

  instanceTypes = FeatureInstanceTypes

  constructor(
    private taq: FeatureSelectTypeaheadGQL,
    private tq: FeatureSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef,
    private modal: NzModalService
  ) {
    super()
  }

  ngAfterViewInit(): void {
    this.selectedFeatureType = this.props.featureType
    if (this.props.featureTypeCallback) {
      this.onFeatureType$
        .pipe(untilDestroyed(this))
        .subscribe((ft) => this.props.featureTypeCallback(ft))
      this.onFeatureType$.next(this.selectedFeatureType)
    }
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

  getTypeaheadVarsFn(str: string): FeatureSelectTypeaheadQueryVariables {
    return { queryTerm: str, featureType: this.selectedFeatureType }
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

  showAddBehavior(
    s: string,
    results: FeatureSelectTypeaheadFieldsFragment[]
  ): boolean {
    const searchName = s.toLowerCase()
    return (
      s.length >= 3 && !results.some((v) => v.name.toLowerCase() === searchName)
    )
  }

  onSelectOrCreate(feature: FeatureIdWithCreationStatus) {
    this.onPopulate$.next(feature.id)
    if (this.props.isNewlyCreatedCallback) {
      this.props.isNewlyCreatedCallback(feature.new)
    }
  }

  onFusionSelected(featureId: number) {
    this.onPopulate$.next(featureId)
    this.formControl.setValue(featureId)
  }

  createFusionModal() {
    const modal = this.modal.create<CvcFusionSelectForm, FusionSelectModalData>(
      {
        nzTitle: 'Add New Fusion Feature',
        nzContent: CvcFusionSelectForm,
        nzData: {},
        nzFooter: null,
      }
    )

    modal.getContentComponent()
    modal.afterClose.pipe(untilDestroyed(this)).subscribe((result) => {
      if (result.featureId) {
        this.onFusionSelected(result.featureId)
      }
    })
  }
}
