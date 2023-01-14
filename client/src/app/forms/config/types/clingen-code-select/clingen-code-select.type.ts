import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ClingenCode, ClingenCodeTypeaheadGQL, ClingenCodeTypeaheadQuery, ClingenCodeTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'cvc-clingen-code-select-type',
  templateUrl: './clingen-code-select.type.html',
  styleUrls: ['./clingen-code-select.type.less'],
})
export class ClingenCodeInputType extends FieldType<any> implements OnInit {
  

  searchVal = ''

  private queryRef?: QueryRef<ClingenCodeTypeaheadQuery, ClingenCodeTypeaheadQueryVariables>
  codes$?: Observable<ClingenCode[]>

  constructor(private clingenCodeGQL: ClingenCodeTypeaheadGQL){
    super();
  }

  ngOnInit(): void {
    this.queryRef = this.clingenCodeGQL.watch({ code: this.searchVal })
    this.codes$ = this.queryRef.valueChanges
      .pipe(map(r => r.data),
        filter(isNonNulled),
        map(({ clingenCodesTypeahead }) => clingenCodesTypeahead));
  }

  onSearch(value: string): void {
    this.searchVal = value
    this.queryRef?.refetch({ code: value })
  }

}
export const clingenCodeSelectTypeOption: TypeOption = {
  name: 'clingen-code-select',
  extends: 'select',
  component: ClingenCodeInputType,
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      placeholder: 'None specified.',
    },
  }
}
