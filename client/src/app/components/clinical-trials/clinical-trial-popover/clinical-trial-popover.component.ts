import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import {
  ClinicalTrialPopoverFragment,
  ClinicalTrialPopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-clinical-trial-popover',
  templateUrl: './clinical-trial-popover.component.html',
  styleUrls: ['./clinical-trial-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcClinicalTrialPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() clinicalTrialId!: number
  @Output() contentRendered = new EventEmitter<void>()

  clinicalTrial$?: Observable<Maybe<ClinicalTrialPopoverFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: ClinicalTrialPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.clinicalTrial$ = this.gql
      .watch({ clinicalTrialId: this.clinicalTrialId })
      .valueChanges.pipe(
        map(({ data }) => data?.clinicalTrials.edges[0]?.node),
        filter(isNonNulled)
      )
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }
}
