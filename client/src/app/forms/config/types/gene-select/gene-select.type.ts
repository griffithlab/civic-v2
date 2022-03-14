import {
  AfterViewInit,
  Component,
  ContentChild,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { GeneTypeaheadFieldsFragment, GeneTypeaheadFieldsFragmentDoc, GeneTypeaheadGQL, GeneTypeaheadQuery, GeneTypeaheadQueryVariables, Maybe } from '@app/generated/civic.apollo';
import { FieldType, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { Observable, Subject } from 'rxjs';
import { map, pluck, takeUntil } from 'rxjs/operators';

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

  @ContentChild(NzSelectComponent, { read: TemplateRef }) tagTemplateRef: any;

  private queryRef!: QueryRef<GeneTypeaheadQuery, GeneTypeaheadQueryVariables>
  private destroy$ = new Subject();
  formControl!: FormControl;
  genes$?: Observable<GeneTypeaheadOption[]>;

  constructor(private geneTypeaheadQuery: GeneTypeaheadGQL) {
    super();
    this.defaultOptions = {
      defaultValue: null,
      templateOptions: {
        label: 'Gene',
        placeholder: 'None specified',
        showTag: true,
        onSearch: () => { },
        minLengthSearch: 1,
        entityType: 'Gene',
        entityFragment: GeneTypeaheadFieldsFragmentDoc
      },
    };

  }

  ngOnInit() {
    this.queryRef = this.geneTypeaheadQuery.watch({ entrezSymbol: "" })

    this.genes$ = this.queryRef
      .valueChanges
      .pipe(
        takeUntil(this.destroy$),
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
      this.queryRef.refetch({ entrezSymbol: value })
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

