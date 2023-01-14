import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAttributeTagComponent } from './attribute-tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [CvcAttributeTagComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzIconModule,
    NzToolTipModule,
    CvcPipesModule,
  ],
  exports: [CvcAttributeTagComponent],
})
export class CvcAttributeTagModule {}
