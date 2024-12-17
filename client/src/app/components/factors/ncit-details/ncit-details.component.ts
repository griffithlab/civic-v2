import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { Maybe, NcitDetailsFragment } from '@app/generated/civic.apollo'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzTagModule } from 'ng-zorro-antd/tag'

@Component({
  selector: 'cvc-ncit-details',
  templateUrl: './ncit-details.component.html',
  styleUrls: ['./ncit-details.component.less'],
  imports: [
    CommonModule,
    NzDescriptionsModule,
    NzCardModule,
    NzTagModule,
    NzGridModule,
    NzTabsModule,
    CvcTagListModule,
  ],
})
export class CvcNcitDetailsComponent implements OnInit {
  @Input() ncitDetails: Maybe<NcitDetailsFragment>

  synonymsBySource = new Map<string, string[]>()

  ngOnInit(): void {
    if (this.ncitDetails) {
      this.ncitDetails.synonyms.forEach((s) => {
        if (!this.synonymsBySource.has(s.name)) {
          this.synonymsBySource.set(s.name, [])
        }
        const list = this.synonymsBySource.get(s.name)
        list?.push(s.source)
      })
    }
  }
}
