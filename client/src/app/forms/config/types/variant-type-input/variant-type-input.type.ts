import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { VariantTypeTypeaheadGQL, VariantTypeTypeaheadQuery, VariantTypeTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import {TypeOption} from "@ngx-formly/core/lib/models";

interface VariantTypeTypeahead {
  id: number,
  soid: string,
  name: string
}

@Component({
  selector: 'cvc-variant-type-input-type',
  templateUrl: './variant-type-input.type.html',
  styleUrls: ['./variant-type-input.type.less'],
})
export class VariantTypeInputType extends FieldType implements OnInit, AfterViewInit, OnDestroy {
  formControl!: FormControl;

  private destroy$ = new Subject();
  private queryRef?: QueryRef<VariantTypeTypeaheadQuery, VariantTypeTypeaheadQueryVariables>

  variantTypes$?: Observable<VariantTypeTypeahead[]>

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Variant Types',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [],
    },
  };

  constructor(
    private variantTypeTypeaheadQuery: VariantTypeTypeaheadGQL) {
    super();
  }

  ngOnInit() {
    this.queryRef = this.variantTypeTypeaheadQuery.watch({name: ''})

    this.variantTypes$ = this.queryRef.valueChanges
      .pipe( takeUntil(this.destroy$), pluck('data', 'variantTypeTypeahead'))
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

      this.queryRef?.refetch({name: value})
    };
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export const VariantTypeInputTypeOption: TypeOption = {
  name: 'variant-type-input',
  component: VariantTypeInputType,
};
