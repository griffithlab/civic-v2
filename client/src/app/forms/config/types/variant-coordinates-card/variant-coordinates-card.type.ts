import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-variant-coordinates-card',
  templateUrl: './variant-coordinates-card.type.html',
  styleUrls: ['./variant-coordinates-card.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantCoordinatesCardType extends FieldType {
  defaultOptions = {
    templateOptions: {
      isFusionVariant: false
    }
  }
}

export const VariantCoordinatesCardTypeOption = {
  name: 'variant-coordinates-card',
  component: VariantCoordinatesCardType,
}
