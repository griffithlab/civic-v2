import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cvc-comment-textarea',
  templateUrl: './comment-textarea.component.html',
  styleUrls: ['./comment-textarea.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentTextareaComponent extends FieldType {
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

export const CommentTextareaType = {
  name: 'comment-textarea',
  component: CommentTextareaComponent,
  wrappers: ['form-field'],
}
