import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';

export const sourceInputInitialModel: SourceInputModel = {
  id: undefined,
  citation: undefined,
  citationId: undefined,
  sourceType: undefined
}

export interface SourceInputModel {
  id: Maybe<number>,
  citation: Maybe<string>,
  citationId: Maybe<number>,
  sourceType: Maybe<string>
}

@Component({
  selector: 'cvc-source-input',
  templateUrl: './source-input.component.html',
  styleUrls: ['./source-input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceInputComponent extends FieldType implements OnInit {
  selectorModel!: any;
  constructor() {
    super();
  }

  onSourceSelected(s: Maybe<any>): void {
    console.log(s);
    this.formControl.setValue(s);
  }

  ngOnInit(): void {
    console.log(this.field.model);
  }
}

export const SourceInputType = {
  name: 'source-input',
  component: SourceInputComponent,
  // wrappers: ['form-field'],
}
