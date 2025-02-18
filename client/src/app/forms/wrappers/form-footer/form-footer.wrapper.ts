import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import {
  FieldWrapper,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'

export interface CvcFormFooterWrapperProps extends FormlyFieldProps {}

const defaultProps = {}

@Component({
  selector: 'cvc-form-footer',
  templateUrl: './form-footer.wrapper.html',
  styleUrls: ['./form-footer.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcFormFooterWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcFormFooterWrapperProps>>
  implements OnInit
{
  ngOnInit(): void {}
}
