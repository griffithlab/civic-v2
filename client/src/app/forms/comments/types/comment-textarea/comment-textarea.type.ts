import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cvc-comment-textarea',
  templateUrl: './comment-textarea.type.html',
  styleUrls: ['./comment-textarea.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentTextareaType extends FieldType<FormlyFieldConfig> {
  formControl!: FormControl;

  defaultOptions = {
    defaultValue: '',
    validation: {
      messages: {
        'minlength': (_err: any, field: FormlyFieldConfig): string => {
          return `Comments must be at least ${field.templateOptions?.minLength} characters in length.`;
        }
      }
    },
    templateOptions: {
      rows: 4
    },
  };
}

export const CommentTextareaTypeOption = {
  name: 'cvc-comment-textarea',
  component: CommentTextareaType,
  wrappers: ['form-field'],
}
