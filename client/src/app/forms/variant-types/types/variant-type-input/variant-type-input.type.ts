import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { TypeInputModel } from './variant-type-selector/variant-type-selector.form';

export const typeInputInitialModel: TypeInputModel = {
  id: undefined,
  soid: undefined,
  name: undefined,
}

@Component({
  selector: 'cvc-variant-type-input',
  templateUrl: './variant-type-input.type.html',
  styleUrls: ['./variant-type-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantTypeInputComponent extends FieldType implements OnInit {

  constructor() { super(); }

  onTypeSelected(type: Maybe<any>): void {
    this.formControl.setValue(type)
  }

  ngOnInit(): void {
    console.log(this.field.model);
  }
}

export const VariantTypeInputType = {
  name: 'variant-type-input',
  component: VariantTypeInputComponent
}
