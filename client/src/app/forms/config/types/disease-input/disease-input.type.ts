import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { AddDiseaseGQL, AddDiseaseMutation, AddDiseaseMutationVariables, DiseaseTypeaheadGQL, DiseaseTypeaheadQuery, DiseaseTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from "@ngx-formly/core/lib/services/formly.config";
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, map, pluck } from 'rxjs/operators';

interface DiseaseTypeahead {
  id: number,
  displayName: string,
  doid?: string,
  diseaseAliases: string[]
}

interface DiseaseTypeaheadOption {
  value: number,
  label: string,
  tooltip: string,
  disease: DiseaseTypeahead
}

@UntilDestroy()
@Component({
  selector: 'cvc-disease-input-type',
  templateUrl: './disease-input.type.html',
  styleUrls: ['./disease-input.type.less'],
})
export class DiseaseInputType extends FieldType implements AfterViewInit, OnInit {
  formControl!: UntypedFormControl;
  private queryRef!: QueryRef<DiseaseTypeaheadQuery, DiseaseTypeaheadQueryVariables>
  diseases$?: Observable<DiseaseTypeaheadOption[]>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  addDiseaseMutator: MutatorWithState<AddDiseaseGQL, AddDiseaseMutation, AddDiseaseMutationVariables>

  enteredDoid: string = ''
  displayAdd$ = new BehaviorSubject<boolean>(false)

  constructor(
    private diseaseTypeaheadQuery: DiseaseTypeaheadGQL,
    private networkErrorService: NetworkErrorsService,
    private addDiseaseGQL: AddDiseaseGQL
  ) {
    super();

    this.addDiseaseMutator = new MutatorWithState(this.networkErrorService)

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Diseases',
        showArrow: false,
        onSearch: () => { },
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; disease: any }>,
        searchString: "",
        allowCreate: true
      },
    };
  }

  ngOnInit() {
    this.queryRef = this.diseaseTypeaheadQuery.watch({ name: "zzzz" })

    this.diseases$ = this.queryRef
      .valueChanges
      .pipe(pluck('data', 'diseaseTypeahead'),
        filter(isNonNulled),
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
        }));
  }

  ngAfterViewInit(): void {
    this.to.onSearch = (value: string): void => {
      if (value.length < this.to.minLengthSearch) {
        return;
      }
      this.to.searchString = value;
      this.errorMessages = []
      this.queryRef.refetch({ name: value }).then((res) => {
        this.displayAdd$.next(res.data.diseaseTypeahead.filter(d => {
          return d.displayName.toUpperCase() == value.toUpperCase()
        }).length == 0
        )
      })
    };
  }

  addDisease(diseaseName: string): void {
    if (diseaseName && diseaseName != '') {
      let doid = this.enteredDoid ? this.enteredDoid : undefined
      let state = this.addDiseaseMutator.mutate(this.addDiseaseGQL, { name: diseaseName, doid: doid }, {},
        (data) => {
          if(data.addDisease) {
            this.field.formControl?.setValue({ id: data.addDisease.disease.id, name: data.addDisease.disease.name })
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

export const DiseaseInputTypeOption: TypeOption = {
  name: 'cvc-disease-input',
  component: DiseaseInputType,
};
