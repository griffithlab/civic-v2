import { Component, Input, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { sourceInputInitialModel } from '@app/forms/types/source-input/source-input.component';
import {
  Maybe,
  Source,
  SourceSource,
  CitationExistenceCheckGQL,
  CitationTypeaheadGQL,
  SourceTypeaheadResultFragment
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { $enum } from 'ts-enum-util';

@Component({
  selector: 'cvc-source-selector',
  templateUrl: './source-selector.component.html',
  styleUrls: ['./source-selector.component.less'],
  // view encapsulation off, so that 'className' styles will be applied
  encapsulation: ViewEncapsulation.None,
})
export class SourceSelectorComponent implements OnInit {
  @Output() sourceSelected = new EventEmitter<Maybe<any>>();
  model = sourceInputInitialModel;
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(
    existenceCheckQuery: CitationExistenceCheckGQL,
    sourceTypeaheadQuery: CitationTypeaheadGQL
  ) {
    this.fields = [
      {
        key: 'id',
        hide: true
      },
      {
        key: 'citation',
        hide: true
      },
      {
        key: 'sourceType',
        type: 'select',
        className: 'source-type-field',
        templateOptions: {
          required: true,
          placeholder: 'Select Type',
          options: $enum(SourceSource)
            .map((value, key) => {
              return { value: value, label: key };
            })
        }
      },
      {
        key: 'citationId',
        className: 'citation-id-field',
        type: 'typeahead-selector',
        templateOptions: {
          required: true
        },
        // expressionProperties: {
        //   'templateOptions.disabled': '!model.sourceType',
        //   'templateOptions.placeholder': '!model.sourceType ? "Select source type before searching" : "Search " + model.sourceType + " sources"'
        // }
      },
    ];
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('source-select form submitted.');
    this.sourceSelected.emit(this.model);
  }

}
