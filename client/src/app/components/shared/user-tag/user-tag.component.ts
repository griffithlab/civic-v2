import { Component, Input, OnInit } from '@angular/core';

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
export class UserTagComponent implements OnInit {
  @Input() user!: TagLinkableUser
  icon!: string;

  constructor() { }

  ngOnInit() {
    if (this.user === undefined) {
      throw new Error('cvc-user-tag component requires valid user input.')
    }

    switch(this.user.role) {
      case 'admin':
        this.icon = 'civic-admin';
        break;
      case 'editor':
        this.icon = 'civic-editor';
        break;
      case 'curator':
        this.icon = 'civic-curator';
        break;
      default:
        this.icon = 'civic-curator';
    }
  }
}
