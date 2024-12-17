import { Component, Input, OnInit } from '@angular/core'

export interface LinkableFlag {
  id: number
  name: string
  link: string
}

export interface Subject {
  id: number
  __typename: string
}

@Component({
  selector: 'cvc-flag-tag',
  templateUrl: './flag-tag.component.html',
  standalone: false,
})
export class CvcFlagTagComponent implements OnInit {
  @Input() flag!: LinkableFlag
  @Input() subject?: Subject
  @Input() enablePopover: Boolean = true

  constructor() {}

  ngOnInit() {
    if (this.flag === undefined) {
      throw new Error(
        'cvc-flag-tag requires LinkableFlag input, none supplied.'
      )
    }
  }
}
