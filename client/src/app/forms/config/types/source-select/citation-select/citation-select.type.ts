import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  Maybe,
  SourceSource,
  SourceTypeaheadFieldsFragment,
  SourceTypeaheadFieldsFragmentDoc,
  SourceTypeaheadGQL,
  SourceTypeaheadQuery,
  SourceTypeaheadQueryVariables,
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { $enum } from 'ts-enum-util';
import { SourceSelectorModel } from '../../source-input/source-selector/source-selector.form';

interface CitationSelectOption {
  value: number;
  label: string;
  source: SourceTypeaheadFieldsFragment;
}

@Component({
  selector: 'cvc-citation-select-type',
  templateUrl: './citation-select.type.html',
  styleUrls: ['./citation-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitationSelectType
  extends FieldType<any>
  implements OnInit, AfterViewInit
{
  private queryRef!: QueryRef<
    SourceTypeaheadQuery,
    SourceTypeaheadQueryVariables
  >;
  sources$?: Observable<CitationSelectOption[]>;
  onAddCitation: (e: any) => void;

  constructor(private sourceTypeaheadQuery: SourceTypeaheadGQL) {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Sources',
        onSearch: () => {},
        minSearchLength: 1,
        maxSearchLength: 15,
        searchLength: 0,
        searchValue: '',
      },
      expressionProperties: {
        'templateOptions.prompt': (
          model: SourceSelectorModel
        ): Maybe<string> => {
          const sType = $enum(SourceSource).getKeyOrThrow(model.sourceType);
          return `Search for ${sType} sources known to CIViC.`;
        },
      },
    };

    this.onAddCitation = (e: any) => {
      const parentOptions = this.field!.parent!.templateOptions!;
      // set source-select's entity info & fragment
      // so field-tag wrapper can fetch the record &
      // display the tag
      parentOptions.entityType = 'SourceStub';
      parentOptions.entityFragment = e.entityFragment;
      this.field!.formControl!.setValue(e.id);
    };
  }

  ngOnInit() {
    this.queryRef = this.sourceTypeaheadQuery.watch({
      sourceType: this.model.sourceType,
      partialCitationId: '9999999',
    });
    // NOTE: no need to unsub from sources$ as the template's
    // ngrxLet does so automatically
    this.sources$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'sourceTypeahead'),
      map((sources) => {
        return sources.map((s) => {
          return {
            value: s.id,
            label: s.citation ? s.citation : s.name,
            source: s,
          };
        });
      })
    );
  }

  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      this.to.searchLength = value.length;
      this.to.searchValue = value;
      if (
        value.length < this.to.minLengthSearch ||
        value.length > this.to.maxLength!
      ) {
        return;
      }
      this.queryRef.refetch({
        sourceType: SourceSource.Pubmed,
        partialCitationId: value,
      });
    };
  }
}
