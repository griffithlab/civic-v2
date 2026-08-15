import {
  ChangeDetectionStrategy,
  Component,
  Type,
  computed,
  inject,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  CvcEntitySelectDirective,
  CvcEntitySelectFieldBase,
  CvcEntitySelectFieldProps,
  CvcHighlightComponent,
  CvcSelectAddFormComponent,
  CvcSelectMessagesComponent,
  entitySelectConfig,
} from '@app/forms/select'
import { FeatureInstanceTypes, Maybe } from '@app/generated/civic.apollo.types'
import { CvcTagComponent } from '@app/tags'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  CvcFeatureQuickAddForm,
  FeatureIdWithCreationStatus,
} from './feature-quick-add/feature-quick-add.form'
import {
  FeatureSelectTagGQL,
  FeatureSelectTypeaheadFieldsFragment,
  FeatureSelectTypeaheadGQL,
} from './feature-select.query.gql.generated'
import {
  CvcFusionSelectForm,
  FusionSelectModalData,
} from './fusion-select/fusion-select.form'
import {
  CvcRegionSelectForm,
  RegionSelectModalData,
} from './region-select/region-select.form'

export type CvcFeatureSelectFieldOptions = Partial<
  FieldTypeConfig<CvcFeatureSelectFieldProps>
>

export interface CvcFeatureSelectFieldProps extends CvcEntitySelectFieldProps {
  /** the feature type the typeahead searches within */
  featureType: FeatureInstanceTypes
  /** false locks the picker to the configured type */
  canChangeFeatureType?: boolean
  /** hides the type picker entirely */
  hideFeatureTypeSelect?: boolean
  /** offer the add form even when the search already matches something */
  alwaysShowCreate?: boolean
  /** notified when the user switches feature type */
  featureTypeCallback?: (featureType: Maybe<FeatureInstanceTypes>) => void
  /** notified whether the feature that landed in the field was just created */
  isNewlyCreatedCallback?: (isNewlyCreated: boolean) => void
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcFeatureSelectFieldConfig
  extends FormlyFieldConfig<CvcFeatureSelectFieldProps> {
  type: 'feature-select' | 'feature-multi-select' | Type<CvcFeatureSelectField>
}

const FEATURE_TYPE_LABELS: Record<FeatureInstanceTypes, string> = {
  [FeatureInstanceTypes.Gene]: 'Gene',
  [FeatureInstanceTypes.Factor]: 'Factor',
  [FeatureInstanceTypes.Fusion]: 'Fusion',
  [FeatureInstanceTypes.Region]: 'Region',
}

/** a name has to be this long before the quick-add form is worth offering */
const MIN_ADD_NAME_LENGTH = 3

/**
 * Selects a Feature within one feature type, with three ways to create one:
 * an inline quick-add for Genes and Factors, and a modal builder each for
 * Fusions and Regions.
 *
 * The typeahead always returns `__typename: 'Feature'` — the
 * Gene/Factor/Fusion/Region union sits one level down in `featureInstance`
 * and is metadata, not the tag's identity. So the tag typename is the static
 * string, and the old trick of smuggling a typename through nz-select's
 * `title` attribute is gone with the mixin that needed it.
 */
@Component({
  selector: 'cvc-feature-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzButtonModule,
    NzGridModule,
    // supplies NzModalService, which opens the Fusion and Region builders
    NzModalModule,
    NzSelectModule,
    NzSpaceModule,
    NzTooltipModule,
    NzTypographyModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcHighlightComponent,
    CvcSelectAddFormComponent,
    CvcSelectMessagesComponent,
    CvcFeatureQuickAddForm,
  ],
  templateUrl: './feature-select.type.html',
  styleUrl: './feature-select.type.less',
})
export class CvcFeatureSelectField extends CvcEntitySelectFieldBase<
  FeatureSelectTypeaheadFieldsFragment,
  Maybe<FeatureInstanceTypes>,
  CvcFeatureSelectFieldProps
