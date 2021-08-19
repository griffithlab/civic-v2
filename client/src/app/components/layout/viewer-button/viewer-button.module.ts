import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcViewerButtonComponent } from './viewer-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [CvcViewerButtonComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzDropDownModule,
  ],
  exports: [CvcViewerButtonComponent]
})
export class CvcViewerButtonModule { }
