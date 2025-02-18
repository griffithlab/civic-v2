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
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import {
  FeatureSelectTagGQL,
  FeatureSelectTypeaheadFieldsFragment,
  Maybe,
  VariantSelectTagGQL,
  VariantSelectTagQuery,
  VariantSelectTagQueryVariables,
  VariantSelectTypeaheadFieldsFragment,
  VariantSelectTypeaheadGQL,
  VariantSelectTypeaheadQuery,
  VariantSelectTypeaheadQueryVariables,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzModalService } from 'ng-zorro-antd/modal'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  combineLatest,
  lastValueFrom,
  map,
  Observable,
  ReplaySubject,
  Subject,
  scan,
  withLatestFrom,
  filter,
  take,
} from 'rxjs'
import mixin from 'ts-mixin-extended'
import {
  CvcFusionVariantSelectForm,
  FusionVariantSelectModalData,
} from './fusion-variant-select/fusion-variant-select.form'
import { LinkableFeature } from '@app/components/features/feature-tag/feature-tag.component'

export interface VariantIdWithCreationStatus {
  new: boolean
  id: number
}

export type CvcVariantSelectFieldOption = Partial<
  FieldTypeConfig<Partial<CvcVariantSelectFieldProps>>
>

export interface CvcVariantSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean // is child of a repeat-field type
  entityName: CvcSelectEntityName
  placeholder: string
  tooltip?: string
  requireFeature: boolean // if true, disables field if no featureId, and adjust placeholders, prompts
  requireFeaturePlaceholderFn: (featureName: string) => string // returns placeholder that includes feature name
  requireFeaturePrompt: string // prompt displayed if feature unspecified
  extraType?: CvcFormFieldExtraType // stores display type for msg beneath select component
  showManagerBtn?: boolean // show manager button
  minSearchStrLength: number
}

export interface CvcVariantSelectFieldConfig
  extends FormlyFieldConfig<CvcVariantSelectFieldProps> {
  type: 'variant-select' | 'variant-multi-select' | Type<CvcVariantSelectField>
}

const VariantSelectMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcVariantSelectFieldProps>, Maybe<number>>(),
  EntitySelectField<
    VariantSelectTypeaheadQuery,
    VariantSelectTypeaheadQueryVariables,
    VariantSelectTypeaheadFieldsFragment,
    VariantSelectTagQuery,
    VariantSelectTagQueryVariables,
    Maybe<number>
  >()
)

