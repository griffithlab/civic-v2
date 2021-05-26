import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

import {
  Maybe,
  Source,
  SourceSource,
  CitationExistenceCheckGQL,
  CitationTypeaheadGQL,
  SourceTypeaheadResultFragment
} from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-typeahead-selector',
  templateUrl: './typeahead-selector.component.html',
  styleUrls: ['./typeahead-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeaheadSelectorComponent extends FieldType implements AfterViewInit {
  formControl!: FormControl;
  selectedValue = null;
  nzFilterOption = () => true;

  constructor(
    private httpClient: HttpClient,
    private sourceTypeaheadQuery: CitationTypeaheadGQL
  ) {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search',
        sourceType: undefined,
        showArrow: false,
        onSearch: () => { },
        filterOption: () => { },
        modelChange: () => { },
        minLengthSearch: 1,
        fieldLength: 0,
        optionList: [] as Array<{ value: string; label: string; source: any}>
      },
    };
  }

  ngAfterViewInit() {
    // super.ngAfterViewInit();
    this.to.filterOption = () => true;
    this.to.modelChange = (e: any): void => {
      // update form model with selected source's id & citation
      const { source }= this.to.optionList.find((opt: any) => opt.value === +e);
      this.form.patchValue({ citation: source.citation, id: source.id });
    }
    this.to.onSearch = (value: string): void => {
      this.to.fieldLength = value.length;
      if(value.length < this.to.minLengthSearch) { return }
      this.sourceTypeaheadQuery
        .fetch({
          sourceType: this.to.sourceType,
          partialCitationId: +value
        })
        .subscribe(({ data: { sourceTypeahead } }) => {
          this.to.optionList = sourceTypeahead.map(s => {
            return { value: s.citationId, label: s.citationId, source: s }
          })
        })
    }
  }
}

export const TypeaheadSelectorType = {
  name: 'typeahead-selector',
  component: TypeaheadSelectorComponent,
  wrappers: ['form-field'],
}
