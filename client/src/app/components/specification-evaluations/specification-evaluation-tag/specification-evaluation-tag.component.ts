import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'
import { SpecificationEvaluationStatus } from '@app/generated/civic.apollo'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.component'
import { SpecificationToTagColorPipe } from '@app/core/pipes/specification-to-tag-color.pipe'

export interface SpecificationEvaluationTag {
  code: string
  modifier?: string
  evaluation: SpecificationEvaluationStatus
  justification?: string,
  evidenceItemIds?: number[]
  criteriumDescription: string
}

@Component({
  selector: 'cvc-specification-evaluation-tag',
  templateUrl: './specification-evaluation-tag.component.html',
  styleUrls: ['./specification-evaluation-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcSpecificationEvaluationTagComponent implements AfterViewInit {
  @Input() specificationEvaluation!: SpecificationEvaluationTag
  @Input() mode: 'all'|'description_only' = 'all'
  @Input() enablePopover?: boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined

  constructor() {
  }

  ngOnInit() {
  }

  updatePopoverPosition() {
    if (this.popover) {
      this.popover.updatePosition()
    }
  }

  ngAfterViewInit() {
    if (this.popoverList.length > 0) {
      this.popover = this.popoverList.first
    }
  }
}
