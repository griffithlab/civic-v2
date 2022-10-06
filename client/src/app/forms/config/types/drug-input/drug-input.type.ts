import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { AddDrugGQL, AddDrugMutation, AddDrugMutationVariables, DrugTypeaheadGQL, DrugTypeaheadQuery, DrugTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from "@ngx-formly/core/lib/services/formly.config";
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, map, pluck, takeUntil } from 'rxjs/operators';

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

@UntilDestroy()
@Component({
  selector: 'cvc-drug-input-type',
  templateUrl: './drug-input.type.html',
  styleUrls: ['./drug-input.type.less'],
})
export class DrugInputType extends FieldType implements AfterViewInit, OnInit {
  formControl!: FormControl;

  private queryRef!: QueryRef<DrugTypeaheadQuery, DrugTypeaheadQueryVariables>
  drugs$?: Observable<DrugTypeaheadOption[]>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  addDrugMutator: MutatorWithState<AddDrugGQL, AddDrugMutation, AddDrugMutationVariables>

  displayAdd$ = new BehaviorSubject<boolean>(false)

  constructor(
    private drugTypeaheadQuery: DrugTypeaheadGQL,
    private networkErrorService: NetworkErrorsService,
    private addDrugGQL: AddDrugGQL
  ) {
    super();

    this.addDrugMutator = new MutatorWithState(this.networkErrorService);

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Drugs',
        showArrow: false,
        onSearch: () => { },
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; drug: any }>,
        searchString: "",
        allowCreate: true
      },
    };
  }

  ngOnInit() {
    this.queryRef = this.drugTypeaheadQuery.watch({ name: "zzzzz" })

    this.drugs$ = this.queryRef
      .valueChanges
      .pipe(pluck('data', 'drugTypeahead'),
        filter(isNonNulled),
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
        }));
  }

  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      if (value.length < this.to.minLengthSearch) {
        return;
      }
      this.to.searchString = value;
      this.errorMessages = []

      this.queryRef.refetch({ name: value }).then((res) => {
        let displayAdd = res.data.drugTypeahead.filter(d => {
          return d.name.toUpperCase() == value.toUpperCase();
        }).length == 0
        this.displayAdd$.next(displayAdd);
      })
    };
  }

  addDrug(drugName: string): void {
    if (drugName && drugName != '') {
      let state = this.addDrugMutator.mutate(this.addDrugGQL, { name: drugName }, {},

        (data) => {
          if(data.addDrug) {
            this.field.formControl?.setValue({ id: data.addDrug.drug.id, name: data.addDrug.drug.name })
            this.to.searchString = '';
            this.to.searchLength = 0;
          }
        })

      state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
        if (res) {
          this.success = true
        }
      })

      state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }
}

export const DrugInputTypeOption: TypeOption = {
  name: 'drug-input',
  component: DrugInputType,
};
