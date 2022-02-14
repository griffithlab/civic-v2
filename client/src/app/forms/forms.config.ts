import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ConfigOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';
import { CommentTextareaType } from './comments/types/comment-textarea/comment-textarea.type';
import { DiseaseInputType } from './diseases/types/disease-input/disease-input.type';
import { DrugInputType } from './drugs/types/drug-input/drug-input.type';
import { RatingInputType } from './evidence/types/rating-input/rating-input.type';
import { GeneInputType } from './genes/types/gene-input/gene-input.type';
import { PhenotypeInputType } from './phenotypes/types/phenotype-input/phenotype-input.type';
import { MultiFieldAddBtnType } from './shared/types/multi-field/multi-field-add-btn/multi-field-add-btn.type';
import { MultiFieldType } from './shared/types/multi-field/multi-field.type';
import { SourceInputType } from './sources/types/source-input/source-input.type';
import { TypeaheadSelectorType } from './sources/types/source-input/source-selector/source-selector-typeahead/source-selector-typeahead.type';
import { VariantTypeInputType } from './variant-types/types/variant-type-input/variant-type-input.type';
import { VariantInputType } from './variants/types/variant-input/variant-input.type';

export const defaultValidationMessages: ValidationMessageOption[] = [
  {
    name: 'required',
    message: 'This field is required.'
  },
  {
    name: 'minlength',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a minimum length of ${field.templateOptions?.minLength}.`;
    }
  },
  {
    name: 'maxlength',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a maximum length of ${field.templateOptions?.maxLength}.`;
    }
  },
  {
    name: 'min',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a minimum value of ${field.templateOptions?.min}.`;
    }
  },
  {
    name: 'max',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a maximum value of ${field.templateOptions?.max}.`;
    }
  },
  {
    name: 'pattern',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field's value must fit the pattern ${field.templateOptions?.pattern}.`;
    }
  },
  {
    name: 'ensembl',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `${field.formControl?.value} is not a valid version of Ensembl. Must be an number between 76 and the latest version of Ensembl.`;
    }
  },
  {
    name: 'integer',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `${field.formControl?.value} is not a valid integer. Must be either a number or empty`;
    }
  },

];

export const additionalValidators: ValidatorOption[] = [
  {
    name: 'ensembl',
    validation: (c: AbstractControl, f: FormlyFieldConfig): ValidationErrors | null => {
      if (c.value === undefined) {
        return null;
      } else {
        let versionNum = +c.value;
        if (versionNum < 76 || versionNum > 150) {
          return { ensembl: true };
        }
        return null;
      }
    },
  },
  {
    name: 'integer',
    validation: (c: AbstractControl, f: FormlyFieldConfig): ValidationErrors | null => {
      if (c.value === '' || c.value === undefined) {
        return null;
      } else {
        return /^\d+$/.test(c.value) ? null : { 'integer': true }
      }
    },
  },
];

export const CvcFormlyConfig: ConfigOption = {
  types: [
    CommentTextareaType,
    CommentTextareaType,
    DiseaseInputType,
    DrugInputType,
    GeneInputType,
    MultiFieldAddBtnType,
    MultiFieldType,
    PhenotypeInputType,
    RatingInputType,
    SourceInputType,
    TypeaheadSelectorType,
    VariantInputType,
    VariantTypeInputType,
  ],
  extras: { immutable: true },
  validationMessages: defaultValidationMessages,
  validators: additionalValidators,
}
