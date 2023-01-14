import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  NccnGuideline,
  NccnGuidelineTypeaheadGQL,
  NccnGuidelineTypeaheadQuery,
  NccnGuidelineTypeaheadQueryVariables,
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'cvc-nccn-guideline-input-type',
  templateUrl: './nccn-guideline-input.type.html',
})
export class NccnGuidelineInputType extends FieldType<any> implements OnInit {
  private searchVal = '';

  private queryRef?: QueryRef<
    NccnGuidelineTypeaheadQuery,
    NccnGuidelineTypeaheadQueryVariables
  >;
  guidelines$?: Observable<NccnGuideline[]>;

  constructor(private nccnGuidelineGQL: NccnGuidelineTypeaheadGQL) {
    super();
  }

  ngOnInit(): void {
    this.queryRef = this.nccnGuidelineGQL.watch({ name: this.searchVal });
    this.guidelines$ = this.queryRef.valueChanges.pipe(
      map((r) => r.data?.nccnGuidelinesTypeahead),
      filter(isNonNulled)
    );
  }

  onSearch(value: string): void {
    this.queryRef?.refetch({ name: value });
  }
}

export const nccnGuidelineInputTypeOption: TypeOption = {
  name: 'nccn-guideline-input',
  extends: 'select',
  wrappers: ['form-field'],
  component: NccnGuidelineInputType,
  defaultOptions: {
    templateOptions: {
      label: 'NCCN Guideline',
      placeholder: 'None specified',
      helpText:
        'If applicable, please provide cancer (e.g., Breast Cancer) and version (e.g., 5.2016) for the appropriate <a href="http://www.nccn.org/professionals/physician_gls/default.aspx#site" target="_blank">NCCN guideline</a>.',
    },
    modelOptions: {
      debounce: {
        default: 500,
      },
    },
  },
};
