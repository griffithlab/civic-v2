import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { WrapperOption } from '@ngx-formly/core/lib/services/formly.config';

@Component({
  selector: 'cvc-form-info-wrapper',
  templateUrl: './form-info.wrapper.html',
  styleUrls: ['./form-info.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFormInfoWrapper extends FieldWrapper {
}
