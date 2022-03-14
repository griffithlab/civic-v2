import { Component, OnInit } from '@angular/core';
import { formatSourceTypeEnum } from '@app/core/utilities/enum-formatters/format-source-type-enum';
import { Maybe, SourceSource } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { $enum } from 'ts-enum-util';

export interface SourceSelectModel {
  sourceType: Maybe<SourceSource>,
  citationId: Maybe<string>
}

@Component({
  selector: 'cvc-source-select',
  templateUrl: './source-select.type.html',
  styleUrls: ['./source-select.type.less']
})
export class SourceSelectType extends FieldType implements OnInit {

  constructor() {
    super();

    this.defaultOptions = {
      templateOptions: {
        label: 'Source',
      },
      fieldGroup: [
        {
          key: 'sourceType',
          type: 'select',
          defaultValue: SourceSource.Pubmed,
          templateOptions: {
            required: true,
            placeholder: 'Select Type',
            options: $enum(SourceSource)
              .map((value, key) => {
                return { value: value, label: formatSourceTypeEnum(value) };
              })
          }
        },
        {
          key: 'citationId',
          type: 'citation-select',
          templateOptions: {
            maxLength: 10,
            required: true,
            // triggerParentSubmit: () => { this.onSubmit(); }
          },
          // expressionProperties: {
          //   'templateOptions.disabled': '!model.sourceType',
          //   'templateOptions.placeholder': '!model.sourceType ? "Select source type before searching" : "Search " + model.sourceType + " sources"',
          //   'templateOptions.sourceType': 'model.sourceType',
          //   'templateOptions.sourceTypeKey': (model: SourceSelectModel): Maybe<string> => {
          //     if (!model.sourceType) { return }
          //     return $enum(SourceSource).getKeyOrThrow(model.sourceType);
          //   }

          // }
        },
      ]
    }
  }

  ngOnInit(): void {
  }

}
