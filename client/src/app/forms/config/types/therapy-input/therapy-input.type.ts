import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import {
  AddTherapyGQL,
  AddTherapyMutation,
  AddTherapyMutationVariables,
  TherapyTypeaheadGQL,
  TherapyTypeaheadQuery,
  TherapyTypeaheadQueryVariables,
} from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, map, pluck } from 'rxjs/operators';

interface TherapyTypeahead {
  id: number;
  name: string;
  ncitId?: string;
  therapyAliases: string[];
}

interface TherapyTypeaheadOption {
  value: number;
  label: string;
  tooltip: string;
  therapy: TherapyTypeahead;
}

@UntilDestroy()
@Component({
  selector: 'cvc-therapy-input-type',
  templateUrl: './therapy-input.type.html',
})
export class TherapyInputType
  extends FieldType<any>
  implements AfterViewInit, OnInit
{
  private queryRef!: QueryRef<
    TherapyTypeaheadQuery,
    TherapyTypeaheadQueryVariables
  >;
  therapies$?: Observable<TherapyTypeaheadOption[]>;

  success: boolean = false;
  errorMessages: string[] = [];
  loading: boolean = false;

  addTherapyMutator: MutatorWithState<
    AddTherapyGQL,
    AddTherapyMutation,
    AddTherapyMutationVariables
  >;

  displayAdd$ = new BehaviorSubject<boolean>(false);

  constructor(
    private therapyTypeaheadQuery: TherapyTypeaheadGQL,
    private networkErrorService: NetworkErrorsService,
    private addTherapyGQL: AddTherapyGQL
  ) {
    super();

    this.addTherapyMutator = new MutatorWithState(this.networkErrorService);

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Therapies',
        showArrow: false,
        onSearch: () => {},
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; therapy: any }>,
        searchString: '',
        allowCreate: true,
      },
    };
  }

  ngOnInit() {
    this.queryRef = this.therapyTypeaheadQuery.watch({ name: 'zzzzz' });

    this.therapies$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'therapyTypeahead'),
      filter(isNonNulled),
      map((therapies) => {
        return therapies.map((d) => {
          let ncitId = d.ncitId ? `${d.ncitId}` : 'no NCIt ID';
          let aliases =
            d.therapyAliases.length > 0
              ? `Aliases: ${d.therapyAliases.join(', ')}`
              : '';
          return {
            value: d.id,
            tooltip: `${d.name} (${ncitId}) ${aliases}`,
            label: `${d.name} (${ncitId})`,
            therapy: d,
          };
        });
      })
    );
  }

  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      if (value.length < this.to.minLengthSearch) {
        return;
      }
      this.to.searchString = value;
      this.errorMessages = [];

      this.queryRef.refetch({ name: value }).then((res) => {
        let displayAdd =
          res.data.therapyTypeahead.filter((d) => {
            return d.name.toUpperCase() == value.toUpperCase();
          }).length == 0;
        this.displayAdd$.next(displayAdd);
      });
    };
  }

  addTherapy(drugName: string): void {
    if (drugName && drugName != '') {
      let state = this.addTherapyMutator.mutate(
        this.addTherapyGQL,
        { name: drugName },
        {},

        (data) => {
          if (data.addTherapy) {
            this.field.formControl?.setValue({
              id: data.addTherapy.therapy.id,
              name: data.addTherapy.therapy.name,
            });
            this.to.searchString = '';
            this.to.searchLength = 0;
          }
        }
      );

      state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
        if (res) {
          this.success = true;
        }
      });

      state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs;
          this.success = false;
        }
      });

      state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
        this.loading = loading;
      });
    }
  }
}

export const TherapyInputTypeOption: TypeOption = {
  name: 'therapy-input',
  component: TherapyInputType,
};
