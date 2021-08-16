import { defaultValidationMessages } from './validators/default.validators';
import { CommentTextareaType } from "./types/comment-textarea/comment-textarea.type";
import { MultiFieldType } from './types/multi-field/multi-field.type';
import { SourceIdInputType } from './types/source-id-input/source-id-input.type';
import { SourceInputType } from './types/source-input/source-input.type';
import { TypeaheadSelectorType } from './types/typeahead-selector/typeahead-selector.type';

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
