import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  GeneTypeaheadFieldsFragment,
  GeneTypeaheadGQL,
  GeneTypeaheadQuery,
  GeneTypeaheadQueryVariables,
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { isNonNulled } from 'rxjs-etc';
import { UntilDestroy } from '@ngneat/until-destroy';

interface GeneTypeaheadOption {
  value: number;
  label: string;
  tooltip: string;
  gene: GeneTypeaheadFieldsFragment;
}
@UntilDestroy()
@Component({
  selector: 'cvc-gene-input',
  templateUrl: './gene-input.type.html',
})
export class GeneInputType
  extends FieldType<any>
  implements AfterViewInit, OnInit
{
  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Genes',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [] as Array<{ value: string; label: string; therapy: any }>,
    },
  };

  private queryRef!: QueryRef<GeneTypeaheadQuery, GeneTypeaheadQueryVariables>;
  genes$?: Observable<GeneTypeaheadOption[]>;

  constructor(private geneTypeaheadQuery: GeneTypeaheadGQL) {
    super();
  }

  ngOnInit() {
    this.queryRef = this.geneTypeaheadQuery.watch({ entrezSymbol: '' });

    this.genes$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'geneTypeahead'),
      filter(isNonNulled),
      map((genes) => {
        return genes.map((g) => {
          let aliases =
            g.geneAliases.length > 0
              ? `Aliases: ${g.geneAliases.join(', ')}`
              : '';
          return {
            value: g.id,
            tooltip: `${g.name} (${g.entrezId}) ${aliases}`,
            label: `${g.name} (${g.entrezId})`,
            gene: g,
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
      this.queryRef.refetch({ entrezSymbol: value });
    };
  }
}

export const GeneInputTypeOption: TypeOption = {
  name: 'cvc-gene-input',
  component: GeneInputType,
};
