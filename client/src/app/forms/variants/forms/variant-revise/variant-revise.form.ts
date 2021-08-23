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
  ClinvarInput,
  VariantType,
  SourceSource,
} from '@app/generated/civic.apollo';

import { ViewerService, Viewer } from '@app/core/services/viewer/viewer.service';
import { VariantSuggestRevisionService } from './variant-revise.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { toNullableString } from '@app/forms/shared/input-helpers';

interface FormSource {
  id: number;
  sourceType: SourceSource;
  citationId: number;
  citation: string;
}

interface FormModel {
  id: number;
  comment: string;
  fields: {
    name?: string;
    variantAliases?: string[];
    description: string;
    sources: FormSource[];
    clinvarIds?: ClinvarInput;
    gene?: { id: number; name: string }
    ensemblVersion?: number;
    hgvsDescriptions?: Maybe<string[]>;
    variantTypes?: VariantType[];
  }
}

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

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(
    private revisionService: VariantSuggestRevisionService,
    private viewerService: ViewerService,
    private revisableFieldsGQL: VariantRevisableFieldsGQL,
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
        key: 'fields.variantAliases',
        type: 'multi-field',
        templateOptions: {
          label: 'Variant Aliases',
          addText: 'Add an Alias',
        },
        fieldArray: {
          type: 'input',
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
    this.revisableFieldsGQL.fetch({ variantId: this.variantId })
      .subscribe(({ data: { variant } }) => {
        if (variant) {
          this.formModel = {
            id: variant.id,
            fields: {
              ...variant
              // description: variant.description,
              // sources: [...variant.sources],
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

  submitRevision(formModel: FormModel): void {
    this.revisionService
      .suggest(this.toRevisionInput(formModel));
  }

  toRevisionInput(model: FormModel): SuggestVariantRevisionInput {
    return <SuggestVariantRevisionInput>{
      ...model,
      fields: {
        description: toNullableString(model.fields.description),
        sourceIds: model.fields.sources.map((s: any) => { return +s.id }),
      },
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
