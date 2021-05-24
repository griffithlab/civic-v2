import { Component, Input, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  encapsulation: ViewEncapsulation.None,
})
export class SourceSelectorComponent implements OnInit {
  @Output() sourceSelected = new EventEmitter<Maybe<any>>();
  model = {};
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
        defaultValue: 12345,
        hide: true
      },
      {
        key: 'citation',
        defaultValue: 'this is a new citation.',
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
        type: 'input',
        templateOptions: {
          required: true
        }
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
