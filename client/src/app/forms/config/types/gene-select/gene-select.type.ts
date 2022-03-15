import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  GeneTypeaheadFieldsFragment,
  GeneTypeaheadFieldsFragmentDoc,
  GeneTypeaheadGQL,
  GeneTypeaheadQuery,
  GeneTypeaheadQueryVariables
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

interface GeneTypeaheadOption {
  value: number,
  label: string,
  tooltip: string,
  gene: GeneTypeaheadFieldsFragment
}

@Component({
  selector: 'gene-select-type',
  templateUrl: './gene-select.type.html',
  styleUrls: ['./gene-select.type.less']
})
export class GeneSelectType extends FieldType implements AfterViewInit, OnDestroy, OnInit {

  private queryRef!: QueryRef<GeneTypeaheadQuery, GeneTypeaheadQueryVariables>
  formControl!: FormControl;
  genes$?: Observable<GeneTypeaheadOption[]>;

  constructor(private geneTypeaheadQuery: GeneTypeaheadGQL) {
    super();
    this.defaultOptions = {
      defaultValue: null,
      templateOptions: {
        label: 'Gene',
        placeholder: 'Search Genes',
        onSearch: () => { },
        minSearchLength: 1,
        searchLength: 0,
        searchString: '',
        entityType: 'Gene',
        entityFragment: GeneTypeaheadFieldsFragmentDoc,
      },
    };

  }

  ngOnInit(): void {
    this.queryRef = this.geneTypeaheadQuery.watch({ entrezSymbol: "ZZZZZ" })
    // no need to unsubscribe genes$ as ngrxLet in the template does this automatically
    this.genes$ = this.queryRef
      .valueChanges
      .pipe(
        pluck('data', 'geneTypeahead'),
        map((genes) => {
          return genes.map((g) => {
            let aliases = g.geneAliases.length > 0 ? `Aliases: ${g.geneAliases.join(', ')}` : ""
            return {
              value: g.id,
              tooltip: `${g.name} (${g.entrezId}) ${aliases}`,
              label: `${g.name} (${g.entrezId})`,
              gene: g,
            }
          })
        }));
  }

  ngAfterViewInit(): void {
    this.to.onSearch = (value: string): void => {
      this.to.searchLength = value.length;
      this.to.searchString = value;
      if (
        value.length < this.to.minSearchLength ||
        value.length > this.to.maxLength!
      ) {
        return;
      }
      this.queryRef.refetch({ entrezSymbol: value })
    }
  }

  ngOnDestroy() {
  }

}

