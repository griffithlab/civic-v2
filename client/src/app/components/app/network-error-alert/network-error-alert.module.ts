import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcNetworkErrorAlertComponent } from './network-error-alert.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [CvcNetworkErrorAlertComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzAlertModule,
  ],
  exports: [CvcNetworkErrorAlertComponent]
})
export class CvcNetworkErrorAlertModule { }
