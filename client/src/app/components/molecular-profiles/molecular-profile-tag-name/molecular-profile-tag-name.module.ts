import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcMolecularProfileTagNameComponent } from './molecular-profile-tag-name.component';

@NgModule({
  declarations: [CvcMolecularProfileTagNameComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzIconModule,
    CvcVariantTagModule,
    CvcGeneTagModule,
  ],
  exports: [CvcMolecularProfileTagNameComponent]
})
export class CvcMolecularProfileTagNameModule { }