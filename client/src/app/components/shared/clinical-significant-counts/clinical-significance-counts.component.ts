import { Component, input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import {
  AssertionDirection,
  AssertionSignificance,
  AssertionType,
} from '@app/generated/civic.apollo'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'

export type ClinicalSignificanceCounts = {
  type: AssertionType
  direction: AssertionDirection
  significance: AssertionSignificance
  count: number
}

@Component({
  selector: 'cvc-clinical-significance-counts',
  imports: [
    RouterModule,
    NzDescriptionsModule,
    NzToolTipModule,
    NzTypographyModule,
    NzTableModule,
    NzIconModule,
    CvcAttributeTagModule,
    CvcPipesModule,
  ],
  templateUrl: './clinical-significance-counts.component.html',
  styleUrl: './clinical-significance-counts.component.less',
  standalone: true,
})
export class CvcClinicalSignificanceCounts {
  cvcClinicalSignificances = input.required<ClinicalSignificanceCounts[]>()
}
