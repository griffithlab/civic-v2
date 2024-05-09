import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcSourcePopoverComponent } from './source-popover.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcRetractionStatusTagModule } from '@app/components/shared/retraction-status-tag/retraction-status-tag.module'

@NgModule({
  declarations: [CvcSourcePopoverComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzIconModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcTagListModule,
    CvcClinicalTrialTagModule,
    CvcRetractionStatusTagModule,
  ],
  exports: [CvcSourcePopoverComponent],
})
export class CvcSourcePopoverModule {}
