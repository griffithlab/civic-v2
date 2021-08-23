import { Component, Input, EventEmitter, OnInit, Output, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  Maybe,
  SourceSource,
} from '@app/generated/civic.apollo';
import { formatSourceTypeEnum } from '@app/core/utilities/enum-formatters/format-source-type-enum';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { $enum } from 'ts-enum-util';

export interface SelectorModel {
  sourceType: Maybe<SourceSource>,
  citationId: Maybe<string>
}

@Component({
  selector: 'cvc-source-selector',
  templateUrl: './source-selector.form.html',
  styleUrls: ['./source-selector.form.less'],
  // view encapsulation off, so that 'className' styles will be applied
  encapsulation: ViewEncapsulation.None,
})
export class SourceSelectorForm implements OnInit, OnDestroy {
  @Output() sourceSelected = new EventEmitter<Maybe<any>>();
  model: SelectorModel = { sourceType: undefined, citationId: undefined };
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor() {
    this.fields = [
      { key: 'id' },
      {
        key: 'citation',
        defaultValue: ''
      },
      {
        key: 'sourceType',
        type: 'select',
        className: 'source-type-field',
        defaultValue: SourceSource.Pubmed,
        templateOptions: {
          required: true,
          placeholder: 'Select Type',
          options: $enum(SourceSource)
            .map((value, key) => {
              return { value: value, label: formatSourceTypeEnum(value)};
            })
        }
      },
      {
        key: 'citationId',
        className: 'citation-id-field',
        type: 'source-selector-typeahead',
        templateOptions: {
          maxLength: 10,
          required: true,
          triggerParentSubmit: () => { this.onSubmit(); }
        },
        expressionProperties: {
          'templateOptions.disabled': '!model.sourceType',
          'templateOptions.placeholder': '!model.sourceType ? "Select source type before searching" : "Search " + model.sourceType + " sources"',
          'templateOptions.sourceType': 'model.sourceType',
          'templateOptions.sourceTypeKey': (model: SelectorModel): Maybe<string> => {
            if(!model.sourceType) { return }
            return $enum(SourceSource).getKeyOrThrow(model.sourceType);
          }

        }
      },
      {
        template: '<button type="submit" nz-button nzType="primary" nzSize="small">+</button>',
        className: 'submit-button',
        templateOptions: {
          safeHtml: true
        }
      }
    ];
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('source-select form submitted.');
    this.sourceSelected.emit(this.model);
  }

  ngOnDestroy(): void {
    console.log('source-selector onDestroy called.');
  }
}
