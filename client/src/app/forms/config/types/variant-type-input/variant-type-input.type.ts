import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
// import { UntypedFormControl } from '@angular/forms';
import {
  VariantTypeTypeaheadGQL,
  VariantTypeTypeaheadQuery,
  VariantTypeTypeaheadQueryVariables,
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, map } from 'rxjs/operators';

interface VariantTypeTypeahead {
  id: number;
  soid: string;
  name: string;
}

@Component({
  selector: 'cvc-variant-type-input-type',
  templateUrl: './variant-type-input.type.html',
  styleUrls: ['./variant-type-input.type.less'],
})
export class VariantTypeInputType
  extends FieldType<any>
  implements OnInit, AfterViewInit
{
  private queryRef?: QueryRef<
    VariantTypeTypeaheadQuery,
    VariantTypeTypeaheadQueryVariables
  >;

  variantTypes$?: Observable<VariantTypeTypeahead[]>;

  defaultOptions = {
    templateOptions: {
      placeholder: 'Search Variant Types',
      showArrow: false,
      onSearch: () => {},
      minLengthSearch: 1,
      optionList: [],
    },
  };

  constructor(private variantTypeTypeaheadQuery: VariantTypeTypeaheadGQL) {
    super();
  }

  ngOnInit() {
    this.queryRef = this.variantTypeTypeaheadQuery.watch({ name: '' });

    this.variantTypes$ = this.queryRef.valueChanges.pipe(
      map((r) => r.data?.variantTypeTypeahead),
      filter(isNonNulled)
    );
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

      this.queryRef?.refetch({ name: value });
    };
  }
}

export const VariantTypeInputTypeOption: TypeOption = {
  name: 'variant-type-input',
  component: VariantTypeInputType,
};
