import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

import {
  BrowseVariantType,
  VariantTypeTypeaheadGQL,
} from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-variant-type-typeahead',
  templateUrl: './variant-type-typeahead.type.html',
  styleUrls: ['./variant-type-typeahead.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantTypeTypeaheadComponent extends FieldType implements AfterViewInit {
  formControl!: FormControl;
  selectedValue = null;
  nzFilterOption = () => true;

  constructor(
    private typeaheadQuery: VariantTypeTypeaheadGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search',
        showArrow: false,
        onSearch: () => { },
        filterOption: () => { },
        modelChange: () => { },
        triggerParentSubmit: () => { },
        minLengthSearch: 1,
        maxLengthSearch: 99,
        // selector component doesn't update field value until it't valid
        // storing its value and length (for various UI conditionals) here
        fieldLength: 0,
        fieldValue: '',
        optionList: [] as Array<{ value: string; label: string; vType: any }>
      },
    };

  }

  ngAfterViewInit(): void {
    // super.ngAfterViewInit(); NOTE: will be required with v6
    this.to.filterOption = () => true;
    this.to.modelChange = (e: any): void => {
      // this gets called both when a variant type is selected,
      // and when onModelUpdated() patches the form
      if (this.to.optionList.length > 0) {
        // update form model with selected type't id, name, soid
        const { vType }= this.to.optionList.find((opt: any) => opt.value === +e);
        if (vType) {
          this.form.patchValue({ soid: vType.soid, id: vType.id });
        } else {
          console.error('Could not find selected type in list?');
        }
      }
    }
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value;
      this.to.fieldLength = value.length;
      if (value.length < this.to.minLengthSearch || value.length > this.to.maxLengthSearch) { return }
      this.typeaheadQuery
        .fetch({
          name: value
        })
        .subscribe(({ data: { variantTypes } }) => {
          this.to.optionList = variantTypes.edges.map(({ node }) => {
            return { value: node?.id, label: node?.name, vType: node }
          })
          // TODO implement this search as an observable to avoid detectChanges
          this.changeDetectorRef.detectChanges();
        })
    }
  }
}

export const VariantTypeTypeaheadType = {
  name: 'variant-type-typeahead',
  component: VariantTypeTypeaheadComponent,
  // wrappers: ['form-field'],
}
