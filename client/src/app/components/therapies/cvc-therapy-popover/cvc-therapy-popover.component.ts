import { onlyCompleteData } from 'apollo-angular'
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core'
import { TherapyPopoverGQL } from './cvc-therapy-popover.query.gql.generated'
import { Maybe, TherapyPopover } from '@app/generated/civic.apollo.types'
import { filter, map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@Component({
  selector: 'cvc-therapy-popover',
  templateUrl: './cvc-therapy-popover.component.html',
  styleUrls: ['./cvc-therapy-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PushPipe,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzTypographyModule,
    NzTagModule,
    NzTooltipModule,
    CvcLinkTagModule,
    CvcPipesModule,
  ],
})
export class CvcTherapyPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() therapyId!: number
  @Output() contentRendered = new EventEmitter<void>()

  therapy$?: Observable<Maybe<TherapyPopover>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: TherapyPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.therapy$ = this.gql
      .watch({ variables: { therapyId: this.therapyId } })
      .valueChanges.pipe(
        onlyCompleteData(),
        map(({ data }) => data.therapyPopover),
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
