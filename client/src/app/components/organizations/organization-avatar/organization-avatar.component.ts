import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

export interface WithProfileImageAndName {
  name: string
  profileImagePath?: string
}

@Component({
  selector: 'cvc-organization-avatar',
  templateUrl: './organization-avatar.component.html',
  styleUrls: ['./organization-avatar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcOrganizationAvatarComponent implements OnInit {
  @Input() organization!: WithProfileImageAndName
  @Input() size!: number | 'large' | 'default' | 'small'
  @Input() shape!: 'square' | 'circle'

  ngOnInit() {
    if (this.organization === undefined) {
      throw new Error('Must supply an organization to use this component')
    }

    if (this.size === undefined) {
      this.size = 'default'
    }
  }
}
