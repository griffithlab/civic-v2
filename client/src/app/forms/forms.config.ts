import { defaultValidationMessages } from './validators/default.validators';
import { CommentTextareaType } from "./types/comment-textarea/comment-textarea.component";
import { MultiFieldType } from './types/multi-field/multi-field.component';
import { SourceIdInputType } from './types/source-id-input/source-id-input.component';
import { SourceInputType } from './types/source-input/source-input.component';

export const formlyConfig = {
  validationMessages: defaultValidationMessages,
  types: [
    CommentTextareaType,
    MultiFieldType,
    SourceIdInputType,
    SourceInputType
  ]
}
