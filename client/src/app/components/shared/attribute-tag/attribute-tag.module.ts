import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAttributeTagComponent } from './attribute-tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcAttributeTagComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzIconModule,
    CvcPipesModule,
  ],
  exports: [CvcAttributeTagComponent]
})
export class CvcAttributeTagModule { }
