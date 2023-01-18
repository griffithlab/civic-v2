import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cvc-string-tag',
  templateUrl: './string-tag.component.html',
  styleUrls: ['./string-tag.component.less']
})
export class CvcStringTagComponent {
  @Input() cvcLabel?: string
  @Input() cvcEmphasize?: string
  @Input() cvcMode: 'default' | 'closeable' | 'checkable' = 'default'
  @Output() cvcOnClose: EventEmitter<MouseEvent>

  constructor() {
    this.cvcOnClose = new EventEmitter<MouseEvent>()
  }

}
