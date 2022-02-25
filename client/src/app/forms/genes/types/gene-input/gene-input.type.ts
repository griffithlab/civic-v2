import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { GeneTypeaheadFieldsFragment, GeneTypeaheadGQL, GeneTypeaheadQuery, GeneTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, pluck, takeUntil } from 'rxjs/operators';

interface GeneTypeaheadOption {
  value: number,
  label: string,
  tooltip: string,
  gene: GeneTypeaheadFieldsFragment
}

@Component({
  selector: 'cvc-gene-input',
  templateUrl: './gene-input.type.html',
  styleUrls: ['./gene-input.type.less'],
})
export class GeneInputType extends FieldType implements AfterViewInit, OnDestroy, OnInit {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Genes',
      showArrow: false,
      onSearch: () => { },
      minLengthSearch: 1,
      optionList: [] as Array<{ value: string; label: string; drug: any }>,
    },
  };

  private queryRef!: QueryRef<GeneTypeaheadQuery, GeneTypeaheadQueryVariables>
  genes$?: Observable<GeneTypeaheadOption[]>

  private destroy$ = new Subject();

  constructor(
    private geneTypeaheadQuery: GeneTypeaheadGQL,
  ) { super(); }

  ngOnInit() {
    this.queryRef = this.geneTypeaheadQuery.watch({ entrezSymbol: ""})

    this.genes$ = this.queryRef
    .valueChanges
    .pipe(takeUntil(this.destroy$),
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
      })
    )
  }

  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value;
      this.to.fieldLength = value.length;
      if (
        value.length < this.to.minLengthSearch ||
        value.length > this.to.maxLength!
      ) {
        return;
      }
      this.queryRef.refetch({entrezSymbol: value})
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

export const GeneInputTypeOption = {
  name: 'cvc-gene-input',
  component: GeneInputType,
  // wrappers: ['form-field'],
}
