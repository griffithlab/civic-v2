import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PhenotypeTypeaheadGQL } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-phenotype-input',
  templateUrl: './phenotype-input.type.html',
  styleUrls: ['./phenotype-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhenotypeInputComponent extends FieldType implements AfterViewInit {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Phenotypes',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [] as Array<{ value: string; label: string; drug: any }>,
    },
  };

  constructor(
    private phenotypeTypeaheadQuery: PhenotypeTypeaheadGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
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
      this.phenotypeTypeaheadQuery
        .fetch({ name: value })
        .subscribe(({ data: { phenotypes } }) => {
          this.to.optionList = phenotypes.nodes.map((p) => {
            return {
              value: p.id,
              label: p.name,
              phenotype: p
            };
          });
          // TODO implement this search as an observable to avoid detectChanges
          this.changeDetectorRef.detectChanges();
        });
    };
  }
}

export const PhenotypeInputType = {
  name: 'phenotype-input',
  component: PhenotypeInputComponent,
};
