import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddDrugGQL, AddDrugMutation, AddDrugMutationVariables, DrugTypeaheadGQL, DrugTypeaheadQuery, DrugTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { map, pluck, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';

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


  private queryRef!: QueryRef<DrugTypeaheadQuery, DrugTypeaheadQueryVariables>
  drugs$?: Observable<DrugTypeaheadOption[]>

  private destroy$ = new Subject();
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

    this.addDrugMutator = new MutatorWithState(networkErrorService);

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Drugs',
        showArrow: false,
        onSearch: () => {},
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; drug: any }>,
        searchString: "",
      },
    };
  }

  ngOnInit() {
    this.queryRef = this.drugTypeaheadQuery.watch({ name: "zzzzz"})

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
      if (value.length < this.to.minLengthSearch)  {
        return;
      }
      this.to.searchString = value;
      this.errorMessages = []

      this.queryRef.refetch({name: value}).then((res) => {
        let displayAdd = res.data.drugTypeahead.filter(d => {
          return d.name.toUpperCase() == value.toUpperCase();
        }).length == 0
        this.displayAdd$.next(displayAdd);
      })
    };
  }

  addDrug(drugName: string): void  {
    if(drugName && drugName != '') {
      let state = this.addDrugMutator.mutate(this.addDrugGQL, { name: drugName },

        (data) => {
          this.field.formControl?.setValue( {id: data.addDrug.drug.id, name: data.addDrug.drug.name} )
          this.to.searchString = '';
          this.to.searchLength = 0;
        })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.displayAdd$.complete();
  }
}

export const DrugInputTypeOption: TypeOption = {
  name: 'drug-input',
  component: DrugInputType,
};
