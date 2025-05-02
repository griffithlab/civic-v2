import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ElementRef,
} from '@angular/core'
import {
  Maybe,
  PopoverUserFragment,
  UserPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcUserPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() userId!: number
  @Output() contentRendered = new EventEmitter<void>()

  @ContentChild('additionalMetadata') metadataTemplateRef?: TemplateRef<any>

  user$?: Observable<Maybe<PopoverUserFragment>>

  private resizeObserver: ResizeObserver
  constructor(
    private gql: UserPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.user$ = this.gql.watch({ userId: this.userId }).valueChanges.pipe(
      map(({ data }) => data?.user),
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
