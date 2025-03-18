import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.types'
import { Maybe } from '@app/generated/civic.apollo'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

export interface TagLinkableUser {
  id: number
  displayName: string
  role: string
}

@Component({
  selector: 'cvc-user-tag',
  templateUrl: './user-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcUserTagComponent implements AfterViewInit {
  _user!: TagLinkableUser
  @Input()
  set user(u: TagLinkableUser) {
    this._user = u
    switch (u.role) {
      case 'ADMIN':
        this.icon = 'civic-admin'
        break
      case 'EDITOR':
        this.icon = 'civic-editor'
        break
      case 'CURATOR':
        this.icon = 'civic-curator'
        break
      default:
        this.icon = 'civic-curator'
    }
  }
  get user(): TagLinkableUser {
    return this._user
  }
  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined

  icon!: string

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
