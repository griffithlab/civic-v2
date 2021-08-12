import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcParticipantListComponent } from './participant-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [CvcParticipantListComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzListModule,
  ],
  exports: [CvcParticipantListComponent]
})
export class CvcParticipantListModule { }
