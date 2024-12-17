import { Component, Input, OnDestroy } from '@angular/core'
import { Maybe, MyChemInfoFieldsFragment } from '@app/generated/civic.apollo'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'cvc-my-chem-info',
  templateUrl: './my-chem-info.component.html',
  styleUrls: ['./my-chem-info.component.less'],
  standalone: false,
})
export class CvcMyChemInfoComponent implements OnDestroy {
  @Input() chemInfo: Maybe<MyChemInfoFieldsFragment>

  tabIndex = new BehaviorSubject<number>(0)

  constructor() {}

  tabChange(index: number): void {
    this.tabIndex.next(index)
  }

  ngOnDestroy(): void {
    this.tabIndex.unsubscribe()
  }
}
