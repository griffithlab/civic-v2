import { Component, input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { ClinicalSignificanceCountsFragment } from '@app/generated/civic.apollo'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzFlexModule } from 'ng-zorro-antd/flex'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcTagGroupModule } from '../tag-group/tag-group.module'
import { CvcTagListModule } from '../tag-list/tag-list.module'

@Component({
  selector: 'cvc-clinical-significance-counts',
  imports: [
    RouterModule,
    NzDescriptionsModule,
    NzToolTipModule,
    NzTypographyModule,
    NzTableModule,
    NzIconModule,
    NzFlexModule,
    NzTagModule,
    NzSpaceModule,
    NzPopoverModule,
    CvcAttributeTagModule,
    CvcPipesModule,
    CvcAssertionsTagModule,
    CvcTagGroupModule,
    CvcTagListModule,
  ],
  templateUrl: './clinical-significance-counts.component.html',
  styleUrl: './clinical-significance-counts.component.less',
  standalone: true,
})
export class CvcClinicalSignificanceCounts {
  cvcEntityName = input.required<string>()
  cvcClinicalSignificances =
    input.required<ClinicalSignificanceCountsFragment[]>()

  urlParamsForSignificance(
    significance: ClinicalSignificanceCountsFragment
  ): {} {
    return {
      molecularProfileName: this.cvcEntityName(),
      assertionType: significance.type,
      assertionDirection: significance.direction,
      significance: significance.significance,
    }
  }
}
