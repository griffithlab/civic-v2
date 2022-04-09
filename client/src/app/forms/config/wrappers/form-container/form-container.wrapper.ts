import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'cvc-form-container-wrapper',
  templateUrl: './form-container.wrapper.html',
  styleUrls: ['./form-container.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContainerWrapper extends FieldWrapper {
}

