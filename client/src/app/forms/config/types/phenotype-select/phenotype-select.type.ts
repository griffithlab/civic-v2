import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  PhenotypeSelectFieldsFragmentDoc,
  PhenotypeSelectGQL,
  PhenotypeSelectQuery,
  PhenotypeSelectQueryVariables
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';

interface PhenotypeSelectOption {
  id: number,
  hpoId: string,
  name: string
}

@Component({
  selector: 'cvc-phenotype-select-type',
  templateUrl: './phenotype-select.type.html',
  styleUrls: ['./phenotype-select.type.less'],
})
export class PhenotypeSelectType extends FieldType implements OnInit, AfterViewInit, OnDestroy {
  formControl!: FormControl;

  private queryRef?: QueryRef<PhenotypeSelectQuery, PhenotypeSelectQueryVariables>
  phenotypes$?: Observable<PhenotypeSelectOption[]>

  constructor(
    private phenotypeTypeaheadQuery: PhenotypeSelectGQL,
  ) {
    super();

    this.defaultOptions = {
      templateOptions: {
        label: 'Phenotypes',
        placeholder: 'Search Phenotypes',
        showArrow: false,
        onSearch: () => { },
        minLengthSearch: 1,
        optionList: [],
        searchLength: 0,
        searchString: '',
        entityType: 'Phenotype',
        entityFragment: PhenotypeSelectFieldsFragmentDoc,
      },
    };
  }

  ngOnInit(): void {
    this.queryRef = this.phenotypeTypeaheadQuery.watch({ name: '' })

    this.phenotypes$ = this.queryRef
      .valueChanges
      .pipe(pluck('data', 'phenotypeTypeahead'))
  }

  ngAfterViewInit(): void {
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value;
      this.to.fieldLength = value.length;
      if (
        value.length < this.to.minLengthSearch ||
        value.length > this.to.maxLength!
      ) {
        return;
      }

      this.queryRef?.refetch({ name: value })
    };
  }

  ngOnDestroy(): void {}
}
