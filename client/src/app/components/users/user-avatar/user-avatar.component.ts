import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

export interface WithProfileImageAndDisplayName {
  displayName: string
  profileImagePath?: string
}

@Component({
    selector: 'cvc-user-avatar',
    templateUrl: './user-avatar.component.html',
    styleUrls: ['./user-avatar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcUserAvatarComponent implements OnInit {
  @Input() user!: WithProfileImageAndDisplayName
  @Input() size!: number | 'large' | 'default' | 'small'
  @Input() shape!: 'square' | 'circle'

  ngOnInit() {
    if (this.user === undefined) {
      throw new Error('Must supply a user to use this component')
    }

    if (this.size === undefined) {
      this.size = 'default'
    }
  }
}
