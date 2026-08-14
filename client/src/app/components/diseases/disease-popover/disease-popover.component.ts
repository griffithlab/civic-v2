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
import { DiseasePopoverGQL } from './disease-popover.query.gql.generated'
import { DiseasePopover, Maybe } from '@app/generated/civic.apollo.types'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'

@Component({
  selector: 'cvc-disease-popover',
  templateUrl: './disease-popover.component.html',
  styleUrls: ['./disease-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcLinkTagModule,
  ],
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
