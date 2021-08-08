import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcTagListComponent } from './cvc-tag-list.component';



@NgModule({
  declarations: [CvcTagListComponent],
  imports: [
    CommonModule
  ],
  exports: [CvcTagListComponent]
})
export class CvcTagListModule { }
