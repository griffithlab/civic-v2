import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Variant,
  VariantConnection,
  VariantTypeaheadFieldsFragment,
  VariantTypeaheadFieldsFragmentDoc,
  VariantTypeaheadGQL,
  VariantTypeaheadQuery,
  VariantTypeaheadQueryVariables
} from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

interface VariantTypeaheadOption {
  value: number,
  label: string,
  variant: VariantTypeaheadFieldsFragment
}

@Component({
  selector: 'cvc-variant-select-type',
  templateUrl: './variant-select.type.html',
  styleUrls: ['./variant-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantSelectType extends FieldType implements OnInit, AfterViewInit {
  formControl!: FormControl;
  private queryRef!: QueryRef<VariantTypeaheadQuery, VariantTypeaheadQueryVariables>
  variants$?: Observable<VariantTypeaheadOption[]>;

  constructor(
    private variantTypeaheadQuery: VariantTypeaheadGQL,
  ) {
    super();

    this.defaultOptions = {
      templateOptions: {
        label: 'Variant',
        placeholder: 'Search Variants',
        onSearch: () => { },
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; drug: any }>,
        searchLength: 0,
        searchString: '',
        entityType: 'Variant',
        entityFragment: VariantTypeaheadFieldsFragmentDoc,
      },
    };
  }

  ngOnInit(): void {
    this.queryRef = this.variantTypeaheadQuery.watch({ name: "zzzz" })
    // no need to unsubscribe variants$ as ngrxLet in the template does this automatically
    this.variants$ = this.queryRef
      .valueChanges
      .pipe(
        pluck('data', 'variants', 'nodes'),
        // TODO: type this map function properly, variants: Variant[] didn't work
        map((variants: any[]): VariantTypeaheadOption[] => {
          return variants.map((v: Variant) => {
            return {
              value: v.id,
              label: `${v.name}`,
              variant: v,
            }
          })
        }));
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
      this.queryRef.refetch({ name: value });
    };
  }
}
