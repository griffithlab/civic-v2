import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormSource, FormVariant } from '../forms.interfaces';

interface FormModel {
  fields: {
    description: string,
    sources: FormSource[],
    variants: FormVariant[],
    comment?: string,
    organization?: Maybe<Organization>
  }
}

@Component({
  selector: 'cvc-variant-group-submit-form',
  templateUrl: './variant-group-submit.form.html',
  styleUrls: ['./variant-group-submit.form.less']
})
export class VariantGroupSubmitForm implements OnInit {
  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  constructor() {
    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Add Variant Group Form'
        },
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Variant Group Name',
              required: true
            }
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Description',
              helpText: 'A brief description of this new variant group.',
              placeholder: 'No description provided',
              required: true
            }
          },
          {
            key: 'sources',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Source',
              helpText: 'Add any sources upon which your description depends.',
              addText: 'Add a Source',
            },
            fieldArray: {
              type: 'source-input',
              templateOptions: {
                hideLabel: true,
                required: true,
              },
            },
          },
          {
            key: 'variants',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Variants',
              helpText: 'Specify the variants that comprise this Variant Group.',
              addText: 'Add a Variant ',
            },
            fieldArray: {
              type: 'variant-input',
              templateOptions: {
                hideLabel: true,
                required: true,
              },
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              helpText: 'Please provide any additional comments you wish to make about this evidence item. This comment will appear as the first comment in this item\'s comment thread.',
              placeholder: 'Please enter a comment describing your revision.',
              required: true,
              minLength: 10
            },
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Submit Evidence Item Revision',
              submitSize: 'large'
            }
          }
        ]
      }
    ]
  }

  submitVariantGroup = (model: FormModel): void => {
    console.log(model);
  }

  ngOnInit(): void {
  }

}
