import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { CvcVariantSelectFieldOption } from '@app/forms/types/variant-select/variant-select.type'
import { Maybe, Variant } from '@app/generated/civic.apollo'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { BehaviorSubject } from 'rxjs'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { EntityFieldSubjectMap } from '@app/forms/states/base.state'
import { Apollo, gql } from 'apollo-angular'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'

type VariantSubmitModel = {
  featureId?: number
  variantId?: number
}

type VariantSubmitState = {
  formLayout: NzFormLayoutType
  fields: EntityFieldSubjectMap
}

@Component({
    selector: 'cvc-variant-submit-form',
    templateUrl: './variant-submit.form.html',
    styleUrls: ['./variant-submit.form.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class VariantSubmitForm {
  @Output() onVariantSelected = new EventEmitter<Variant>()

  newVariant$ = new BehaviorSubject<Maybe<Variant>>(void 0)
  modelChange$ = new BehaviorSubject<Maybe<VariantSubmitModel>>(undefined)
  model: VariantSubmitModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  layout: NzFormLayoutType = 'horizontal'
  newlyCreated?: boolean

  finderState: VariantSubmitState = {
    formLayout: this.layout,
    fields: {
      featureId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantId$: new BehaviorSubject<Maybe<number>>(undefined),
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
            span: 12,
          },
        },
        fieldGroup: [
          {
            key: 'featureId',
            type: 'feature-select',
            props: {
              placeholder: `Select New Variant's Feature`,
              layout: {
                showExtra: false,
              },
              hideLabel: true,
            },
          },
          <CvcVariantSelectFieldOption>{
            key: 'variantId',
            type: 'variant-select',
            props: {
              placeholder: 'Enter New Variant Name',
              requireFeature: true,
              layout: {
                showExtra: false,
              },
              hideLabel: true,
              isNewlyCreatedCallback: (isNew: boolean): void => {
                this.newlyCreated = isNew
              },
            },
          },
        ],
      },
    ]
  }

  modelChange(model: Maybe<VariantSubmitModel>) {
    if (!model?.variantId) return
    const variant = this.getSelectedVariant(model.variantId)
    if (variant) {
      this.model = {
        featureId: undefined,
        variantId: undefined,
      }
      this.onVariantSelected.next(variant)
      this.newVariant$.next(variant)
    }
  }

  getSelectedVariant(variantId: Maybe<number>): Maybe<Variant> {
    if (!variantId) return
    const fragment = {
      id: `Variant:${variantId}`,
      fragment: gql`
        fragment VariantSelectQuery on Variant {
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
      console.error(
        `Variant submit form could not resolve its Variant from the cache`
      )
      return
    }
    return variant
  }
}
