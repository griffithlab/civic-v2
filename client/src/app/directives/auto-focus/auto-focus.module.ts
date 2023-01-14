import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAutofocusDirective } from '../auto-focus/auto-focus.directive';

@NgModule({
  declarations: [CvcAutofocusDirective],
  imports: [CommonModule],
  exports: [CvcAutofocusDirective],
})
export class CvcAutofocusModule {}
