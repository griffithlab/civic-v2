import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantsMenuComponent } from './variants-menu.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CvcVariantsMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzGridModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    CvcVariantTagModule,
    CvcTagListModule,
  ],
  exports: [CvcVariantsMenuComponent ]
})
export class CvcVariantsMenuModule { }
