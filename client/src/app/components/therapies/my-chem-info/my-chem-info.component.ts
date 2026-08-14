import {
  Component,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo.types'
import { MyChemInfoFieldsFragment } from '@app/views/therapies/therapies-detail/therapies-summary/therapies-summary.query.gql.generated'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'cvc-my-chem-info',
  templateUrl: './my-chem-info.component.html',
  styleUrls: ['./my-chem-info.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
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
