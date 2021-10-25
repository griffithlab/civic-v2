import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DrugTypeaheadGQL } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';

interface DrugOption {
  id: number;
  name: string;
  ncitId: string;
}

@Component({
  selector: 'cvc-drug-input',
  templateUrl: './drug-input.type.html',
  styleUrls: ['./drug-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrugInputComponent extends FieldType implements AfterViewInit {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Drugs',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [] as Array<{ value: string; label: string; drug: any }>,
    },
  };

  constructor(
    private drugTypeaheadQuery: DrugTypeaheadGQL,
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
      this.drugTypeaheadQuery
        .fetch({ name: value })
        .subscribe(({ data: { drugs } }) => {
          this.to.optionList = drugs.nodes.map((d) => {
            return {
              value: d.id,
              label: `${d.name} (${d.ncitId})`,
              drug: d
            };
          });
          // TODO implement this search as an observable to avoid detectChanges
          this.changeDetectorRef.detectChanges();
        });
    };
  }
}

export const DrugInputType = {
  name: 'drug-input',
  component: DrugInputComponent,
  // wrappers: ['form-field'],
};
