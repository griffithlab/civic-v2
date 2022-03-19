import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import {
  AddVariantFieldsFragmentDoc,
  AddVariantGQL,
  AddVariantMutation,
  AddVariantMutationVariables,
  Maybe,
  VariantSelectFieldsFragment,
  VariantSelectFieldsFragmentDoc,
  VariantSelectGQL,
  VariantSelectQuery,
  VariantSelectQueryVariables,
} from '@app/generated/civic.apollo';
import {
  FieldType,
  FormlyFieldConfig,
  FormlyTemplateOptions,
} from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { pluck, map, takeUntil } from 'rxjs/operators';

interface VariantSelectOption {
  value: number;
  label: string;
  variant: VariantSelectFieldsFragment;
}

@Component({
  selector: 'cvc-variant-select-type',
  templateUrl: './variant-select.type.html',
  styleUrls: ['./variant-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantSelectType extends FieldType implements OnInit, AfterViewInit, OnDestroy {
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
    private variantTypeaheadQuery: VariantSelectGQL,
    private networkErrorService: NetworkErrorsService,
    private addVariantGqL: AddVariantGQL
    ) {
    super();

    this.addVariantMutator = new MutatorWithState(networkErrorService);

    this.defaultOptions = {
      defaultValue: undefined,
      templateOptions: {
        label: 'Variant',
        placeholder: 'Search Variants',
        onSearch: () => {},
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; variant: any }>,
        searchLength: 0,
        searchString: '',
        entityType: 'Variant',
        entityFragment: VariantSelectFieldsFragmentDoc,
      },
      hideExpression: (m: any, st: any, ff?: FormlyFieldConfig) => {
        return !m.gene;
      },
      hooks: {
        onInit: (ffc?: FormlyFieldConfig): void => {
          const to: Maybe<FormlyTemplateOptions> = ffc?.templateOptions;
          const geneCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('gene') : null; 
          if (!geneCtrl) { return; }
          if (!to) { return; }

          to.geneSub = geneCtrl.valueChanges.subscribe((g) => {
            if(g) {
              to.geneId = g.id;
            }
          });
        },
        onDestroy: (ffc?: FormlyFieldConfig): void => {
          const to: Maybe<FormlyTemplateOptions> = ffc?.templateOptions;
          if (to) {
            to.geneSub.unsubscribe();
          }
        },
      },
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

  ngAfterViewInit(): void {
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
      let state = this.addVariantMutator.mutate(this.addVariantGqL, { name: variantName, geneId: this.to.geneId },
        (data) => {
          const parentOptions = this.field.parent?.templateOptions
          if(parentOptions) {
            parentOptions.entityType = 'LinkableVariant'
            parentOptions.entityFragment = AddVariantFieldsFragmentDoc
          }
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
