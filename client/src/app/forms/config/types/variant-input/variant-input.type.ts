import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { AddVariantGQL, AddVariantMutation, AddVariantMutationVariables, VariantSelectFieldsFragment, VariantSelectQuery, VariantSelectQueryVariables, VariantTypeaheadGQL } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, map, pluck, skip } from 'rxjs/operators';

interface VariantSelectOption {
  value: number;
  label: string;
  variant: VariantSelectFieldsFragment;
}

@UntilDestroy()
@Component({
  selector: 'cvc-variant-input-type',
  templateUrl: './variant-input.type.html',
  styleUrls: ['./variant-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantInputType extends FieldType implements OnInit, AfterViewInit, OnDestroy {
  @Output() onVariantSelected = new EventEmitter<number>();
  callbackSub?: Subscription

  formControl!: FormControl;
  private queryRef!: QueryRef<VariantSelectQuery, VariantSelectQueryVariables>;
  variants$?: Observable<VariantSelectOption[]>;

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  addVariantMutator: MutatorWithState<AddVariantGQL, AddVariantMutation, AddVariantMutationVariables>

  displayAdd$ = new BehaviorSubject<boolean>(false)

  selectedVariant?: VariantSelectFieldsFragment

  constructor(
    private variantTypeaheadQuery: VariantTypeaheadGQL,
    private networkErrorService: NetworkErrorsService,
    private addVariantGQL: AddVariantGQL
  ) {
    super();

    this.addVariantMutator = new MutatorWithState(this.networkErrorService)

    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search Variants',
        showArrow: false,
        onSearch: () => { },
        minLengthSearch: 1,
        optionList: [] as Array<{ value: string; label: string; variant: any }>,
        allowCreate: true
      },
      expressionProperties: {
        'templateOptions.geneId': (model: any, formState: any, ffc?: FormlyFieldConfig) => {
          let mainModel = ffc?.parent?.parent?.model
          if (mainModel) {
            if (mainModel.gene && mainModel.gene[0]) {
              return mainModel.gene[0].id
            }
          }
          return undefined;
        },
      }
    };
  }

  ngOnInit(): void {
    this.callbackSub = this.field?.formControl?.valueChanges.subscribe((v) => this.onVariantSelected.emit(v.id))

    this.queryRef = this.variantTypeaheadQuery.watch({ name: 'a', geneId: this.to.geneId });
    // no need to unsubscribe variants$ as ngrxLet in the template does this automatically
    this.variants$ = this.queryRef
      .valueChanges
      .pipe(
        skip(1),
        pluck('data', 'variants', 'nodes'),
        filter(isNonNulled),
        map((variants: VariantSelectFieldsFragment[]): VariantSelectOption[] => {
          let variantInputs = variants.map((v: VariantSelectFieldsFragment) => {
            return {
              value: v.id,
              label: v.name,
              variant: v,
            };
          });

          return variantInputs;
        }));
  }

  ngAfterViewInit() {
    this.to.onSearch = (value: string): void => {
      if (value.length < this.to.minLengthSearch) {
        return;
      }
      this.to.searchString = value;
      this.errorMessages = []
      this.queryRef.refetch({ name: value, geneId: this.to.geneId }).then((res) => {
        this.displayAdd$.next(res.data.variants.nodes.filter(d => {
          return d.name.toUpperCase() == value.toUpperCase()
        }).length == 0
        )
      })
    };
  }

  addVariant(variantName: string): void {
    if (variantName && variantName != '' && this.to.geneId) {
      let state = this.addVariantMutator.mutate(this.addVariantGQL, { name: variantName, geneId: this.to.geneId }, {},
        (data) => {
          this.field.formControl?.setValue({ id: data.addVariant.variant.id, name: data.addVariant.variant.name })
          this.to.searchString = '';
          this.to.searchLength = 0;
        })

      state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
        if (res) {
          this.success = true
        }
      })

      state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  ngOnDestroy(): void {
    this.callbackSub?.unsubscribe();
  }
}

export const variantInputTypeOption: TypeOption = {
  name: 'variant-input',
  component: VariantInputType,
}
