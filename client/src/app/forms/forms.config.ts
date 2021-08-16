import { defaultValidationMessages } from './validators/default.validators';
import { CommentTextareaType } from "./types/comment-textarea/comment-textarea.type";
import { MultiFieldType } from './types/multi-field/multi-field.component';
import { SourceIdInputType } from './types/source-id-input/source-id-input.component';
import { SourceInputType } from './types/source-input/source-input.component';
import { TypeaheadSelectorType } from './types/typeahead-selector/typeahead-selector.component';

export const formlyConfig = {
  validationMessages: defaultValidationMessages,
  types: [
    CommentTextareaType,
    MultiFieldType,
    SourceIdInputType,
    SourceInputType,
    TypeaheadSelectorType
  ]
}
