import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.types'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

export interface LinkablePhenotype {
  id: number
  name: string
  link: string
}

@Component({
  selector: 'cvc-phenotype-tag',
  templateUrl: './phenotype-tag.component.html',
  styleUrls: ['./phenotype-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcPhenotypeTagComponent {
  @Input() phenotype!: LinkablePhenotype
  @Input() enablePopover?: boolean = true
  @Input() linked?: boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined
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
