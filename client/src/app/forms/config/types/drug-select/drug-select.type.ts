import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DrugSelectFieldsFragment,
  DrugSelectFieldsFragmentDoc,
  DrugSelectGQL,
  DrugSelectQuery,
  DrugSelectQueryVariables
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { map, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QueryRef } from 'apollo-angular';

interface DrugSelectOption {
  value: number,
  label: string,
  tooltip: string,
  drug: DrugSelectFieldsFragment
}

@Component({
  selector: 'cvc-drug-select-type',
  templateUrl: './drug-select.type.html',
  styleUrls: ['./drug-select.type.less'],
})
export class DrugSelectType extends FieldType implements AfterViewInit, OnInit, OnDestroy {
  formControl!: FormControl;

  private queryRef!: QueryRef<DrugSelectQuery, DrugSelectQueryVariables>
  drugs$?: Observable<DrugSelectOption[]>


  constructor(
    private drugTypeaheadQuery: DrugSelectGQL,
  ) {
    super();
    this.defaultOptions = {
      templateOptions: {
        label: 'Drug',
        placeholder: 'Search Drugs',
        showArrow: false,
        onSearch: () => { },
        minLengthSearch: 1,
        searchLength: 0,
        searchString: '',
        entityType: 'Drug',
        entityFragment: DrugSelectFieldsFragmentDoc
      },
    };

  }

  ngOnInit() {
    this.queryRef = this.drugTypeaheadQuery.watch({ name: "" })

    this.drugs$ = this.queryRef
      .valueChanges
      .pipe(
        pluck('data', 'drugTypeahead'),
        map((drugs) => {
          return drugs.map((d) => {
            let ncitId = d.ncitId ? `${d.ncitId}` : "no NCIt ID"
            let aliases = d.drugAliases.length > 0 ? `Aliases: ${d.drugAliases.join(', ')}` : ""
            return {
              value: d.id,
              tooltip: `${d.name} (${ncitId}) ${aliases}`,
              label: `${d.name} (${ncitId})`,
              drug: d,
            }
          })
        })
      )
  }

  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value;
      this.to.fieldLength = value.length;
      if (
        value.length < this.to.minLengthSearch ||
        value.length > this.to.maxLength!
      ) {
        return;
      }
      this.queryRef.refetch({ name: value })
    };
  }

  ngOnDestroy() {
  }
}
