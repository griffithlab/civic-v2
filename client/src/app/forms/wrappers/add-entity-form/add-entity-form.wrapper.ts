import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { NzTSType } from 'ng-zorro-antd/core/types'
import { ReplaySubject } from 'rxjs'

@UntilDestroy()
@Component({
  selector: 'cvc-add-entity-form-wrapper',
  templateUrl: './add-entity-form.wrapper.html',
  styleUrls: ['./add-entity-form.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcAddEntityFormWrapper
  extends FieldWrapper<FormlyFieldConfig>
  implements AfterViewInit
{
  contentTemplate$!: ReplaySubject<NzTSType>

  constructor() {
    super()
    this.contentTemplate$ = new ReplaySubject<NzTSType>()
  }

  ngAfterViewInit(): void {
    if (!(this.field.props && this.field.props.addFormContent)) {
      console.error(
        `${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`
      )
      return
    }
    this.contentTemplate$.next(this.field.props.addFormContent)
  }
}
