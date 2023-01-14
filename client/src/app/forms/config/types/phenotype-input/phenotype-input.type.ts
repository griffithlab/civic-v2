import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PhenotypeTypeaheadGQL,
  PhenotypeTypeaheadQuery,
  PhenotypeTypeaheadQueryVariables,
} from '@app/generated/civic.apollo';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, pluck } from 'rxjs/operators';

interface PhenotypeTypeahead {
  id: number;
  hpoId: string;
  name: string;
}

@UntilDestroy()
@Component({
  selector: 'cvc-phenotype-input-type',
  templateUrl: './phenotype-input.type.html',
})
export class PhenotypeInputType
  extends FieldType<any>
  implements OnInit, AfterViewInit
{
  private queryRef?: QueryRef<
    PhenotypeTypeaheadQuery,
    PhenotypeTypeaheadQueryVariables
  >;

  phenotypes$?: Observable<PhenotypeTypeahead[]>;

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Phenotypes',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [],
    },
  };

  constructor(private phenotypeTypeaheadQuery: PhenotypeTypeaheadGQL) {
    super();
  }

  ngOnInit(): void {
    this.queryRef = this.phenotypeTypeaheadQuery.watch({ name: '' });

    this.phenotypes$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'phenotypeTypeahead'),
      filter(isNonNulled)
    );
  }

  ngAfterViewInit(): void {
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value;
      this.to.fieldLength = value.length;
      if (value.length < this.to.minLengthSearch) {
        return;
      }

      this.to.searchString = value;
      this.queryRef?.refetch({ name: value });
    };
  }
}

export const PhenotypeInputTypeOption: TypeOption = {
  name: 'phenotype-input',
  component: PhenotypeInputType,
};
