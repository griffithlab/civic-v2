import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'
import { CvcGeneSelectFieldConfig } from '../gene-select/gene-select.type'
import { CvcMolecularProfileSelectFieldConfig } from '../molecular-profile-select/molecular-profile-select.type'
import { CvcVariantSelectFieldOptions } from '../variant-select/variant-select.type'

@Component({
  selector: 'cvc-molecular-profile-builder',
  templateUrl: './molecular-profile-builder.type.html',
  styleUrls: ['./molecular-profile-builder.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcMolecularProfileBuilderType extends FieldType<FieldTypeConfig> {
  defaultOptions = {
    props: {
      label: 'Molecular Profile Builder',
    },
    fieldGroup: [
      <CvcGeneSelectFieldConfig>{
        key: 'geneId',
        type: 'gene-select',
        props: {
          required: true,
        },
      },
      <CvcVariantSelectFieldOptions>{
        key: 'variantId',
        type: 'variant-select',
        props: {
          required: true,
          requireGene: true,
          emitMolecularProfileId: true,
        },
      },
      <CvcMolecularProfileSelectFieldConfig>{
        key: 'molecularProfileId',
        type: 'molecular-profile-select',
        props: {
          required: true,
          watchVariantMolecularProfileId: true,
        },
      },
    ],
  }
}
