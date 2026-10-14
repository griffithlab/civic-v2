import { ChangeDetectionStrategy, Component, Type, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
} from '@app/forms/select'
import { FeatureSelectTypeaheadFieldsFragment } from '@app/forms/types/feature-select/feature-select.query.gql.generated'
import { RegionVariantName } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { $enum } from 'ts-enum-util'
import { RegionVariantNameForFeatureGQL } from './region-variant-name-select.query.gql.generated'

export type CvcRegionVariantNameSelectFieldOptions = Partial<
  FieldTypeConfig<CvcRegionVariantNameSelectFieldProps>
>

export interface CvcRegionVariantNameSelectFieldProps
  extends CvcEnumSelectFieldProps {}

export interface RegionVariantSelectModalData {
  feature?: FeatureSelectTypeaheadFieldsFragment
}

export interface CvcRegionVariantNameSelectFieldConfig
  extends FormlyFieldConfig<CvcRegionVariantNameSelectFieldProps> {
  type: 'region-variant-name-select' | Type<CvcRegionVariantNameSelectField>
}

/**
 * Region features name their variants after named sub-regions, so the API
 * decides which names are available for a given feature. The whole enum is the
 * fallback until that answer arrives — and the only thing on offer if this
 * field is ever mounted without a feature.
 *
 * Only usable inside the region-select modal: NZ_MODAL_DATA is where the
 * feature comes from.
 */
@Component({
  selector: 'cvc-region-variant-name-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    NzTagModule,
  ],
  templateUrl: './region-variant-name-select.type.html',
})
export class CvcRegionVariantNameSelectField extends CvcEnumSelectFieldBase<
  RegionVariantName,
  CvcRegionVariantNameSelectFieldProps
> {
  private readonly nzModalData: RegionVariantSelectModalData =
    inject(NZ_MODAL_DATA)
  private readonly variantQuery = inject(RegionVariantNameForFeatureGQL)

  defaultOptions: CvcRegionVariantNameSelectFieldOptions = {
    props: {
      label: 'Variant Name',
      required: true,
      isMultiSelect: false,
      description: 'Select the desired region variant name',
      placeholder: 'Select Variant Name',
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.optionValues.set($enum(RegionVariantName).getValues())

    const featureId = this.nzModalData.feature?.id
    if (!featureId) return

    this.variantQuery
      .fetch({ variables: { featureId }, fetchPolicy: 'cache-first' })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ data }) => {
        if (!data?.regionVariantNamesForFeatureId) {
          console.error(
            `${this.field.id} could not fetch variant names for Feature:${featureId}.`
          )
          return
        }
        this.optionValues.set(data.regionVariantNamesForFeatureId)
      })
  }
}
