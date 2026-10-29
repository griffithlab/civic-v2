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
  WritableSignal,
  signal,
} from '@angular/core'
import { LinkableEvidence } from '@app/components/evidence/evidence-tag/evidence-tag.component'
import {
  LinkableEvidenceForIdsFragment,
  LinkableEvidenceForIdsGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { SpecificationEvaluationTag } from '../specification-evaluation-tag/specification-evaluation-tag.component'

@Component({
  selector: 'cvc-specification-evaluation-popover',
  templateUrl: './specification-evaluation-popover.component.html',
  styleUrls: ['./specification-evaluation-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcSpecificationEvaluationPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() specificationEvaluation!: SpecificationEvaluationTag
  @Input() mode: 'all'|'description_only' = 'all'
  @Output() contentRendered = new EventEmitter<void>()

  //assertion$?: Observable<Maybe<AssertionPopoverFragment>>
  linkableEvidenceItems: Maybe<LinkableEvidenceForIdsFragment>[] = []

  private resizeObserver: ResizeObserver

  constructor(
    private gql: LinkableEvidenceForIdsGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    if (this.specificationEvaluation.evidenceItemIds) {
      this.gql.fetch({ evidenceItemIds: this.specificationEvaluation.evidenceItemIds })
        .subscribe({
          next: ({ data: { evidenceItems }}) => {
            if (evidenceItems.edges) {
              this.linkableEvidenceItems = evidenceItems.edges.map(e => e.node)
            }
          }
        })
      console.log(this.linkableEvidenceItems)
    }
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }

  getEvidenceItemForId(id: number): Maybe<LinkableEvidence> {
    if (this.linkableEvidenceItems) {
      let evidence = this.linkableEvidenceItems.find(e => e?.id === id)
      if (evidence) {
        return evidence as LinkableEvidence
      }
    }
    return undefined
  }
}
