import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DiseaseTypeaheadGQL } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-disease-input',
  templateUrl: './disease-input.type.html',
  styleUrls: ['./disease-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiseaseInputComponent extends FieldType implements AfterViewInit {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Diseases',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [] as Array<{ value: string; label: string; disease: any }>,
    },
  };

  constructor(
    private diseaseTypeaheadQuery: DiseaseTypeaheadGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value;
      this.to.fieldLength = value.length;
      if (
        value.length < this.to.minLengthSearch ||
        value.length > this.to.maxLength!
      ) {
        return;
      }
      this.diseaseTypeaheadQuery
        .fetch({ name: value })
        .subscribe(({ data: { browseDiseases } }) => {
          this.to.optionList = browseDiseases.nodes.map((d) => {
            return {
              value: d.id,
              label: `${d.name} (DOID: ${d.doid})`,
              disease: d,
            };
          });
          // TODO implement this search as an observable to avoid detectChanges
          this.changeDetectorRef.detectChanges();
        });
    };
  }
}

export const DiseaseInputType = {
  name: 'disease-input',
  component: DiseaseInputComponent,
};
