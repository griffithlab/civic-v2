import { onlyCompleteData } from 'apollo-angular'
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core'
import {
  SourcePopoverFragment,
  SourcePopoverGQL,
} from './source-popover.query.gql.generated'
import { Maybe } from '@app/generated/civic.apollo.types'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module'
import { CvcRetractionStatusTagModule } from '@app/components/shared/retraction-status-tag/retraction-status-tag.module'

@Component({
  selector: 'cvc-source-popover',
  templateUrl: './source-popover.component.html',
  styleUrls: ['./source-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzIconModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcTagListModule,
    CvcClinicalTrialTagModule,
    CvcRetractionStatusTagModule,
  ],
})
export class CvcSourcePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() sourceId!: number
  @Output() contentRendered = new EventEmitter<void>()

  source$?: Observable<Maybe<SourcePopoverFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: SourcePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.source$ = this.gql
      .watch({ variables: { sourceId: this.sourceId } })
      .valueChanges.pipe(
        onlyCompleteData(),
        map(({ data }) => data.sourcePopover),
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
