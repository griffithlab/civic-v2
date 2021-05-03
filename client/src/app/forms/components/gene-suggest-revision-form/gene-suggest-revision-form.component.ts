import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  EventEmitter
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import {
  BehaviorSubject,
  Observable,
  Observer,
  Subject,
} from 'rxjs';

import { pluck, takeUntil } from 'rxjs/operators';

import {
  GeneRevisableFieldsGQL,
  Organization,
  SuggestGeneRevisionInput,
  Maybe,
  Gene,
  Source
} from '@app/generated/civic.apollo';

import { ViewerService, Viewer } from '@app/shared/services/viewer/viewer.service';
import { GeneSuggestRevisionService } from './gene-suggest-revision.service';

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

  suggestGeneRevisionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private viewerService: ViewerService,
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

    this.suggestGeneRevisionForm = this.fb.group({
      description: ['', [
        Validators.minLength(10)
      ]],

      comment: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
    });
  }

  ngOnInit(): void {
    // fetch latest revisable field values, update form fields
    this.geneRevisableFieldsGQL.fetch({geneId: this.geneId})
      .subscribe(({ data: { gene } }) => {
        if(gene) {
          this.suggestGeneRevisionForm.patchValue({
            description: gene.description,
            sourceIds: gene.sources.map(s => s.id)
          })
        } else {
          // TODO: handle errors with subscribe({complete, error})
          console.error('Could not retrieve gene.');
        }
      })
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitRevision(value: SuggestGeneRevisionInput): void {
    for (const key in this.suggestGeneRevisionForm.controls) {
      this.suggestGeneRevisionForm.controls[key].markAsDirty();
      this.suggestGeneRevisionForm.controls[key].updateValueAndValidity();
    }
    console.log(value);

    this.geneSuggestRevisionService.suggestRevision(value);

  }

  resetForm(): void {
    this.suggestGeneRevisionForm.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
