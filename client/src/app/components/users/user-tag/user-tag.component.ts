import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface TagLinkableUser {
  id: number,
  displayName: string,
  role: string
}

@Component({
  selector: 'cvc-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.less']
})
export class CvcUserTagComponent implements OnInit {
  @Input() user!: TagLinkableUser
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  icon!: string;

  constructor() { }

  ngOnInit() {
    if (this.user === undefined) {
      throw new Error('cvc-user-tag component requires valid user input.')
    }

    console.log(this.user.role)
    switch(this.user.role) {
      case 'ADMIN':
        this.icon = 'civic-admin';
        break;
      case 'EDITOR':
        this.icon = 'civic-editor';
        break;
      case 'CURATOR':
        this.icon = 'civic-curator';
        break;
      default:
        this.icon = 'civic-curator';
    }
  }
}
