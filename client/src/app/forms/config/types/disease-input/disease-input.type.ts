import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DiseaseTypeaheadGQL, DiseaseTypeaheadQuery, DiseaseTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { map, pluck, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

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

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Diseases',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [] as Array<{ value: string; label: string; disease: any }>,
    },
  };

  private queryRef!: QueryRef<DiseaseTypeaheadQuery, DiseaseTypeaheadQueryVariables>
  diseases$?: Observable<DiseaseTypeaheadOption[]>

  private destroy$ = new Subject();

  constructor(
    private diseaseTypeaheadQuery: DiseaseTypeaheadGQL,
  ) {
    super();
  }

  ngOnInit() {
    this.queryRef = this.diseaseTypeaheadQuery.watch({ name: ""})

    this.diseases$ = this.queryRef
    .valueChanges
    .pipe(takeUntil(this.destroy$),
      pluck('data', 'diseaseTypeahead'),
      map((diseases) => {
        return diseases.map((d) => {
          let doid = d.doid ? `DOID:${d.doid}` : "no DOID"
          let aliases = d.diseaseAliases.length > 0 ? `Aliases: ${d.diseaseAliases.join(', ')}` : ""
          return {
            value: d.id,
            tooltip: `${d.displayName} (${doid}) ${aliases}`,
            label: `${d.displayName} (${doid})`,
            disease: d,
          }
        })
      })
    )
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
      this.queryRef.refetch({name: value})
    };
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export const DiseaseInputTypeOption: TypeOption = {
  name: 'cvc-disease-input',
  component: DiseaseInputType,
};
