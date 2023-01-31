import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  TemplateRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { AddEntityFormHostDirective } from './add-entity-form.directive'

@UntilDestroy()
@Component({
  selector: 'cvc-add-entity-form-wrapper',
  templateUrl: './add-entity-form.wrapper.html',
  styleUrls: ['./add-entity-form.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcAddEntityFormWrapper
  extends FieldWrapper<FormlyFieldConfig>
  implements AfterViewInit
{
  @ViewChildren(AddEntityFormHostDirective)
  formHostList!: QueryList<AddEntityFormHostDirective>

  ngAfterViewInit(): void {
    // wait until host field's add form template is rendered (when the popover is activated),
    // then call loadForm() to render the form template provided by host's props.addFormContent
    this.formHostList.changes.pipe(untilDestroyed(this)).subscribe((ql) => {
      this.loadForm()
    })
  }

  loadForm(): void {
    if (!(this.field.props && this.field.props.addFormContent)) {
      console.error(
        `${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`
      )
      return
    }
    const formContent = this.field.props.addFormContent
    // QueryList provides an array, we just need the single first reference from it
    const host = this.formHostList.get(0)
    if (!host) {
      console.error(
        `${this.field.id} add-entity-form wrapper failed to find reference to AddEntityFormHostDirective TemplateRef.`
      )
      return
    }
    // const hostRef = host.viewContainerRef
    // hostRef.clear()

    const componentRef = host.viewContainerRef.createEmbeddedView(formContent)
    // componentRef.instance.data = adItem.data
  }
}