@Component({
  selector: '',
  templateUrl: './variant-select.type.html',
  styleUrls: ['./variant-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcVariantSelectField
  extends VariantSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onFeatureId$!: BehaviorSubject<Maybe<number>>

  // LOCAL SOURCE STREAMS
  onVid$: ReplaySubject<Maybe<number[]>>
  onShowMgrClick$: Subject<void>
  onFeatureName$: BehaviorSubject<Maybe<string>>

  // LOCAL PRESENTATION STREAMS
  showMgr$: Observable<boolean>
  onModel$ = new Observable<any>()

  selectedFeatureId?: number
  selectedFeatureType?: string
  selectedFeature?: FeatureSelectTypeaheadFieldsFragment

  // FieldTypeConfig defaults
  defaultOptions = {
    props: {
      label: 'Variant',
      placeholder: 'Search Variants',
      requireFeature: true,
      requireFeaturePlaceholderFn: (featureName: string) => {
        return `Search ${featureName} Variants`
      },
      requireFeaturePrompt: 'Select a Feature to search its Variants',
      isMultiSelect: false,
      entityName: { singular: 'Variant', plural: 'Variants' },
      showManagerBtn: false,
      minSearchStrLength: 0,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: VariantSelectTypeaheadGQL,
    private tq: VariantSelectTagGQL,
    private featureQuery: FeatureSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef,
    private modal: NzModalService
  ) {
    super()
    this.onFeatureName$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.onVid$ = new ReplaySubject<Maybe<number[]>>()
    this.onShowMgrClick$ = new Subject<void>()
    this.showMgr$ = this.onShowMgrClick$.pipe(scan((acc, _) => !acc, false))
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureEntitySelectField({
      typeaheadQuery: this.taq,
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
      minSearchStrLength: this.field.props.minSearchStrLength,
    })

    // if state formReady exists,listen for parent ready event,
    // then configure - otherwise configure the field immediately
    if (this.state && this.state.formReady$) {
      this.state.formReady$
        .pipe(
          filter((r) => r), // only pass true values
          take(1), // unsubscribe after 1st emit
          untilDestroyed(this) // or form destroyed
        )
        .subscribe((_) => {
          this.configureField()
        })
    } else {
      this.configureField()
    }
  } // ngAfterViewInit

  private configureField() {
    this.configureStateConnections() // local fn

    this.onVid$.pipe(untilDestroyed(this)).subscribe()

    // if form value exists on init, emit it so evidence manager will be updated
    this.onVid$.next(this.formControl.value)

    // update model provided to quick-add form when either sourceType or citationId changes
    this.onModel$ = combineLatest([this.onFeatureId$, this.onSearch$]).pipe(
      map(([featureId, name]: [Maybe<number>, Maybe<string>]) => {
        return { featureId: featureId, name: name }
      })
    )

    // emit value, to update variant-manager selection
    this.onValueChange$
      .pipe(withLatestFrom(this.onVid$), untilDestroyed(this))
      .subscribe(([current, _]) => {
        if (Array.isArray(current)) this.onVid$.next(current)
      })
  }

  private configureStateConnections() {
    if (!this.state) return
    // attach state featureId$ to get feature field value updates
    if (this.props.requireFeature) {
      if (!this.state?.fields.featureId$) {
        console.error(
          `${this.field.id} requireFeature is set, but no featureId$ subject found on state.`
        )
        return
      }
      this.onFeatureId$ = this.state.fields.featureId$
      this.onFeatureId$.pipe(untilDestroyed(this)).subscribe((fid) => {
        this.onFeatureId(fid)
      })
    }
  }

  getTypeaheadVarsFn(str: string) {
    return {
      name: str,
      featureId: this.selectedFeatureId,
    }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<VariantSelectTypeaheadQuery>) {
    return r.data.variantsTypeahead
  }

  getTagQueryVarsFn(id: number): VariantSelectTagQueryVariables {
    return { variantId: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<VariantSelectTagQuery>
  ): Maybe<VariantSelectTypeaheadFieldsFragment> {
    return r.data.variant
  }

  getSelectedItemOptionFn(
    variant: VariantSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: variant.id, label: variant.name }
  }

  getSelectOptionsFn(
    results: VariantSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (variant: VariantSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || variant.name,
          value: variant.id,
        }
      }
    )
  }

  showAddBehavior(
    s: string,
    results: VariantSelectTypeaheadFieldsFragment[]
  ): boolean {
    const searchName = s.toLowerCase()
    return (
      s.length >= 3 && !results.some((v) => v.name.toLowerCase() === searchName)
    )
  }

  onSelectOrCreate(variant: VariantIdWithCreationStatus) {
    this.onPopulate$.next(variant.id)
    this.formControl.setValue(variant.id)
    if (this.props.isNewlyCreatedCallback) {
      this.props.isNewlyCreatedCallback(variant.new)
    }
  }

  private onFeatureId(fid: Maybe<number>): void {
    this.selectedFeatureId = fid
    // if field config indicates that a featureId is required, and none is provided,
    // set model to undefined (this resets the variant model if feature field is reset)
    // and set placeholder to the 'requires feature' placeholder
    if (!fid && this.props.requireFeature) {
      this.resetField()
      this.props.description = this.props.requireFeaturePrompt
      this.props.placeholder = 'Select a Variant'
      this.props.extraType = 'prompt'
      this.onFeatureName$.next(undefined)
    } else if (fid) {
      this.props.description = undefined
      this.props.extraType = undefined
      // id provided, so fetch its name and update the placeholder string.
      // lastValueFrom is used b/c fetch could return 'loading' events
      lastValueFrom(
        this.featureQuery.fetch(
          { featureId: fid },
          { fetchPolicy: 'cache-first' }
        )
      ).then(({ data }) => {
        if (!data?.feature?.name) {
          console.error(
            `${this.field.id} could not fetch feature name for Feature:${fid}.`
          )
        } else {
          this.selectedFeatureType = data.feature.featureType
          this.selectedFeature = data.feature
          if (this.props.requireFeature) {
            this.props.placeholder = this.props.requireFeaturePlaceholderFn(
              data.feature.name
            )
          } else {
            this.props.placeholder = this.props.placeholder
          }
          // emit feature name for quick-add form Input
          this.onFeatureName$.next(data.feature.name)
        }
      })
    }
  }

  createFusionVariantModal() {
    const modal = this.modal.create<
      CvcFusionVariantSelectForm,
      FusionVariantSelectModalData
    >({
      nzTitle: 'Add New Fusion Variant',
      nzContent: CvcFusionVariantSelectForm,
      nzData: { feature: this.selectedFeature },
      nzFooter: null,
      nzWidth: '60%',
    })

    modal.getContentComponent()
    modal.afterClose.pipe(untilDestroyed(this)).subscribe((result) => {
      if (result.variantId) {
        this.onSelectOrCreate({ id: result.variantId, new: true })
        this.onVid$.next(result.variantId)
      }
    })
  }
}
