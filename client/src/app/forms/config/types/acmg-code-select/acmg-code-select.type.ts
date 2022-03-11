import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AcmgCode, AcmgCodeTypeaheadGQL, AcmgCodeTypeaheadQuery, AcmgCodeTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'cvc-acmg-code-select-type',
  templateUrl: './acmg-code-select.type.html',
  styleUrls: ['./acmg-code-select.type.less'],
})
export class AcmgCodeInputType extends FieldType implements OnInit, OnDestroy {
  formControl!: FormControl;

  private destroy$ = new Subject();
  private searchVal = ""

  private queryRef?: QueryRef<AcmgCodeTypeaheadQuery, AcmgCodeTypeaheadQueryVariables>
  codes$?: Observable<AcmgCode[]>

  constructor(private acmgCodeGQL: AcmgCodeTypeaheadGQL) {
    super();
  }
  
  ngOnInit(): void {
    this.queryRef = this.acmgCodeGQL.watch({code: this.searchVal})
    this.codes$ = this.queryRef.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(({data}) => data.acmgCodesTypeahead)
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  onSearch(value: string): void {
    this.queryRef?.refetch({code: value})
  }

}
export const acmgCodeSelectTypeOption: TypeOption = {
  name: 'acmg-code-select',
  extends: 'select',
  component: AcmgCodeInputType,
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      placeholder: 'None specified.',
    },
    modelOptions: {
      debounce: {
        default: 500
      }
    },
  }
}
