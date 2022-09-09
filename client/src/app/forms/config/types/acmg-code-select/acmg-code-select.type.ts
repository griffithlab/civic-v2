import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AcmgCode, AcmgCodeTypeaheadGQL, AcmgCodeTypeaheadQuery, AcmgCodeTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, map } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'cvc-acmg-code-select-type',
  templateUrl: './acmg-code-select.type.html',
  styleUrls: ['./acmg-code-select.type.less'],
})
export class AcmgCodeInputType extends FieldType implements OnInit {
  formControl!: FormControl;

  searchVal = ''

  private queryRef?: QueryRef<AcmgCodeTypeaheadQuery, AcmgCodeTypeaheadQueryVariables>
  codes$?: Observable<AcmgCode[]>

  constructor(private acmgCodeGQL: AcmgCodeTypeaheadGQL) {
    super();
  }

  ngOnInit(): void {
    this.queryRef = this.acmgCodeGQL.watch({ code: this.searchVal })
    this.codes$ = this.queryRef.valueChanges
      .pipe(map(r => r.data),
        filter(isNonNulled),
        map(({ acmgCodesTypeahead }) => acmgCodesTypeahead));
  }

  onSearch(value: string): void {
    this.searchVal = value
    this.queryRef?.refetch({ code: value })
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
  }
}
