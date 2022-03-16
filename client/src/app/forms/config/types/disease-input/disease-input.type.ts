import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddDiseaseGQL, AddDiseaseMutation, AddDiseaseMutationVariables, DiseaseTypeaheadGQL, DiseaseTypeaheadQuery, DiseaseTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { map, pluck, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';

interface DiseaseTypeahead {
  id: number,
  displayName: string,
  doid?: number,
  diseaseAliases: string[]
}

interface DiseaseTypeaheadOption {
  value: number,
  label: string,
  tooltip: string,
  disease: DiseaseTypeahead
}

@Component({
  selector: 'cvc-disease-input-type',
  templateUrl: './disease-input.type.html',
  styleUrls: ['./disease-input.type.less'],
})
export class DiseaseInputType extends FieldType implements AfterViewInit, OnInit, OnDestroy {
  formControl!: FormControl;
  private queryRef!: QueryRef<DiseaseTypeaheadQuery, DiseaseTypeaheadQueryVariables>
  diseases$?: Observable<DiseaseTypeaheadOption[]>

  private destroy$ = new Subject();
  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  addDiseaseMutator: MutatorWithState<AddDiseaseGQL, AddDiseaseMutation, AddDiseaseMutationVariables>

  enteredDoid: String = ""
  displayAdd$ = new BehaviorSubject<boolean>(false)

  constructor(
    private diseaseTypeaheadQuery: DiseaseTypeaheadGQL,
    private networkErrorService: NetworkErrorsService,
    private addDiseaseGQL: AddDiseaseGQL
  ) {
    super();

    this.addDiseaseMutator = new MutatorWithState(networkErrorService)

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Diseases',
        showArrow: false,
        onSearch: () => {},
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; disease: any }>,
        searchString: "",
      },
    };
  }

  ngOnInit() {
    this.queryRef = this.diseaseTypeaheadQuery.watch({ name: "zzzz"})

    this.diseases$ = this.queryRef
    .valueChanges
    .pipe(takeUntil(this.destroy$),
      pluck('data', 'diseaseTypeahead'),
      map((diseases) => {
        let diseaseInputs = diseases.map((d) => {
          let doid = d.doid ? `DOID:${d.doid}` : "no DOID"
          let aliases = d.diseaseAliases.length > 0 ? `Aliases: ${d.diseaseAliases.join(', ')}` : ""
          return {
            value: d.id,
            tooltip: `${d.displayName} (${doid}) ${aliases}`,
            label: `${d.displayName} (${doid})`,
            disease: d,
          }
        })

        return diseaseInputs
      })
    )
  }

  ngAfterViewInit(): void {
    this.to.onSearch = (value: string): void => {
      if (value.length < this.to.minLengthSearch) {
        return;
      }
      this.to.searchString = value;
      this.errorMessages = []
      this.queryRef.refetch({name: value}).then((res) => { 
        this.displayAdd$.next(res.data.diseaseTypeahead.filter(d => {
          return d.displayName.toUpperCase() == value.toUpperCase()
        }).length == 0
      )})
    };
  }

  addDisease(diseaseName: string): void  {
    if(diseaseName && diseaseName != '') {
      let doid = +this.enteredDoid
      let state = this.addDiseaseMutator.mutate(this.addDiseaseGQL, { name: diseaseName, doid: doid },
        (data) => {
          this.field.formControl?.setValue( {id: data.addDisease.disease.id, name: data.addDisease.disease.name} )
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

export const DiseaseInputTypeOption: TypeOption = {
  name: 'cvc-disease-input',
  component: DiseaseInputType,
};
