import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcViewerButtonComponent } from './viewer-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [CvcViewerButtonComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzDropDownModule,
    RouterModule
  ],
  exports: [CvcViewerButtonComponent]
})
export class CvcViewerButtonModule { }
