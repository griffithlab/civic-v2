import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { VariantTypeaheadGQL } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

@Component({
  selector: 'cvc-variant-input-type',
  templateUrl: './variant-input.type.html',
  styleUrls: ['./variant-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantInputType extends FieldType implements AfterViewInit {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Variants',
      showArrow: false,
      onSearch: () => { },
      minLengthSearch: 1,
      optionList: [] as Array<{ value: string; label: string; drug: any }>,
    },
  };

  constructor(
    private variantTypeaheadQuery: VariantTypeaheadGQL,
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
      this.variantTypeaheadQuery
        .fetch({ name: value })
        .subscribe(({ data: { variants } }) => {
          this.to.optionList = variants.nodes.map((g) => {
            return {
              value: g.id,
              label: g.name,
              variant: g
            };
          });
          // TODO implement this search as an observable to avoid detectChanges
          this.changeDetectorRef.detectChanges();
        });
    };
  }
}

export const variantInputTypeOption: TypeOption = {
  name: 'variant-input',
  component: VariantInputType,
}
