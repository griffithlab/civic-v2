import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'

@Component({
  selector: 'cvc-molecular-profile-builder',
  templateUrl: './molecular-profile-builder.type.html',
  styleUrls: ['./molecular-profile-builder.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcMolecularProfileBuilderType
  extends FieldType<FieldTypeConfig>
  implements AfterViewInit, OnInit
{
  defaultOptions = {
    props: {
      label: 'Molecular Profile Builder',
      description: `Enter Molecular Profile's Gene and Variant`,
    },
    fieldGroup: [
      {
        key: 'featureId',
        type: 'feature-select',
        props: {
          required: true,
          formLayout: 'inline',
          hideLabel: true,
        },
        resetOnHide: false,
        expressions: {
          hide: (field: any) => {
            if (field.model?.molecularProfileId) {
              return true
            } else {
              return false
            }
          },
        },
      },
      {
        key: 'variantId',
        type: 'variant-select',
        props: {
          required: true,
          requireFeature: true,
          emitMolecularProfileId: true,
          formLayout: 'inline',
          hideLabel: true,
        },
        resetOnHide: false,
        expressions: {
          hide: (field: any) => {
            if (field.model?.molecularProfileId) {
              return true
            } else {
              return false
            }
          },
        },
      },
      // FIXME: field options aren't working as expected with expressions attribute,
      // shouldn't complain about missing properties when using this: <CvcMolecularProfileSelectFieldOptions>{
      {
        key: 'molecularProfileId',
        type: 'molecular-profile-select',
        props: {
          required: true,
          watchVariantMolecularProfileId: true,
          formLayout: 'inline',
          hideLabel: true,
          colSpan: 24,
          change: (field: any) => {
            console.log(field)
            field.parent.parent.model.molecularProfileId =
              field.formControl.value
          },
        },
        expressions: {
          hide: (field: any) => {
            if (field.model?.variantId) {
              return false
            } else {
              return true
            }
          },
        },
      },
    ],
  }
  constructor() {
    super()
    // console.log('mp-profile-builder constructor()', this.field)
  }
  ngOnInit(): void {
    // console.log('mp-profile-builder OnInit()', this.field)
  }
  ngAfterViewInit(): void {
    // console.log('mp-profile-builder AfterViewInit()', this.field)
  }
}
