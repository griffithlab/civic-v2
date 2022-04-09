import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFlagTagComponent } from './flag-tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [CvcFlagTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzIconModule,
    CvcPipesModule
  ],
  exports: [CvcFlagTagComponent]
})
export class CvcFlagTagModule { }
