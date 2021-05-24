import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { $enum } from "ts-enum-util";
import { CitationExistenceCheckGQL, CitationTypeaheadGQL, Maybe, SourceSource, SourceTypeaheadResultFragment } from '@app/generated/civic.apollo';
import { FieldType, FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'cvc-source-id-input',
  templateUrl: './source-id-input.component.html',
  styleUrls: ['./source-id-input.component.less'],
})
export class SourceIdInputComponent extends FieldType {
  formControl!: FormControl;
  sourceForm: FormGroup = new FormGroup({});
  selectedSourceType: Maybe<SourceSource>;
  citationId!: number;
  sourceOptions: { label: string, value: SourceSource }[];

  formOptions: FormlyFormOptions = {};
  sourceTypeaheadQuery: CitationTypeaheadGQL
  sourceFields: FormlyFieldConfig[];
  sourceModel: any = {
    sourceType: undefined,
    citationId: undefined
  }
  sourceOption: FormlyFormOptions = {};
  constructor(
    existenceCheckQuery: CitationExistenceCheckGQL,
    sourceTypeaheadQuery: CitationTypeaheadGQL
  ) {
    super();

    this.sourceTypeaheadQuery = sourceTypeaheadQuery
    this.sourceOptions = $enum(SourceSource)
      .map((value, key) => {
        return { value: value, label: key };
      });

    this.sourceFields = [
      {
        key: 'sourceType',
        type: 'select',
        templateOptions: {
          options: $enum(SourceSource)
            .map((value, key) => {
              return { value: value, label: key };
            })
        }
      },
      {
        key: 'citationId',
        type: 'input',
      }
    ]

    this.defaultOptions = {
      validation: {
        messages: {
          'minlength': (_err: any, field: FormlyFieldConfig): string => {
            return `Comments must be at least ${field.templateOptions?.minLength} characters in length.`;
          },
          'required': (_err: any, field: FormlyFieldConfig): string => {
            return 'Valid Source ID required.';
          }
        }
      },
      templateOptions: {
        mask: '0*' // allow unbounded numeric input
      },
      hooks: {
        onInit: (field: any) => {
          return field.formControl.valueChanges.pipe(
            distinctUntilChanged(),
            tap((value: any) => {
              console.warn('source-id updated.');
              console.warn(value);
            }))
        }
      }
    };
  }

  ngOnInit(): void {
    console.log(this.formControl);
  }

  onSourceTypeSelected(sourceType: string) {
    console.log("HERE")
    console.log(sourceType)
    //this.selectedSourceType = sourceType
    console.log(this.selectedSourceType)
  }

  onCitationIdChanged(citationId: string): SourceTypeaheadResultFragment[] {
    if (!this.selectedSourceType) {
      return []
    }

    this.sourceTypeaheadQuery.fetch({
      sourceType: this.selectedSourceType,
      partialCitationId: +citationId
    })
    return []
  }
}

export const SourceIdInputType = {
  name: 'source-id-input',
  component: SourceIdInputComponent,
  wrappers: ['form-field'],
}
