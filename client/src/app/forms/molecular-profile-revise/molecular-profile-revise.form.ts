import { Component, Input, OnDestroy, AfterViewInit } from '@angular/core';

import { AbstractControl, FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import {
  Organization,
  Maybe,
  SourceSource,
  ModeratedEntities,
  RevisionStatus,
  RevisionsGQL,
  MolecularProfileRevisableFieldsGQL,
  SuggestMolecularProfileRevisionGQL,
  MolecularProfileDetailGQL,
  RevisableMolecularProfileFieldsFragment,
  SuggestMolecularProfileRevisionInput,
  SuggestMolecularProfileRevisionMutation,
  SuggestMolecularProfileRevisionMutationVariables,
} from '@app/generated/civic.apollo';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { toNullableString } from '@app/forms/config/utilities/input-formatters';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';

export interface FormSource {
  id?: number;
  sourceType?: SourceSource,
  citationId?: number;
  citation?: string;
}

export interface FormModel {
  fields: {
    id: number;
    description?: string;
    sources: FormSource[];
    comment: Maybe<string>;
    organization: Maybe<Organization>;
  };
}

@Component({
  selector: 'cvc-molecular-profile-revise-form',
  templateUrl: './molecular-profile-revise.form.html',
  styleUrls: ['./molecular-profile-revise.form.less'],
})
export class MolecularProfileReviseForm implements AfterViewInit, OnDestroy {
  @Input() molecularProfileId!: number;
  private destroy$ = new Subject();

  suggestRevisionMutator: MutatorWithState<SuggestMolecularProfileRevisionGQL, SuggestMolecularProfileRevisionMutation, SuggestMolecularProfileRevisionMutationVariables>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  formModel: Maybe<FormModel>;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(
    private suggestRevisionGQL: SuggestMolecularProfileRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private revisableFieldsGQL: MolecularProfileRevisableFieldsGQL,
    private mpDetailGQL: MolecularProfileDetailGQL,
    private revisionsGQL: RevisionsGQL
  ) {
    this.suggestRevisionMutator = new MutatorWithState(networkErrorService)

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Suggest MolecularProfile Revision Form'
        },
        fieldGroup: [
          {
            key: 'id',
            type: 'input',
            hide: true,
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Molecular Profile Description',
              helpText: 'Provide a summary of the clinical relevance of this Molecular Profile. The Molecular Profile Summary should be a synthesis of the existing Evidence Statements for this profile. Basic information on recurrence rates and biological/functional impact of the variants may be included, but the focus should be on the clinical impact (i.e. predictive, prognostic, diagnostic, or predisposing relevance). By submitting content to CIViC you agree to release it to the public domain as described by the <a href="https://creativecommons.org/publicdomain/zero/1.0/" title="CreativeCommons.org CC0 license" target="_blank">Creative Commons Public Domain Dedication (CC0 1.0 Universal)</a>.',
              placeholder: 'Enter a description for this molecular profile.',
              required: false,
            },
          },
          {
            key: 'sources',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Molecular Profile Description Sources',
              addText: 'Add a Source',
              helpText: 'Add any Sources used as references for this Molecular Profile\'s Description above.'
            },
            fieldArray: {
              type: 'source-input',
              templateOptions: {
                required: true,
              },
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              placeholder: 'Please enter a comment describing your revision.',
              required: true,
              minLength: 10,
            },
          },
          {
            key: 'cancel',
            type: 'cancel-button',
            templateOptions: {
              redirectPath: '../..'
            }
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Submit Molecular Profile Revision',
              submitSize: 'large'
            }
          }
        ]
      }
    ];
  }

  ngAfterViewInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL
      .fetch({ molecularProfileId: this.molecularProfileId }, {fetchPolicy: 'network-only'})
      .subscribe(
        ({ data: { molecularProfile } }) => {
          if (molecularProfile) {
            this.formModel = this.toFormModel(molecularProfile);
          }
        },
        // error
        (error) => {
          console.error('Error retrieving molecular profile.');
          console.error(error);
        },
        // complete
        () => {
          console.log("complete")
          if (this.formOptions.updateInitialValue) {
            this.formOptions.updateInitialValue();
          }
          // this.formGroup.updateValueAndValidity();
          // prompt fields to display any errors that exist in loaded evidenceItem
          this.formGroup.markAllAsTouched();
          // mark comment field as untouched, we don't want to show an error before the user interacts with the field
          const commentFc: AbstractControl | null = this.formGroup.get('fields.comment');
          if (commentFc) { commentFc.markAsUntouched() }
        });
  }

  toFormModel(mp: RevisableMolecularProfileFieldsFragment): FormModel {
    return {
      fields: {
        ...mp,
        comment: this.formModel?.fields.comment,
        organization: this.formModel?.fields.organization
      },
    }
  }

  submitRevision(formModel: Maybe<FormModel>): void {
    let input = this.toRevisionInput(formModel)
    if(input) {
      let state = this.suggestRevisionMutator.mutate(this.suggestRevisionGQL, {
        input: input
      },
      {
        refetchQueries: [
          {
            query: this.mpDetailGQL.document,
            variables: { molecularProfileId: this.molecularProfileId }
          },
          {
            query: this.revisionsGQL.document,
            variables: {
                subject: {id: this.molecularProfileId, entityType: ModeratedEntities.MolecularProfile},
                status: RevisionStatus.New
              }
          }
        ]
      })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if(res) {
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if(errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  toRevisionInput(model: Maybe<FormModel>): Maybe<SuggestMolecularProfileRevisionInput> {
    if (model) {
      const fields = model.fields;
      return {
        id: fields.id,
        comment: fields.comment!,
        organizationId: fields.organization?.id,
        fields: {
          description: toNullableString(model.fields.description),
          sourceIds: model.fields.sources.map((s: any) => { return +s.id }),
        }
      }
    }
    return undefined
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
