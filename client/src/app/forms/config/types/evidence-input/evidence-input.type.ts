import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { map, takeUntil } from 'rxjs/operators';
import { pluck } from 'rxjs-etc/operators';
import { Observable, Subject } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import { TypeOption } from '@ngx-formly/core/lib/models';
import {
  EvidenceStatus,
  EvidenceTypeaheadGQL,
  EvidenceTypeaheadQuery,
  EvidenceTypeaheadQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo';

interface EvidenceTypeahead {
  id: number;
  name: string;
  status: EvidenceStatus;
}

interface EvidenceTypeaheadOption {
  value: number;
  label: string;
  eid: EvidenceTypeahead;
}

@Component({
  selector: 'cvc-evidence-input-type',
  templateUrl: './evidence-input.type.html',
})
export class EvidenceInputType
  extends FieldType<any>
  implements AfterViewInit, OnInit, OnDestroy
{
  private queryRef!: QueryRef<
    EvidenceTypeaheadQuery,
    EvidenceTypeaheadQueryVariables
  >;
  eid$?: Observable<Maybe<EvidenceTypeaheadOption>>;

  destroy$ = new Subject();

  constructor(private evidenceGQL: EvidenceTypeaheadGQL) {
    super();

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Enter Evidence',
        showArrow: false,
        onSearch: () => {},
        minLengthSearch: 1,
        optionList: [] as Array<EvidenceTypeaheadOption>,
        searchString: '',
      },
    };
  }

  ngOnInit() {
    this.queryRef = this.evidenceGQL.watch({ id: 99999999 });

    this.eid$ = this.queryRef.valueChanges.pipe(
      takeUntil(this.destroy$),
      pluck('data', 'evidenceItem'),
      map((eid) => {
        if (eid) {
          return {
            value: eid.id,
            label: eid.name,
            eid: eid,
          };
        } else {
          return undefined;
        }
      })
    );
  }

  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      if (value.length < this.to.minLengthSearch) {
        return;
      }

      let input = +value;
      if (input) {
        this.queryRef.refetch({ id: input });
      }
    };
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export const EvidenceInputTypeOption: TypeOption = {
  name: 'evidence-input',
  component: EvidenceInputType,
};
