import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { EntityFieldSubjectMap } from '@app/forms/states/base.state'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
import {
  FeatureInstanceTypes,
  MolecularProfile,
  Variant,
} from '@app/generated/civic.apollo'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { Apollo, gql } from 'apollo-angular'
import { Maybe } from 'graphql/jsutils/Maybe'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject } from 'rxjs'
import { CvcVariantSelectFieldOption } from '../../variant-select/variant-select.type'
import { EnumToTitlePipe } from '@app/core/pipes/enum-to-title-pipe'

type MpFinderModel = {
  featureId?: number
  variantId?: number
}

type MpFinderState = {
  formLayout: NzFormLayoutType
  fields: EntityFieldSubjectMap
}

@Component({
  selector: 'cvc-mp-finder',
  templateUrl: './mp-finder.component.html',
  styleUrls: ['./mp-finder.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MpFinderComponent {
  @Output() cvcOnSelect = new EventEmitter<MolecularProfile>()
  @Output() cvcOnVariantSelect = new EventEmitter<Variant>()

  modelChange$ = new BehaviorSubject<Maybe<MpFinderModel>>(undefined)
  model: MpFinderModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  featureType?: FeatureInstanceTypes

  finderState: MpFinderState = {
    formLayout: 'horizontal',
    fields: {
      featureId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantMolecularProfile$: new BehaviorSubject<Maybe<MolecularProfile>>(
        undefined
      ),
    },
  }
  options: FormlyFormOptions
  constructor(private apollo: Apollo) {
    this.form = new UntypedFormGroup({})
    this.model = { featureId: undefined, variantId: undefined }
    this.options = { formState: this.finderState }

    this.config = [
      {
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          formRowOptions: {
            gutter: [8, 0], // zero vertical margin ensures no top margins set on feature, variant select fields
            span: 12,
          },
        },
        fieldGroup: [
          {
            key: 'featureId',
            type: 'feature-select',
            props: {
              placeholder: 'Select MP Feature',
              hideLabel: true,
              showExtra: false,
              showErrorTip: false,
              required: true,
              featureTypeCallback: (ft: FeatureInstanceTypes) => {
                this.featureType = ft
              },
            },
          },
          <CvcVariantSelectFieldOption>{
            key: 'variantId',
            type: 'variant-select',
            props: {
              placeholder: 'Select MP Variant',
              hideLabel: true,
              required: true,
              showExtra: false,
              showErrorTip: false,
              requireFeature: true,
            },
          },
        ],
      },
    ]
  }

  modelChange(model: Maybe<MpFinderModel>) {
    if (!model?.variantId) return
    const variant = this.getSelectedVariant(model.variantId)
    if (variant) {
      this.model = {
        featureId: undefined,
        variantId: undefined,
      }
      this.cvcOnSelect.next(variant.singleVariantMolecularProfile)
      this.cvcOnVariantSelect.next(variant)
    }
  }

  getSelectedVariant(variantId: Maybe<number>): Maybe<Variant> {
    if (!variantId) return
    const feature = new EnumToTitlePipe().transform(this.featureType)

    const fragment = {
      id: `${feature}Variant:${variantId}`,
      fragment: gql`
        fragment VariantSelectQuery on ${feature}Variant {
          id
          name
          link
          variantAliases
          singleVariantMolecularProfileId
          singleVariantMolecularProfile {
            id
            name
            link
            molecularProfileAliases
          }
        }
      `,
    }
    let variant
    try {
      variant = this.apollo.client.readFragment(fragment) as Variant
    } catch (err) {
      console.error(err)
    }
    if (!variant) {
      console.error(`MpFinderForm could not resolve its Variant from the cache`)
      return
    }
    return variant
  }
}
