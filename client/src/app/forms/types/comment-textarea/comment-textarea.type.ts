import { ChangeDetectionStrategy, Component } from '@angular/core'
import { UntypedFormControl } from '@angular/forms'
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core'
import { TypeOption } from '@ngx-formly/core/lib/models'

@Component({
    selector: 'comment-textarea-type',
    templateUrl: './comment-textarea.type.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CommentTextareaType extends FieldType<any> {
  defaultOptions = {
    defaultValue: '',
    validation: {
      messages: {
        minlength: (_err: any, field: FormlyFieldConfig): string => {
          return `Comments must be at least ${field.templateOptions?.minLength} characters in length.`
        },
      },
    },
    templateOptions: {
      rows: 4,
    },
  }
}

export const CommentTextareaTypeOption: TypeOption = {
  name: 'comment-textarea',
  component: CommentTextareaType,
  wrappers: ['form-field'],
}
