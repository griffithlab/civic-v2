import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { BehaviorSubject, Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import {
  GeneRevisableFieldsGQL,
  Organization,
  SuggestGeneRevisionInput,
  Maybe,
  SourceSource,
  RevisableGeneFieldsFragment,
} from '@app/generated/civic.apollo';

import {
  ViewerService,
  Viewer,
} from '@app/core/services/viewer/viewer.service';
import { GeneSuggestRevisionService } from './gene-revise.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { toNullableString } from '@app/forms/shared/input-formatters';

export interface FormSource {
  id: number;
  sourceType: SourceSource,
  citationId: number;
  citation: string;
}

export interface FormModel {
  id: number;
  comment: string;
  fields: {
    description: string;
    sources: FormSource[];
  };
}

@Component({
  selector: 'cvc-gene-revise-form',
  templateUrl: './gene-revise.form.html',
  styleUrls: ['./gene-revise.form.less'],
})
export class GeneReviseForm implements OnInit, OnDestroy {
  @Input() geneId!: number;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  geneRevisionInput!: SuggestGeneRevisionInput;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(
    private viewerService: ViewerService,
    private revisionService: GeneSuggestRevisionService,
    private revisableFieldsGQL: GeneRevisableFieldsGQL
  ) {
    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.revisionService.submitError$;
    this.isSubmitting$ = this.revisionService.isSubmitting$;
    this.submitSuccess$ = this.revisionService.submitSuccess$;

    this.formFields = [
      {
        key: 'id',
        type: 'input',
        hide: true,
      },
      {
        key: 'fields.description',
        type: 'textarea',
        templateOptions: {
          label: 'Description',
          placeholder: 'Enter a description for this gene.',
          required: false,
        },
      },
      {
        key: 'fields.sources',
        type: 'multi-field',
        templateOptions: {
          label: 'Sources',
          addText: 'Add another Source',
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
    ];

    // reset form upon successful submit
    this.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((s) => {
      if (s && this.formOptions.resetModel) {
        this.formOptions.resetModel();
      }
    });
  }

  ngOnInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL
      .fetch({ geneId: this.geneId })
      .subscribe(({ data: { gene } }) => {
        if (gene) {
          this.formModel = this.toFormModel(gene);
        } else {
          // TODO: handle errors with subscribe({complete, error})
          console.error('Could not retrieve gene.');
        }
        if (this.formOptions.updateInitialValue) {
          this.formOptions.updateInitialValue();
        }
      });
  }

  toFormModel(gene: RevisableGeneFieldsFragment): FormModel {
    return <FormModel>{
        id: gene.id,
        fields: {
          ...gene
        },
        comment: '',
    }
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitRevision(model: any): void {
    this.revisionService
      .suggest(this.toRevisionInput(model));
  }

  toRevisionInput(model: FormModel): SuggestGeneRevisionInput {
    return <SuggestGeneRevisionInput>{
      ...model,
      fields: {
        description: toNullableString(model.fields.description),
        sourceIds: model.fields.sources.map((s: any) => { return +s.id }),
      },
      organizationId:
        this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id,
    };

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.revisionService.cleanup();
  }
}
