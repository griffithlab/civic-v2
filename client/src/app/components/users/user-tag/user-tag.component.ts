import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

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
export class CvcUserTagComponent {
  _user!: TagLinkableUser
  @Input()
  set user(u: TagLinkableUser) {
    if (!u) throw new Error('user-tag User input requires TagLinkableUser.')
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

  icon!: string
}
