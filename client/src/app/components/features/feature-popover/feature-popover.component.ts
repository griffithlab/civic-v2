import { onlyCompleteData } from 'apollo-angular'
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
  FeaturePopoverFragment,
  FeaturePopoverGQL,
} from './feature-popover.query.gql.generated'
import { Maybe } from '@app/generated/civic.apollo.types'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEntityChildCounts } from '@app/components/shared/entity-child-counts.component/entity-child-counts.component.component'

@Component({
  selector: 'cvc-feature-popover',
  templateUrl: './feature-popover.component.html',
  styleUrls: ['./feature-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzIconModule,
    NzSpaceModule,
    CvcPipesModule,
    CvcEntityChildCounts,
  ],
})
export class CvcFeaturePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() featureId!: number
  @Output() contentRendered = new EventEmitter<void>()

  feature$?: Observable<Maybe<FeaturePopoverFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: FeaturePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.feature$ = this.gql
      .watch({ variables: { featureId: this.featureId } })
      .valueChanges.pipe(
        onlyCompleteData(),
        map(({ data }) => data.feature),
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