> {
  private readonly typeaheadGQL = inject(FeatureSelectTypeaheadGQL)
  private readonly tagGQL = inject(FeatureSelectTagGQL)
  private readonly modal = inject(NzModalService)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'Feature', plural: 'Features' },
    typename: 'Feature',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (
      queryTerm: string,
      featureType: Maybe<FeatureInstanceTypes>
    ) => ({ queryTerm, featureType }),
    typeaheadResults: (data) => data?.featureTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (featureId: number) => ({ featureId }),
      result: (data) => data?.feature,
    },
  })

  protected readonly featureTypes = FeatureInstanceTypes

  /** which of the three add paths the current feature type calls for */
  protected readonly addPath = computed<'fusion' | 'region' | 'quick-add'>(
    () => {
      switch (this.param()) {
        case FeatureInstanceTypes.Fusion:
          return 'fusion'
        case FeatureInstanceTypes.Region:
          return 'region'
        default:
          return 'quick-add'
      }
    }
  )

  defaultOptions: CvcFeatureSelectFieldOptions = {
    props: {
      label: 'Feature',
      placeholder: 'Search Features',
      entityName: { singular: 'Feature', plural: 'Features' },
      isMultiSelect: false,
      description: '',
      featureType: FeatureInstanceTypes.Gene,
      canChangeFeatureType: true,
      hideFeatureTypeSelect: false,
      alwaysShowCreate: false,
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.applyFeatureType(this.props.featureType)
  }

  /**
   * Switching feature type invalidates whatever is selected, so the field
   * resets. Called from the picker, which is why it also clears the value —
   * the old template did that inline alongside the stream push.
   */
  protected onFeatureTypeChange(featureType: FeatureInstanceTypes): void {
    this.applyFeatureType(featureType)
    this.formControl.setValue(undefined)
  }

  private applyFeatureType(featureType: Maybe<FeatureInstanceTypes>): void {
    this.param.set(featureType)
    this.paramName.set(featureType ? FEATURE_TYPE_LABELS[featureType] : undefined)
    // a Region is always worth offering to build, match or no match
    this.props.alwaysShowCreate = featureType === FeatureInstanceTypes.Region
    this.props.featureTypeCallback?.(featureType)
  }

  protected override showAddForm(
    searchStr: string,
    results: FeatureSelectTypeaheadFieldsFragment[]
  ): boolean {
    if (this.props.alwaysShowCreate) return true
    const name = searchStr.toLowerCase()
    return (
      searchStr.length >= MIN_ADD_NAME_LENGTH &&
      !results.some((r) => r.name.toLowerCase() === name)
    )
  }

  /** the inline quick-add reports whether it created the Feature or found it */
  protected onFeatureQuickAdd(feature: FeatureIdWithCreationStatus): void {
    this.props.isNewlyCreatedCallback?.(feature.new)
    this.onEntityCreated(feature.id)
  }

  protected createFusionModal(): void {
    this.openBuilder(CvcFusionSelectForm, 'Add New Fusion Feature')
  }

  protected createRegionModal(): void {
    this.openBuilder(CvcRegionSelectForm, 'Add New Region Feature')
  }

  /**
   * Both builders are modal-only components that report their result by
   * destroying the modal with it. Dismissing the modal any other way (the
   * close icon, ESC, the mask) resolves with nothing, which the old code
   * dereferenced unguarded.
   */
  private openBuilder<T>(content: Type<T>, title: string): void {
    const modal = this.modal.create<
      T,
      FusionSelectModalData | RegionSelectModalData
    >({
      nzTitle: title,
      nzContent: content,
      nzData: {},
      nzFooter: null,
    })

    modal.afterClose
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result?: FusionSelectModalData | RegionSelectModalData) => {
        if (!result?.featureId) return
        this.onEntityCreated(result.featureId)
      })
  }
}
