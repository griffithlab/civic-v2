import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';

import { AbstractControl, FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import {
  GeneRevisableFieldsGQL,
  Organization,
  SuggestGeneRevisionInput,
  Maybe,
  SourceSource,
  RevisableGeneFieldsFragment,
  SuggestGeneRevisionGQL,
  SuggestGeneRevisionMutation,
  SuggestGeneRevisionMutationVariables,
} from '@app/generated/civic.apollo';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { toNullableString } from '@app/forms/config/utilities/input-formatters';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { ConstantPool } from '@angular/compiler';

export interface FormSource {
  id?: number;
  sourceType?: SourceSource,
  citationId?: number;
  citation?: string;
}

export interface FormModel {
  fields: {
    id: number;
    description: string;
    sources: FormSource[];
    comment: Maybe<string>;
    organization: Maybe<Organization>;
  };
}

@Component({
  selector: 'cvc-gene-revise-form',
  templateUrl: './gene-revise.form.html',
  styleUrls: ['./gene-revise.form.less'],
})
export class GeneReviseForm implements OnInit, AfterViewInit, OnDestroy {
  @Input() geneId!: number;
  private destroy$ = new Subject();

  suggestRevisionMutator: MutatorWithState<SuggestGeneRevisionGQL, SuggestGeneRevisionMutation, SuggestGeneRevisionMutationVariables>

  geneRevisionInput!: SuggestGeneRevisionInput;

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  formModel: Maybe<FormModel>;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(
    private suggestRevisionGQL: SuggestGeneRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private revisableFieldsGQL: GeneRevisableFieldsGQL
  ) {
    this.suggestRevisionMutator = new MutatorWithState(networkErrorService)

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Suggest Gene Revision Form'
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
              label: 'Gene Description',
              helpText: 'User-defined summary of the clinical relevance of this Gene. By submitting content to CIViC you agree to release it to the public domain as described by the <a href="https://creativecommons.org/publicdomain/zero/1.0/" title="CreativeCommons.org CC0 license" target="_blank">Creative Commons Public Domain Dedication (CC0 1.0 Universal)</a></p><p>Should include:</p><ul><li>relevance to appropriate cancer(s)</li><li>treatment(s) related specifically to variants affecting this Gene</li></ul><p>May include relevant mechanistic information such as:</p><ul><li>pathway interactions</li><li>functional alterations caused by variants in this Gene (i.e., activating, loss-of-function, etc.)</li><li>normal functions key to its oncogenic properties.</li>',
              placeholder: 'Enter a description for this gene.',
              required: false,
            },
          },
          {
            key: 'sources',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Gene Description Sources',
              addText: 'Add a Source',
              helpText: 'Add any Sources used as references for this Gene\'s Description above.'
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
              submitLabel: 'Submit Gene Revision',
              submitSize: 'large'
            }
          }
        ]
      }
    ];
  }

  ngOnInit() {
    console.log(this.geneId)
  }

  ngAfterViewInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL
      .fetch({ geneId: this.geneId }, {fetchPolicy: 'network-only'})
      .subscribe(
        ({ data: { gene } }) => {
          console.log("gene")
          if (gene) {
            this.formModel = this.toFormModel(gene);
          }
        },
        // error
        (error) => {
          console.error('Error retrieving gene.');
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

  toFormModel(gene: RevisableGeneFieldsFragment): FormModel {
    return {
      fields: {
        ...gene,
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

  toRevisionInput(model: Maybe<FormModel>): Maybe<SuggestGeneRevisionInput> {
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
