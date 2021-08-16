import { defaultValidationMessages } from './validators/default.validators';
import { CommentTextareaType } from "./types/comment-textarea/comment-textarea.type";
import { MultiFieldType } from './types/multi-field/multi-field.type';

export const formlyConfig = {
  validationMessages: defaultValidationMessages,
  types: [
    CommentTextareaType,
    MultiFieldType,
  ]
}
