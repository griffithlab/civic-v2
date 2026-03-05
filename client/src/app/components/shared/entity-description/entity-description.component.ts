import { Component, input } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { AssertionSummaryFieldsFragment, EvidenceSummaryFieldsFragment } from '@app/generated/civic.apollo'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'

@Component({
  selector: 'cvc-entity-description',
  imports: [
    FormsModule,
    NzDescriptionsModule,
    NzPopoverModule,
    NzRadioModule,
    NzTypographyModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    CvcCommentBodyModule,
  ],
  templateUrl: './entity-description.component.html',
  styleUrl: './entity-description.component.less',
  standalone: true,
})
export class CvcEntityDescription {
  cvcEntity = input.required<AssertionSummaryFieldsFragment | EvidenceSummaryFieldsFragment>()

  descriptionDisplayMode: string = 'raw';
  descriptionTagMode: string = 'eid';
}
