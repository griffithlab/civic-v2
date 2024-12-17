import { Component, Input, OnInit } from '@angular/core'
import {
  FeaturePopoverFragment,
  FeaturePopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-feature-popover',
  templateUrl: './feature-popover.component.html',
  styleUrls: ['./feature-popover.component.less'],
  standalone: false,
})
export class CvcFeaturePopoverComponent implements OnInit {
  @Input() featureId!: number

  feature$?: Observable<Maybe<FeaturePopoverFragment>>

  constructor(private gql: FeaturePopoverGQL) {}

  ngOnInit() {
    if (this.featureId == undefined) {
      throw new Error('cvc-feature-popover requires valid featureId input.')
    }
    this.feature$ = this.gql
      .watch({ featureId: this.featureId })
      .valueChanges.pipe(
        map(({ data }) => data?.feature),
        filter(isNonNulled)
      )
  }
}
