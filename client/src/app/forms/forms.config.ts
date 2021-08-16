import { defaultValidationMessages } from './validators/default.validators';
import { CommentTextareaType } from './comments/types/comment-textarea/comment-textarea.type';
import { MultiFieldType } from './shared/types/multi-field/multi-field.type';

export const formlyConfig = {
  validationMessages: defaultValidationMessages,
  types: [
    CommentTextareaType,
    MultiFieldType,
  ]
}
