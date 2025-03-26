import {
  Component,
  Input,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ChangeDetectionStrategy,
} from '@angular/core'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.types'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

export interface LinkableClinicalTrial {
  id: number
  nctId: string
  link: string
}

@Component({
  selector: 'cvc-clinical-trial-tag',
  templateUrl: './clinical-trial-tag.component.html',
  styleUrls: ['./clinical-trial-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcClinicalTrialTagComponent implements AfterViewInit {
  _clinicalTrial!: LinkableClinicalTrial

  @Input()
  set clinicalTrial(trial: LinkableClinicalTrial) {
    this._clinicalTrial = trial
  }
  get clinicalTrial(): LinkableClinicalTrial {
    return this._clinicalTrial
  }
  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined
  iconColor: string
  constructor() {
    this.iconColor = getEntityColor('Clinical Trial')
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
