import { Component, Input, OnInit } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-link-tag',
    templateUrl: './link-tag.component.html',
    standalone: false
})
export class CvcLinkTagComponent {
  _href: Maybe<string>
  @Input()
  set href(h: Maybe<string>) {
    if (!h) throw new Error('link-tag link Input requires string.')
    this._href = h
  }
  get href(): string {
    if (!this._href) return ''
    return this._href
  }

  @Input() tooltip: Maybe<string>
  @Input() iconName: Maybe<string>
  @Input() enablePopover?: boolean = true
}
