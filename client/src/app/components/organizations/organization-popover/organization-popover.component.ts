import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import {
  Maybe,
  OrgPopoverFragment,
  OrgPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-organization-popover',
  templateUrl: './organization-popover.component.html',
  styleUrls: ['./organization-popover.component.less'],
  standalone: false,
})
export class CvcOrganizationPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() orgId!: number
  @Output() contentRendered = new EventEmitter<void>()

  org$?: Observable<Maybe<OrgPopoverFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: OrgPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.org$ = this.gql.watch({ orgId: this.orgId }).valueChanges.pipe(
      map(({ data }) => data?.organization),
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
