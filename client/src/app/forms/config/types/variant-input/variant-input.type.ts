import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { AddVariantGQL, AddVariantMutation, AddVariantMutationVariables, Maybe, VariantSelectFieldsFragment, VariantSelectQuery, VariantSelectQueryVariables, VariantTypeaheadGQL } from '@app/generated/civic.apollo';
import { FieldType, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, pluck, takeUntil } from 'rxjs/operators';

interface VariantSelectOption {
  value: number;
  label: string;
  variant: VariantSelectFieldsFragment;
}

@Component({
  selector: 'cvc-variant-input-type',
  templateUrl: './variant-input.type.html',
  styleUrls: ['./variant-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantInputType extends FieldType implements OnInit, AfterViewInit {
  formControl!: FormControl;
  private queryRef!: QueryRef< VariantSelectQuery, VariantSelectQueryVariables >;
  variants$?: Observable<VariantSelectOption[]>;

  private destroy$ = new Subject();
  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  displayAdd: boolean = false

  addVariantMutator: MutatorWithState<AddVariantGQL, AddVariantMutation, AddVariantMutationVariables>

  constructor(
    private variantTypeaheadQuery: VariantTypeaheadGQL,
    private networkErrorService: NetworkErrorsService,
    private addVariantGQL: AddVariantGQL
  ) { 
    super(); 

    this.addVariantMutator = new MutatorWithState(networkErrorService)

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Variants',
        showArrow: false,
        onSearch: () => { },
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; variant: any }>,
      },
      expressionProperties: {
        'templateOptions.geneId': (model: any, formState: any, ffc?: FormlyFieldConfig) => {
          let mainModel = ffc?.parent?.parent?.model
          if(mainModel) {
            if(mainModel.gene && mainModel.gene[0]) {
              return mainModel.gene[0].id
            }
          }
          return undefined;
        },
      }
    };
  }

  ngOnInit(): void {
    this.queryRef = this.variantTypeaheadQuery.watch({ name: 'zzzz' });
    // no need to unsubscribe variants$ as ngrxLet in the template does this automatically
    this.variants$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'variants', 'nodes'),
      map((variants: VariantSelectFieldsFragment[]): VariantSelectOption[] => {
          let variantInputs = variants.map((v: VariantSelectFieldsFragment) => {
            return {
              value: v.id,
              label: v.name,
              variant: v,
            };
          });
          
          this.displayAdd = variantInputs.filter(v => { return v.label.toUpperCase() == this.to.searchString.toUpperCase() }).length <= 0
          return variantInputs;
        }
      )
    );
  }


  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value;
      this.to.searchLength = value.length;
      if (
        value.length < this.to.minLengthSearch ||
        value.length > this.to.maxLength!
      ) {
        return;
      }
      this.to.searchString = value;
      this.queryRef.refetch({ name: value, geneId: this.to.geneId });
    };
  }

  addVariant(variantName: string): void  {
    if(variantName && variantName != '' && this.to.geneId) {
      let state = this.addVariantMutator.mutate(this.addVariantGQL, { name: variantName, geneId: this.to.geneId },
        (data) => {
          this.field.formControl?.setValue( {id: data.addVariant.variant.id, name: data.addVariant.variant.name})
          this.to.searchString = '';
          this.to.searchLength = 0;
        })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export const variantInputTypeOption: TypeOption = {
  name: 'variant-input',
  component: VariantInputType,
}
