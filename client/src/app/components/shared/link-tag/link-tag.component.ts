import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-link-tag',
  templateUrl: './link-tag.component.html',
})
export class CvcLinkTagComponent {
  _href!: string;
  @Input()
  set href(h: string) {
    if (!h) throw new Error('link-tag link Input requires string.');
    this._href = h;
  }
  get href(): string { return this._href; }

  @Input() tooltip: Maybe<string>;
  @Input() iconName: Maybe<string>

}
