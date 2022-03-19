import {
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  GeneTypeaheadFieldsFragment,
  GeneTypeaheadGQL,
  GeneTypeaheadQuery,
  GeneTypeaheadQueryVariables
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { defer, from, iif, Observable, ObservableInput, of, Subject } from 'rxjs';
import {
  map,
  mergeMap,
  pluck,
  switchMap,
  tap,
} from 'rxjs/operators';

interface GeneTypeaheadOption {
  value: number,
  label: string,
  tooltip: string,
  gene: GeneTypeaheadFieldsFragment
}

type QueryResult = ApolloQueryResult<GeneTypeaheadQuery>;

@Component({
  selector: 'cvc-gene-input',
  templateUrl: './gene-input.type.html',
  styleUrls: ['./gene-input.type.less'],
})
export class GeneInputType extends FieldType {
  formControl!: FormControl;

  private queryRef!: QueryRef<GeneTypeaheadQuery, GeneTypeaheadQueryVariables>
  geneOpts$?: Observable<GeneTypeaheadOption[]>
  onSearch$ = new Subject<string>();

  constructor(private geneTypeaheadQuery: GeneTypeaheadGQL,) {
    super();

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Genes',
        onSearch: () => { },
        searchString: '',
        minLengthSearch: 1,
      },
    };


    // return watch observable
    const watchQuery = (str: string): ObservableInput<QueryResult> => {
      this.queryRef = this.geneTypeaheadQuery.watch({ entrezSymbol: str });
      return this.queryRef.valueChanges;
    }

    // return refetch promise as an observable
    const fetchQuery = (str: string): ObservableInput<QueryResult> => {
      return from(this.queryRef.refetch({ entrezSymbol: str }));
    }

    this.geneOpts$ = this.onSearch$
      .pipe(
        tap((str) => { this.to.searchString = str; }),
        // return watch query observable if queryRef doesn't exist,
        // return refetch query observable if it does
        switchMap((str: string): Observable<QueryResult> => {
          return iif(
            () => { return this.queryRef === undefined; },
            defer(() => watchQuery(str)),
            defer(() => fetchQuery(str)),
          )
        }),
        pluck('data', 'geneTypeahead'),
        map((genes: GeneTypeaheadFieldsFragment[]) => {
          return genes.map((g) => {
            let aliases = g.geneAliases.length > 0 ? `Aliases: ${g.geneAliases.join(', ')}` : ""
            return {
              value: g.id,
              tooltip: `${g.name} (${g.entrezId}) ${aliases}`,
              label: `${g.name} (${g.entrezId})`,
              gene: g,
            }
          })
        })
      )
  }
}

