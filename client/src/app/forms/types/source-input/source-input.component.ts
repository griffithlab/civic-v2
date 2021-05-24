import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

export const sourceInputInitialModel = {
  id: undefined,
  citation: undefined,
  citationId: undefined,
  sourceType: undefined
}

@Component({
  selector: 'cvc-source-input',
  templateUrl: './source-input.component.html',
  styleUrls: ['./source-input.component.less']
})
export class SourceInputComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.field.model);
  }
}

export const SourceInputType = {
  name: 'source-input',
  component: SourceInputComponent,
  wrappers: ['form-field'],
}
