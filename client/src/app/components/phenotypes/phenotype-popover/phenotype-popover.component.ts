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
import { PhenotypePopoverGQL } from './phenotype-popover.query.gql.generated'
import { Maybe, PhenotypePopover } from '@app/generated/civic.apollo.types'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import { PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'

@Component({
  selector: 'cvc-phenotype-popover',
  templateUrl: './phenotype-popover.component.html',
  styleUrls: ['./phenotype-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    CommonModule,
    PushPipe,
    NzIconModule,
    NzCardModule,
    CvcLinkTagModule,
    NzDescriptionsModule,
  ],
})
export class CvcPhenotypePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() phenotypeId!: number
  @Output() contentRendered = new EventEmitter<void>()

  phenotype$?: Observable<Maybe<PhenotypePopover>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: PhenotypePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.phenotype$ = this.gql
      .watch({ variables: { phenotypeId: this.phenotypeId } })
      .valueChanges.pipe(
        onlyCompleteData(),
        map(({ data }) => data.phenotypePopover),
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
