import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PhenotypeTypeaheadGQL, PhenotypeTypeaheadQuery, PhenotypeTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import {TypeOption} from "@ngx-formly/core/lib/models";

interface PhenotypeTypeahead {
  id: number,
  hpoId: string,
  name: string
}

@Component({
  selector: 'cvc-phenotype-input-type',
  templateUrl: './phenotype-input.type.html',
  styleUrls: ['./phenotype-input.type.less'],
})
export class PhenotypeInputType extends FieldType implements OnInit, AfterViewInit, OnDestroy {
  formControl!: FormControl;

  private destroy$ = new Subject();
  private queryRef?: QueryRef<PhenotypeTypeaheadQuery, PhenotypeTypeaheadQueryVariables>

  phenotypes$?: Observable<PhenotypeTypeahead[]>

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Phenotypes',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [],
    },
  };

  constructor(
    private phenotypeTypeaheadQuery: PhenotypeTypeaheadGQL,
  ) {
    super();
  }

  ngOnInit(): void {
    this.queryRef = this.phenotypeTypeaheadQuery.watch({name: ''})

    this.phenotypes$ = this.queryRef.valueChanges
      .pipe( takeUntil(this.destroy$), pluck('data', 'phenotypeTypeahead'))
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

      this.queryRef?.refetch({name: value})
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export const PhenotypeInputTypeOption: TypeOption = {
  name: 'phenotype-input',
  component: PhenotypeInputType,
};
