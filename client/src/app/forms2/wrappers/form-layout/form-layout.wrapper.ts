import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import {
    FieldWrapper,
    FormlyFieldConfig,
    FormlyFieldProps
} from '@ngx-formly/core'
import { environment } from 'environments/environment'
import { Observable, Subscription } from 'rxjs'
import { tag } from 'rxjs-spy/operators'

export interface CvcFormLayoutWrapperProps extends FormlyFieldProps {
  title: string
  submitLabel: string
  showDevPanel: boolean
}

const defaultProps: CvcFormLayoutWrapperProps = {
  title: 'Form Card',
  submitLabel: 'Submit',
  showDevPanel: false,
}

@UntilDestroy({ arrayName: 'subscriptions' })
@Component({
  selector: 'cvc-form-layout-wrapper',
  templateUrl: './form-layout.wrapper.html',
  styleUrls: ['./form-layout.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFormLayoutWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcFormLayoutWrapperProps>>
  implements OnInit
{
  valueChange$: Maybe<Observable<any>>
  statusChange$: Maybe<Observable<any>>
  subscriptions!: Subscription[]

  constructor(cdr: ChangeDetectorRef) {
    super()

  }
  get errorState() {
    return this.showError ? 'error' : ''
  }

  ngOnInit(): void {
    this.props.title = this.props.title || defaultProps.title
    this.props.submitLabel = this.props.submitLabel || defaultProps.submitLabel
    this.props.showDevPanel = environment.production ? false : (this.props.showDevPanel || defaultProps.showDevPanel)
  }
}
