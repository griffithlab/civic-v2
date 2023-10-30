import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { EntityFieldSubjectMap } from '@app/forms/states/base.state'
import { CvcFieldGridWrapperConfig } from '@app/forms/wrappers/field-grid/field-grid.wrapper'
import { MolecularProfile, Variant } from '@app/generated/civic.apollo'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { Apollo, gql } from 'apollo-angular'
import { Maybe } from 'graphql/jsutils/Maybe'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { CvcVariantSelectFieldOption } from '../../variant-select/variant-select.type'

type MpFinderModel = {
  geneId?: number
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

  finderState: MpFinderState = {
    formLayout: 'horizontal',
    fields: {
      geneId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantMolecularProfile$: new BehaviorSubject<Maybe<MolecularProfile>>(
        undefined
      ),
    },
  }
  options: FormlyFormOptions
  constructor(private apollo: Apollo) {
    this.form = new UntypedFormGroup({})
    this.model = { geneId: undefined, variantId: undefined }
    this.options = { formState: this.finderState }

    this.config = [
      {
        wrappers: ['field-grid'],
        props: <CvcFieldGridWrapperConfig>{
          grid: {
            cols: 2,
          },
        },
        fieldGroup: [
          {
            key: 'geneId',
            type: 'gene-select',
            props: {
              placeholder: 'Select MP Gene',
              hideLabel: true,
              layout: {
                showExtra: false,
              },
            },
          },
          <CvcVariantSelectFieldOption>{
            key: 'variantId',
            type: 'variant-select',
            props: {
              placeholder: 'Select MP Variant',
              requireGene: true,
              layout: {
                showExtra: false,
              },
              hideLabel: true,
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
        geneId: undefined,
        variantId: undefined,
      }
      this.cvcOnSelect.next(variant.singleVariantMolecularProfile)
      this.cvcOnVariantSelect.next(variant)
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
      console.error(`MpFinderForm could not resolve its Variant from the cache`)
      return
    }
    return variant
  }
}
