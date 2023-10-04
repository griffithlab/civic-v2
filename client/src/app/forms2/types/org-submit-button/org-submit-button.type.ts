import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import {
  FieldType,
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import {
  BehaviorSubject,
  filter,
  Observable,
  Subject,
  Subscription,
  withLatestFrom,
} from 'rxjs'

interface CvcOrgSubmitButtonProps extends FormlyFieldProps {
  submitLabel: string
}

export interface CvcOrgSubmitButtonFieldConfig
  extends FormlyFieldConfig<CvcOrgSubmitButtonProps> {
  type: 'org-submit-button' | Type<CvcOrgSubmitButtonComponent>
}

@Component({
  selector: 'cvc-org-submit-button',
  templateUrl: './org-submit-button.type.html',
  styleUrls: ['./org-submit-button.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcOrgSubmitButtonComponent extends FieldType<
  FieldTypeConfig<CvcOrgSubmitButtonProps>
> {
  defaultOptions: Partial<FieldTypeConfig<CvcOrgSubmitButtonProps>> = {
    props: {
      submitLabel: 'Submit',
    },
  }

  constructor() {
    super()
  }
}
