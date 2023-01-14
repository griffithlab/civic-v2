import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcParticipantListComponent } from './participant-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CvcParticipantListComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzListModule,
    NzIconModule,
    NzButtonModule,
  ],
  exports: [CvcParticipantListComponent],
})
export class CvcParticipantListModule {}
