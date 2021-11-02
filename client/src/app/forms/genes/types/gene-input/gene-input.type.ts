import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { GeneTypeaheadGQL } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-gene-input',
  templateUrl: './gene-input.type.html',
  styleUrls: ['./gene-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneInputComponent extends FieldType implements AfterViewInit {
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

  constructor(
    private geneTypeaheadQuery: GeneTypeaheadGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) { super(); }

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
      this.geneTypeaheadQuery
        .fetch({ entrezSymbol: value })
        .subscribe(({ data: { browseGenes } }) => {
          this.to.optionList = browseGenes.nodes.map((g) => {
            return {
              value: g.id,
              label: g.name,
              gene: g
            };
          });
          // TODO implement this search as an observable to avoid detectChanges
          this.changeDetectorRef.detectChanges();
        });
    };
  }
}


export const GeneInputType = {
  name: 'gene-input',
  component: GeneInputComponent,
  // wrappers: ['form-field'],
}
