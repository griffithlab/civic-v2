import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NzCardModule } from 'ng-zorro-antd/card'

import {
  CIVIC_CITATIONS_PAGE_URL,
  CIVIC_PREFERRED_CITATIONS,
} from './preferred-citations.data'

@Component({
  selector: 'cvc-preferred-citations',
  standalone: true,
  imports: [NzCardModule],
  templateUrl: './preferred-citations.component.html',
  styleUrls: ['./preferred-citations.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcPreferredCitationsComponent {
  readonly citations = CIVIC_PREFERRED_CITATIONS
  readonly citationsPageUrl = CIVIC_CITATIONS_PAGE_URL
}
