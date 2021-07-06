import { Component, Input, OnInit } from '@angular/core';

export interface LinkableUser {
  id: number,
  displayName: string,
  profileImagePath?: string
}

@Component({
  selector: 'cvc-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.less']
})
export class UserTagComponent implements OnInit {
  @Input() user!: LinkableUser

  constructor() { }

  ngOnInit() {
    if (this.user === undefined) {
      throw new Error('cvc-user-tag component requires valid user input.')
    }
  }
}
