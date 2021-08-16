import { defaultValidationMessages } from './validators/default.validators';
import { MultiFieldType } from './types/multi-field/multi-field.type';
import { CommentTextareaType } from './comments/types/comment-textarea/comment-textarea.type';

export const formlyConfig = {
  validationMessages: defaultValidationMessages,
  types: [
    CommentTextareaType,
    MultiFieldType,
  ]
}
