import { Component, Input, OnDestroy } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { MyDiseaseInfoFieldsFragment } from '@app/generated/civic.apollo'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'cvc-my-disease-info',
  templateUrl: './my-disease-info.component.html',
  styleUrls: ['./my-disease-info.component.less'],
  standalone: false,
})
export class CvcMyDiseaseInfoComponent implements OnDestroy {
  @Input() diseaseInfo: Maybe<MyDiseaseInfoFieldsFragment>

  tabIndex = new BehaviorSubject<number>(0)

  constructor() {}

  tabChange(index: number): void {
    this.tabIndex.next(index)
  }

  ngOnDestroy(): void {
    this.tabIndex.unsubscribe()
  }
}
