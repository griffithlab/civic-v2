import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFlagListComponent } from './flag-list.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { TimeagoModule } from 'ngx-timeago';
import { FormsModule } from '@angular/forms';
import { CvcFlagAddModule } from '@app/forms/flags/forms/flag-add/flag-add.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CvcFlagListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    TimeagoModule.forChild(),
    NzButtonModule,
    NzFormModule,
    NzRadioModule,
    CvcUserTagModule,
    NzListModule,
    NzCardModule,
    CvcFlagAddModule,
  ],
  exports: [CvcFlagListComponent]
})
export class CvcFlagListModule { }
