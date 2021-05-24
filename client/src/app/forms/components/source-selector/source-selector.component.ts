import { Component, Input, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Source, SourceSource, Maybe } from '@app/generated/civic.apollo';
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
  enum = $enum;
  model = {};
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
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
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('source-select form submitted.');
    this.sourceSelected.emit(
      {
        id: 123,
        citationId: 987654,
        citation: 'This is a new source.',
        sourceType: SourceSource.Asco
      }
    );
  }

}
