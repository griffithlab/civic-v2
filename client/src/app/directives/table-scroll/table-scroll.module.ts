import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableScrollDirective } from './table-scroll.directive';

@NgModule({
  declarations: [TableScrollDirective],
  imports: [CommonModule],
  exports: [TableScrollDirective],
})
export class CvcTableScrollModule {}
