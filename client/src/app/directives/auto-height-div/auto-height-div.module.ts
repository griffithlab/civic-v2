import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAutoHeightDivDirective } from './auto-height-div.directive';

@NgModule({
  declarations: [CvcAutoHeightDivDirective],
  imports: [
    CommonModule
  ],
  exports: [CvcAutoHeightDivDirective],
})
export class CvcAutoHeightDivModule { }
