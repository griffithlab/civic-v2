import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { Subject, Observable } from 'rxjs';

import {
  PreviewMpNameFragment,
  PreviewMolecularProfileNameGQL,
  PreviewMolecularProfileNameQueryVariables,
  PreviewMolecularProfileNameQuery,
  QuicksearchGQL,
  QuicksearchQuery,
  QuicksearchQueryVariables,
  CreateMolecularProfileGQL,
  CreateMolecularProfileMutation,
  CreateMolecularProfileMutationVariables,
  Maybe,
} from '@app/generated/civic.apollo';

import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { map, takeUntil, debounceTime, filter } from 'rxjs/operators';
import { pluck } from 'rxjs-etc/operators';
import { QueryRef } from 'apollo-angular';
import { parseMolecularProfile } from '@app/core/utilities/molecular-profile-parser';
import { isNonNulled } from 'rxjs-etc';
import { SelectedVariant } from '../variant-submit/variant-submit.form';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { LinkableMolecularProfile } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormMolecularProfile } from '../forms.interfaces';
import { LinkableVariantType } from '@app/components/variant-types/variant-type-tag/variant-type-tag.component';

interface WithDisplayNameAndValue {
  displayName: string;
  value: string;
}

@Component({
  selector: 'cvc-complex-molecular-profile-input-form',
  templateUrl: './complex-molecular-profile-input.form.html',
  styleUrls: ['./complex-molecular-profile-input.form.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CvcComplexMolecularProfileInputForm implements OnDestroy, OnInit {
  @Input() formConfig?: FormlyFieldConfig;
  @Input() allowCreate: boolean = true;
  @Output() onMolecularProfileSelected =
    new EventEmitter<FormMolecularProfile>();

  private destroy$ = new Subject<void>();
  private debouncedPreview = new Subject<void>();

  previewQueryRef?: QueryRef<
    PreviewMolecularProfileNameQuery,
    PreviewMolecularProfileNameQueryVariables
  >;
  typeaheadQueryRef?: QueryRef<QuicksearchQuery, QuicksearchQueryVariables>;

  previewMpName$?: Observable<PreviewMpNameFragment[]>;
  previewMpAlreadyExists$?: Observable<Maybe<LinkableMolecularProfile>>;
  previewDeprecatedVariants$?: Observable<LinkableVariantType[]>;

  suggestions: WithDisplayNameAndValue[] = [];
  loading: boolean = false;
  errorMessages: string[] = [];

  mpName?: string;

  createMolecularProfileMutator: MutatorWithState<
    CreateMolecularProfileGQL,
    CreateMolecularProfileMutation,
    CreateMolecularProfileMutationVariables
  >;

  selectedMp?: LinkableMolecularProfile;

  parseError?: string;
  displayPreview: boolean = false;

  variantFinderVisible: boolean = false;

  @ViewChild('mpInputField') mpInputField?: ElementRef;

  constructor(
    private previewMpGql: PreviewMolecularProfileNameGQL,
    private quicksearchGql: QuicksearchGQL,
    private createMolecularProfileGql: CreateMolecularProfileGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.createMolecularProfileMutator = new MutatorWithState(
      networkErrorService
    );
  }

  ngOnInit(): void {
    this.previewQueryRef = this.previewMpGql.watch({});
    /*     this.typeaheadQueryRef = this.quicksearchGql.watch({
      query: 'ZZZZ',
      types: [SearchableEntities.Variant]
    }) */

    this.previewMpName$ = this.previewQueryRef.valueChanges.pipe(
      pluck('data', 'previewMolecularProfileName'),
      filter(isNonNulled),
      map((data) => data.segments),
      takeUntil(this.destroy$)
    );

    this.previewMpAlreadyExists$ = this.previewQueryRef.valueChanges.pipe(
      pluck('data', 'previewMolecularProfileName'),
      filter(isNonNulled),
      map((data) => data.existingMolecularProfile),
      takeUntil(this.destroy$)
    );

    this.previewDeprecatedVariants$ = this.previewQueryRef.valueChanges.pipe(
      pluck('data', 'previewMolecularProfileName'),
      filter(isNonNulled),
      map((data) => data.deprecatedVariants),
      takeUntil(this.destroy$)
    );

    if (this.formConfig?.formControl?.value) {
      this.selectedMp = this.formConfig?.formControl?.value;
      this.displayPreview = true;
      this.cdr.detectChanges();
    }

    /*     this.typeaheadQueryRef.valueChanges.pipe(
      pluck('data'),
      filter(isNonNulled),
      pluck('search'),
      filter(isNonNulled),
      map((search) => search.map(res => {return {displayName: res.name, value: `VID${res.id}`}})),
      takeUntil(this.destroy$)
    ).subscribe((res) => this.suggestions = res)
    
    this.typeaheadQueryRef.valueChanges.pipe(
      pluck('loading'),
      filter(isNonNulled),
      takeUntil(this.destroy$)
    ).subscribe((loading) => this.loading = loading) */

    this.debouncedPreview
      .pipe(takeUntil(this.destroy$), debounceTime(300))
      .subscribe((_) => this.refresh());
  }

  autoCompleteValueFor(x: WithDisplayNameAndValue): string {
    return x.value;
  }

  resetForm(): void {
    this.mpName = '';
    this.selectedMp = undefined;
    this.onMolecularProfileSelected.emit(undefined);
    this.refresh();
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    if (prefix === '#') {
      // this.typeaheadQueryRef?.refetch({query: value, types: [SearchableEntities.Variant]})
    }
  }

  onMpNameChanged(e: string): void {
    this.debouncedPreview.next();
  }

  refresh() {
    if (this.mpName && this.mpName.trim() != '') {
      let res = parseMolecularProfile(this.mpName);
      if ('errorMessage' in res) {
        this.parseError = res.errorMessage;
        this.displayPreview = false;
      } else {
        this.parseError = undefined;
        this.previewQueryRef
          ?.refetch({ mpStructure: res })
          .then(() => (this.displayPreview = true));
      }
    } else {
      this.parseError = undefined;
      this.displayPreview = false;
    }
  }

  onVariantSelected(variant: SelectedVariant): void {
    this.variantFinderVisible = false;
    if (this.mpName) {
      this.mpName += ` #VID${variant.variantId} `;
    } else {
      this.mpName = `#VID${variant.variantId} `;
    }
    this.mpInputField?.nativeElement.focus();
    this.refresh();
  }

  submitNewMp(): void {
    if (this.mpName && this.mpName.trim() != '') {
      let res = parseMolecularProfile(this.mpName);
      if ('errorMessage' in res) {
        //dont create it
      } else {
        let state = this.createMolecularProfileMutator.mutate(
          this.createMolecularProfileGql,
          { mpStructure: res },
          {},
          (data) => {
            if (data.createMolecularProfile) {
              this.onMolecularProfileSelected.emit(
                data.createMolecularProfile.molecularProfile
              );
              this.selectedMp = data.createMolecularProfile.molecularProfile;
              this.cdr.detectChanges();
            }
          }
        );

        state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
          if (errs) {
            this.errorMessages = errs;
            this.loading = false;
          }
        });

        state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.loading = false;
        });

        state.isSubmitting$
          .pipe(takeUntil(this.destroy$))
          .subscribe((loading) => {
            this.loading = loading;
          });
      }
    }
  }
}
