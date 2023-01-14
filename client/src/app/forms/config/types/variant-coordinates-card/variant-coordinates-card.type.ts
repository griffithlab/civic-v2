import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';

@Component({
  selector: 'cvc-variant-coordinates-card-type',
  templateUrl: './variant-coordinates-card.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantCoordinatesCardType extends FieldType<any> {
  defaultOptions = {
    templateOptions: {
      isFusionVariant: false,
    },
  };
}

export const VariantCoordinatesCardTypeOption: TypeOption = {
  name: 'variant-coordinates-card',
  component: VariantCoordinatesCardType,
};
