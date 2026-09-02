import { onlyCompleteData } from 'apollo-angular'
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core'
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
  templateUrl: './disease-popover.component.html',
  styleUrls: ['./disease-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcDiseasePopoverComponent implements OnInit {
  @Input() diseaseId!: number
  @Output() contentRendered = new EventEmitter<void>()
  disease$?: Observable<Maybe<DiseasePopover>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: DiseasePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    if (this.diseaseId == undefined) {
      throw new Error('cvc-disease-popover requires valid diseaseId input.')
    }
    this.disease$ = this.gql
      .watch({ variables: { diseaseId: this.diseaseId } })
      .valueChanges.pipe(
        onlyCompleteData(),
        map(({ data }) => data.diseasePopover),
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
