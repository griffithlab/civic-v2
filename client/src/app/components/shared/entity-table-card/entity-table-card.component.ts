import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'cvc-entity-table-card',
  templateUrl: './entity-table-card.component.html',
  styleUrls: ['./entity-table-card.component.less']
})
export class CvcEntityTableCardComponent implements OnInit {
  @Input() cvcTitle: string | TemplateRef<void> | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
