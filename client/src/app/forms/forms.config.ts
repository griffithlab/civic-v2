import { defaultValidationMessages } from './validators/default.validators';
import { CommentTextareaType } from "./types/comment-textarea/comment-textarea.component";
import { MultiFieldType } from './types/multi-field/multi-field.component';

export const formlyConfig = {
  validationMessages: defaultValidationMessages,
  extras: { lazyRender: true },
  types: [
    CommentTextareaType,
    MultiFieldType
  ]
}
