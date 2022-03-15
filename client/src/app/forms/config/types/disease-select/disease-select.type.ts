import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DiseaseSelectFieldsFragment,
  DiseaseSelectFieldsFragmentDoc,
  DiseaseSelectGQL,
  DiseaseSelectQuery,
  DiseaseSelectQueryVariables
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { map, pluck, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { QueryRef } from 'apollo-angular';

interface DiseaseSelectOption {
  value: number,
  label: string,
  tooltip: string,
  disease: DiseaseSelectFieldsFragment
}

@Component({
  selector: 'cvc-disease-select-type',
  templateUrl: './disease-select.type.html',
  styleUrls: ['./disease-select.type.less'],
})
export class DiseaseSelectType extends FieldType implements AfterViewInit, OnInit, OnDestroy {
  formControl!: FormControl;

  private queryRef!: QueryRef<DiseaseSelectQuery, DiseaseSelectQueryVariables>
  diseases$?: Observable<DiseaseSelectOption[]>

  constructor(
    private diseaseTypeaheadQuery: DiseaseSelectGQL,
  ) {
    super();

    this.defaultOptions = {
      templateOptions: {
        label: 'Disease',
        placeholder: 'Search Diseases',
        showArrow: false,
        onSearch: () => { },
        minLengthSearch: 1,
        searchLength: 0,
        entityType: 'Disease',
        entityFragment: DiseaseSelectFieldsFragmentDoc
      },
    };
  }

  ngOnInit() {
    this.queryRef = this.diseaseTypeaheadQuery.watch({ name: "" })

    // no need to unsubscribe diseases$ as ngrxLet in the template does this automatically
    this.diseases$ = this.queryRef
      .valueChanges
      .pipe(
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
      this.to.searchLength = value.length;
      this.to.searchString = value;
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
