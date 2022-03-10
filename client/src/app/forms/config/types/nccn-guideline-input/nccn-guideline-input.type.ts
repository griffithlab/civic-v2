import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NccnGuideline, NccnGuidelineTypeaheadGQL, NccnGuidelineTypeaheadQuery, NccnGuidelineTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cvc-nccn-guideline-input-type',
  templateUrl: './nccn-guideline-input.type.html',
  styleUrls: ['./nccn-guideline-input.type.less']
})
export class NccnGuidelineInputType extends FieldType implements OnInit, OnDestroy {
  formControl!: FormControl;

  private destroy$ = new Subject();
  private searchVal = ""

  private queryRef?: QueryRef<NccnGuidelineTypeaheadQuery, NccnGuidelineTypeaheadQueryVariables>
  guidelines$?: Observable<NccnGuideline[]>

  constructor(private nccnGuidelineGQL: NccnGuidelineTypeaheadGQL) {
    super();
  }

  ngOnInit(): void {
    this.queryRef = this.nccnGuidelineGQL.watch({name: this.searchVal})
    this.guidelines$ = this.queryRef.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(({data}) => data.nccnGuidelinesTypeahead )
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(value: string): void {
    this.queryRef?.refetch({name: value})
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
      helpText:  'If applicable, please provide cancer (e.g., Breast Cancer) and version (e.g., 5.2016) for the appropriate <a href="http://www.nccn.org/professionals/physician_gls/default.aspx#site" target="_blank">NCCN guideline</a>.'
    },
    modelOptions: {
      debounce: {
        default: 500
      }
    }
  }
}

