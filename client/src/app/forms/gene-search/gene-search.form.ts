import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  BooleanOperator,
  GeneSearchFilter,
  Maybe,
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';

interface FormModel {
  fields: {
    filters: [GeneSearchFilter];
    booleanOperator: BooleanOperator;
  };
}

@Component({
  selector: 'cvc-gene-search',
  templateUrl: './gene-search.form.html',
  styleUrls: ['./gene-search.form.less'],
})
export class GeneSearchForm implements OnDestroy {
  private destroy$: Subject<void> = new Subject();

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  searchFilter?: GeneSearchFilter;


  constructor() {
    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Gene Search Form',
        },
        fieldGroup: [
          {
            key: 'booleanOperator',
            type: 'select',
            defaultValue: BooleanOperator.Or,
            templateOptions: {
              label: 'Boolean Operator',
              options: [
                { label: 'AND', value: BooleanOperator.And },
                { label: 'OR', value: BooleanOperator.Or },
              ],
            },
          },
          {
            key: 'filters',
            type: 'search-rules',
            wrappers: ['form-field'],
            templateOptions: {
              addText: 'Add another condition',
            },
            fieldArray: {
              type: 'gene-search-input',
            },
          },
        ],
      },
    ];
  }

  search(formModel: Maybe<FormModel>): void {
    let input = this.toSubmitInput(formModel);
    if (input) {
      this.searchFilter = input;
    }
  }

  toSubmitInput(model: Maybe<FormModel>): Maybe<GeneSearchFilter> {
    if (model) {
     return {
       booleanOperator: model.fields.booleanOperator,
       subFilters: model.fields.filters.map(f => this.cleanFields(f))
      }
    }
    return undefined;
  }

  cleanFields(filter: GeneSearchFilter): GeneSearchFilter {
    const objectKeys = Object.keys(filter) as Array<keyof GeneSearchFilter>
    for(let key of objectKeys) {
      let col = filter[key]
      if (col && (col as any)["value"] === null) {
        delete filter[key];
      }
    }
    return filter
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
