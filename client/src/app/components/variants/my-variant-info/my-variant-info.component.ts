import { Component, Input, OnDestroy } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { MyVariantInfoFieldsFragment } from '@app/generated/civic.apollo'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'cvc-my-variant-info',
  templateUrl: './my-variant-info.component.html',
  styleUrls: ['./my-variant-info.component.less'],
  standalone: false,
})
export class CvcMyVariantInfoComponent implements OnDestroy {
  @Input() variantInfo: Maybe<MyVariantInfoFieldsFragment>

  tabIndex = new BehaviorSubject<number>(0)

  constructor() {}

  tabChange(index: number): void {
    this.tabIndex.next(index)
  }

  ngOnDestroy(): void {
    this.tabIndex.unsubscribe()
  }
}
