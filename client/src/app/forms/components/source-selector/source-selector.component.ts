import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { sourceInputInitialModel } from '@app/forms/types/source-input/source-input.component';
import { SourceSource } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { EventEmitter } from 'events';
import { $enum } from 'ts-enum-util';

@Component({
  selector: 'cvc-source-selector',
  templateUrl: './source-selector.component.html',
  styleUrls: ['./source-selector.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class SourceSelectorComponent implements OnInit {
  @Input() source!: any;
  @Output() sourceChanges = new EventEmitter();
  form = new FormGroup({});
  model = sourceInputInitialModel;
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
      className: 'source-selector-sourcetype',
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
      className: 'source-selector-citationid',
      type: 'input',
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.model = this.source;
  }

}
