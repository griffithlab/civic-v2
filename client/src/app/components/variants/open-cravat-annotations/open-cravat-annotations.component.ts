import { Component, Input, OnDestroy } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'cvc-open-cravat-annotations',
  templateUrl: './open-cravat-annotations.component.html',
  styleUrls: ['./open-cravat-annotations.component.less'],
})
export class CvcOpenCravatAnnotationsComponent implements OnDestroy {
  @Input() openCravatAnnotations: any
  @Input() openCravatUrl: Maybe<string>

  tabIndex = new BehaviorSubject<number>(0)

  constructor() {
  }

  tabChange(index: number): void {
    this.tabIndex.next(index)
  }

  ngOnDestroy(): void {
    this.tabIndex.unsubscribe()
  }
}
