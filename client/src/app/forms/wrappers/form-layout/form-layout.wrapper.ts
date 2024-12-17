import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import {
  FieldWrapper,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { environment } from 'environments/environment'
import { Observable, Subscription } from 'rxjs'
import { tag } from 'rxjs-spy/operators'

export interface CvcFormLayoutWrapperProps extends FormlyFieldProps {
  showDevPanel: boolean
}

const defaultProps: CvcFormLayoutWrapperProps = {
  showDevPanel: false,
}

@UntilDestroy({ arrayName: 'subscriptions' })
@Component({
  selector: 'cvc-form-layout-wrapper',
  templateUrl: './form-layout.wrapper.html',
  styleUrls: ['./form-layout.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcFormLayoutWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcFormLayoutWrapperProps>>
  implements OnInit
{
  valueChange$: Maybe<Observable<any>>
  statusChange$: Maybe<Observable<any>>
  subscriptions!: Subscription[]

  constructor() {
    super()
  }
  get errorState() {
    return this.showError ? 'error' : ''
  }

  ngOnInit(): void {
    this.props.showDevPanel = environment.production
      ? false
      : this.props.showDevPanel || defaultProps.showDevPanel
  }
}
