import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  SourceSource,
  SourceTypeaheadFieldsFragment,
  SourceTypeaheadGQL,
  SourceTypeaheadQuery,
  SourceTypeaheadQueryVariables
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, pluck, takeUntil } from 'rxjs/operators';


interface CitationSelectOption {
  value: number,
  label: string,
  source: SourceTypeaheadFieldsFragment
}

@Component({
  selector: 'cvc-citation-select-type',
  templateUrl: './citation-select.type.html',
  styleUrls: ['./citation-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitationSelectType extends FieldType implements OnInit, AfterViewInit, OnDestroy {
  formControl!: FormControl;
  private queryRef!: QueryRef<SourceTypeaheadQuery, SourceTypeaheadQueryVariables>;
  private destroy$ = new Subject();
  sources$?: Observable<CitationSelectOption[]>;

  constructor(
    private sourceTypeaheadQuery: SourceTypeaheadGQL,
  ) {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search',
        onSearch: () => { },
        minLengthSearch: 1,
        maxLengthSearch: 15,
      },
    };
  }

  ngOnInit() {
    this.queryRef = this.sourceTypeaheadQuery.watch({sourceType: SourceSource.Pubmed, partialCitationId: 9999999 });

    this.sources$ = this.queryRef
      .valueChanges
      .pipe(
        takeUntil(this.destroy$),
        pluck('data', 'sourceTypeahead'),
        map((sources) => {
          return sources.map((s) => {
            return {
              value: s.citationId,
              label: s.citation,
              source: s
            }
          });
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
      this.queryRef.refetch({
        sourceType: SourceSource.Pubmed,
        partialCitationId: +value
      });
    }

    // this.to.onSearch = (value: string): void => {
    //   this.to.fieldValue = value;
    //   this.to.fieldLength = value.length;
    //   if(value.length < this.to.minLengthSearch || value.length > this.to.maxLength!) { return }
    //   this.sourceTypeaheadQuery
    //     .fetch({
    //       sourceType: this.to.sourceType,
    //       partialCitationId: +value
    //     })
    //     .subscribe(({ data: { sourceTypeahead } }) => {
    //       this.to.optionList = sourceTypeahead.map(s => {
    //         return { value: s.citationId, label: s.citationId, source: s }
    //       })
    //       // TODO implement this search as an observable to avoid detectChanges
    //       this.changeDetectorRef.detectChanges();
    //     })
    // }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
