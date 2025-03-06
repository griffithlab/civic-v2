import { Component, Input, OnInit } from '@angular/core'
import {
  DiseasePopover,
  DiseasePopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
    selector: 'cvc-disease-popover',
    templateUrl: './cvc-disease-popover.component.html',
    styleUrls: ['./cvc-disease-popover.component.less'],
    standalone: false
})
export class CvcDiseasePopoverComponent implements OnInit {
  @Input() diseaseId!: number

  disease$?: Observable<Maybe<DiseasePopover>>

  constructor(private gql: DiseasePopoverGQL) {}

  ngOnInit() {
    if (this.diseaseId == undefined) {
      throw new Error('cvc-disease-popover requires valid diseaseId input.')
    }
    this.disease$ = this.gql
      .watch({ diseaseId: this.diseaseId })
      .valueChanges.pipe(
        map(({ data }) => data?.diseasePopover),
        filter(isNonNulled)
      )
  }
}
