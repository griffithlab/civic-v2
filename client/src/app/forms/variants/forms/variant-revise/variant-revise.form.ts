import {
  Component,
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
  VariantRevisableFieldsGQL,
  Organization,
  SuggestVariantRevisionInput,
  Maybe,
} from '@app/generated/civic.apollo';

import { ViewerService, Viewer } from '@app/shared/services/viewer/viewer.service';
import { VariantSuggestRevisionService } from './variant-revise.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'cvc-variant-revise-form',
  templateUrl: './variant-revise.form.html',
  styleUrls: ['./variant-revise.form.less']
})
export class VariantReviseForm implements OnDestroy {
  @Input() variantId!: number;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  variantRevisionInput!: SuggestVariantRevisionInput;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: any;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(private viewerService: ViewerService,
    private variantRevisableFieldsGQL: VariantRevisableFieldsGQL,
    private variantSuggestRevisionService: VariantSuggestRevisionService) {

    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.variantSuggestRevisionService.submitError$;
    this.isSubmitting$ = this.variantSuggestRevisionService.isSubmitting$;
    this.submitSuccess$ = this.variantSuggestRevisionService.submitSuccess$;

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
          placeholder: 'Enter a description for this variant.',
          required: false
        }
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
            required: true
          }
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

    // reset form upon successful submit
    this.submitSuccess$
      .pipe(takeUntil(this.destroy$))
      .subscribe(s => {
        if (s && this.formOptions.resetModel) {
          this.formOptions.resetModel();
        }
      })
  }

  ngOnInit(): void {
    // fetch latest revisable field values, update form fields
    this.variantRevisableFieldsGQL.fetch({ variantId: this.variantId })
      .subscribe(({ data: { variant } }) => {
        if (variant) {
          this.formModel = {
            id: variant.id,
            fields: {
              description: variant.description,
              sources: [...variant.sources]
            },
            comment: ''
          }
        } else {
          // TODO: handle errors with subscribe({complete, error})
          console.error('Could not retrieve variant.');
        }
        if (this.formOptions.updateInitialValue) {
          this.formOptions.updateInitialValue();
        }
      });
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitRevision(value: any): void {
    // for (const key in this.formGroup.controls) {
    //   this.formGroup.controls[key].markAsDirty();
    //   this.formGroup.controls[key].updateValueAndValidity();
    // }

    const newRevisionInput = <SuggestVariantRevisionInput>{
      ...value,
      fields: {
        description: value.fields.description,
        sourceIds: value.fields.sources.map((s: any) => { return +s.id }),
      },
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
    }

    this.variantSuggestRevisionService.suggestRevision(newRevisionInput);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
