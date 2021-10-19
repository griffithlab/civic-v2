import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import {
  DrugInteraction,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  Organization,
  SourceSource,
  SuggestEvidenceItemRevisionInput,
  VariantOrigin,
  EvidenceItemRevisableFieldsGQL,
  RevisableEvidenceFieldsFragment,
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EvidenceItemReviseService } from './evidence-revise.service';

interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
}

interface FormDisease {
  id?: number;
  doid?: number;
  displayName?: string;
}

interface FormDrug {
  id?: number;
  ncitId?: string;
  name?: string;
}

interface FormPhenotype {
  id?: number;
  hpoId?: string;
  name?: string;
}

interface FormVariant {
  id?: number;
  name: string;
}

/* SuggestEvidenceItemRevisionInput
 *
 * description: NullableStringInput!
 * The Evidence Items's description/summary text.
 *
 * variantId: Int!
 * The ID of the Variant to which this EvidenceItem belongs
 *
 * variantOrigin: VariantOrigin!
 * The Variant Origin for this EvidenceItem.
 *
 * sourceId: Int!
 * The ID of the Source from which this EvidenceItem was curated.
 *
 * evidenceType: EvidenceType!
 * The Type of the EvidenceItem
 *
 * clinicalSignificance: EvidenceClinicalSignificance!
 * The Clinical Significance of the EvidenceItem
 *
 * diseaseId: NullableIntInput!
 * The ID of the disease (if applicable) for this EvidenceItem
 *
 * evidenceLevel: EvidenceLevel!
 * The evidence level of the EvidenceItem
 *
 * evidenceDirection: EvidenceDirection!
 * The evidence direction for this EvidenceItem.
 *
 * phenotypeIds: [Int!]!
 * List of IDs of CIViC Phenotype entries for this EvidenceItem. An empty list indicates none.
 *
 * rating: Int!
 * The rating for this EvidenceItem
 *
 * drugIds: [Int!]!
 * List of IDs of CIViC Drug entries for this EvidenceItem. An empty list indicates none.
 *
 * drugInteractionType: NullableDrugInteractionTypeInput!
 * Drug interaction type for cases where more than one drug ID is provided.
 *
 */

interface FormModel {
  id: number;
  comment: string;
  organizationId: Maybe<Organization>,
  fields: {
    clinicalSignificance: EvidenceClinicalSignificance;
    description: string;
    disease: Maybe<FormDisease>;
    drugInteractionType: Maybe<DrugInteraction>;
    drugs: Maybe<FormDrug[]>;
    evidenceDirection: EvidenceDirection;
    evidenceLevel: EvidenceLevel;
    evidenceType: EvidenceType;
    phenotypes: FormPhenotype[];
    evidenceRating: number;
    source: FormSource;
    variant: FormVariant;
    variantOrigin: VariantOrigin;
  };
}

@Component({
  selector: 'cvc-evidence-revise-form',
  templateUrl: './evidence-revise.form.html',
  styleUrls: ['./evidence-revise.form.less'],
})
export class EvidenceReviseForm implements OnInit, OnDestroy {
  @Input() evidenceId!: number;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  evidenceRevisionInput!: SuggestEvidenceItemRevisionInput;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(
    private revisionService: EvidenceItemReviseService,
    private viewerService: ViewerService,
    private revisableFieldsGQL: EvidenceItemRevisableFieldsGQL
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
        hide: true
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
    ];
  }

  ngOnInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL.fetch({ evidenceId: this.evidenceId })
      .subscribe(({ data: { evidenceItem } }) => {
        if (evidenceItem) {
          this.formModel = this.toFormModel(evidenceItem);
        } else {
          // TODO: handle errors with subscribe({complete, error})
          console.error('Evidence Revise form could not retrieve evidence item.');
        }
        if (this.formOptions.updateInitialValue) {
          this.formOptions.updateInitialValue();
        }
      });
  }

  toFormModel(evidence: RevisableEvidenceFieldsFragment): FormModel {
    return <FormModel>{
      id: evidence.id,
      fields: {
        ...evidence,
      },
      comment: '',
      organizationId: undefined
    }
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitRevision(formModel: FormModel): void {
    // this.revisionService
    //   .suggest(this.toRevisionInput(formModel));
  }

  // toRevisionInput(model: FormModel): SuggestEvidenceItemRevisionInput { }

  ngOnDestroy(): void {}
}
