import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Maybe,
  SourceSource,
  SourceTypeaheadFieldsFragment,
  SourceTypeaheadFieldsFragmentDoc,
  SourceTypeaheadGQL,
  SourceTypeaheadQuery,
  SourceTypeaheadQueryVariables
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, pluck, takeUntil } from 'rxjs/operators';
import { $enum } from 'ts-enum-util';
import { SourceSelectorModel } from '../../source-input/source-selector/source-selector.form';


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
export class CitationSelectType extends FieldType implements OnInit, AfterViewInit {
  formControl!: FormControl;
  private queryRef!: QueryRef<SourceTypeaheadQuery, SourceTypeaheadQueryVariables>;
  sources$?: Observable<CitationSelectOption[]>;

  constructor(
    private sourceTypeaheadQuery: SourceTypeaheadGQL,
  ) {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Sources',
        onSearch: () => { },
        minSearchLength: 1,
        maxSearchLength: 15,
        searchLength: 0,
      },
      expressionProperties: {
        'templateOptions.prompt': (model: SourceSelectorModel): Maybe<string> => {
          const sType = $enum(SourceSource).getKeyOrThrow(model.sourceType);
          const article = model.sourceType === SourceSource.Pubmed ? 'a' : 'an';
          return `Enter ${article} ${sType} citation ID to search CIViC Sources.`;
        }
      }
    };
  }

  ngOnInit() {
    this.queryRef = this.sourceTypeaheadQuery.watch({
      sourceType: this.model.sourceType,
      partialCitationId: 9999999
    });
    // NOTE: no need to unsub from sources$ as the template's
    // ngrxLet does so automatically
    this.sources$ = this.queryRef
      .valueChanges
      .pipe(
        pluck('data', 'sourceTypeahead'),
        map((sources) => {
          return sources.map((s) => {
            return {
              value: s.id,
              label: s.citation,
              source: s
            }
          });
        }));
  }

  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      this.to.valueLength = value.length;
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
  }

}
