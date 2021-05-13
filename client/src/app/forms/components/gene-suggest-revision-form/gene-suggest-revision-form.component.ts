import {
  Component,
  OnInit,
  Input,
  OnDestroy,
} from '@angular/core';

import {
  FormGroup,
} from '@angular/forms';

import {
  BehaviorSubject,
  Subject,
} from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import {
  GeneRevisableFieldsGQL,
  Organization,
  SuggestGeneRevisionInput,
  Maybe,
} from '@app/generated/civic.apollo';

import { ViewerService, Viewer } from '@app/shared/services/viewer/viewer.service';
import { GeneSuggestRevisionService } from './gene-suggest-revision.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'cvc-gene-suggest-revision-form',
  templateUrl: './gene-suggest-revision-form.component.html',
  styleUrls: ['./gene-suggest-revision-form.component.less']
})
export class GeneSuggestRevisionFormComponent implements OnInit, OnDestroy {
  @Input() geneId!: number;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  geneRevisionInput!: SuggestGeneRevisionInput;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: any;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(private viewerService: ViewerService,
              private geneRevisableFieldsGQL: GeneRevisableFieldsGQL,
              private geneSuggestRevisionService: GeneSuggestRevisionService) {

    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.geneSuggestRevisionService.submitError$;
    this.isSubmitting$ = this.geneSuggestRevisionService.isSubmitting$;
    this.submitSuccess$ = this.geneSuggestRevisionService.submitSuccess$;

    this.submitSuccess$
      .pipe(takeUntil(this.destroy$))
      .subscribe((e) => {
        if(e) { this.resetForm(); }
      });

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
          required: false
        }
      },
      {
        key: 'comment',
        type: 'comment-textarea',
        templateOptions: {
          label: 'Comment',
          placeholder: 'Please enter a comment describing your revision.',
          required: true,
          minLength: 10
        },
      }
    ]
  }

  ngOnInit(): void {
    // fetch latest revisable field values, update form fields
    this.geneRevisableFieldsGQL.fetch({geneId: this.geneId})
      .subscribe(({ data: { gene } }) => {
        if(gene) {
          this.formModel = {
            id: gene.id,
            fields: {
              description: gene.description,
              sourceIds: gene.sources.map(s => s.id)
            },
            comment: ''
          }
        } else {
          // TODO: handle errors with subscribe({complete, error})
          console.error('Could not retrieve gene.');
        }
      });
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitRevision(value: SuggestGeneRevisionInput): void {
    for (const key in this.formGroup.controls) {
      this.formGroup.controls[key].markAsDirty();
      this.formGroup.controls[key].updateValueAndValidity();
    }

    const newRevisionInput = <SuggestGeneRevisionInput>{
      ...value,
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
    }

    this.geneSuggestRevisionService.suggestRevision(newRevisionInput);

  }

  resetForm(): void {
    this.formGroup.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
