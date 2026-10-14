import {
  Component,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo.types'
import { MyDiseaseInfoFieldsFragment } from '@app/views/diseases/diseases-detail/diseases-summary/diseases-summary.query.gql.generated'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'cvc-my-disease-info',
  templateUrl: './my-disease-info.component.html',
  styleUrls: ['./my-disease-info.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
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
