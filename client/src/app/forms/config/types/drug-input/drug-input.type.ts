import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DrugTypeaheadGQL, DrugTypeaheadQuery, DrugTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { map, pluck, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

interface DrugTypeahead {
  id: number,
  name: string,
  ncitId?: string,
  drugAliases: string[]
}

interface DrugTypeaheadOption {
  value: number,
  label: string,
  tooltip: string,
  drug: DrugTypeahead
}

@Component({
  selector: 'cvc-drug-input-type',
  templateUrl: './drug-input.type.html',
  styleUrls: ['./drug-input.type.less'],
})
export class DrugInputType extends FieldType implements AfterViewInit, OnInit, OnDestroy {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Drugs',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [] as Array<{ value: string; label: string; drug: any }>,
    },
  };

  private queryRef!: QueryRef<DrugTypeaheadQuery, DrugTypeaheadQueryVariables>
  drugs$?: Observable<DrugTypeaheadOption[]>

  private destroy$ = new Subject();

  constructor(
    private drugTypeaheadQuery: DrugTypeaheadGQL,
  ) {
    super();
  }

  ngOnInit() {
    this.queryRef = this.drugTypeaheadQuery.watch({ name: ""})

    this.drugs$ = this.queryRef
    .valueChanges
    .pipe(takeUntil(this.destroy$),
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
      this.queryRef.refetch({name: value})
    };
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export const DrugInputTypeOption: TypeOption = {
  name: 'cvc-drug-input',
  component: DrugInputType,
};
