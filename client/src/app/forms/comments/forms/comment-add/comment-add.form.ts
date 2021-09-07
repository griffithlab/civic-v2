import {
  Component,
  Input,
  OnDestroy,
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  BehaviorSubject,
  Subject,
} from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import {
  Organization,
  AddCommentInput,
  CommentableInput,
  Maybe,
} from '@app/generated/civic.apollo';

import { ViewerService, Viewer } from '@app/core/services/viewer/viewer.service';
import { CommentAddService } from './comment-add.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'cvc-comment-add',
  templateUrl: './comment-add.form.html',
  styleUrls: ['./comment-add.form.less']
})
export class CvcCommentAddForm implements OnDestroy {
  @Input() subject!: CommentableInput;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: AddCommentInput;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(private fb: FormBuilder,
              private viewerService: ViewerService,
              private commentAddService: CommentAddService) {
    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.commentAddService.submitError$;
    this.isSubmitting$ = this.commentAddService.isSubmitting$;
    this.submitSuccess$ = this.commentAddService.submitSuccess$;

    this.submitSuccess$
      .pipe(takeUntil(this.destroy$))
      .subscribe((e) => {
        if(e) { this.resetForm(); }
      });

    this.formFields = [
      {
        key: 'body',
        type: 'comment-textarea',
        templateOptions: {
          placeholder: 'Please enter a comment.',
          required: true,
          minLength: 10
        },
      }
    ];
  }

  ngOnInit(): void {
    this.formModel = {
      body: '',
      subject: this.subject,
    }
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitComment(value: AddCommentInput): void {
    for (const key in this.formGroup.controls) {
      this.formGroup.controls[key].markAsDirty();
      this.formGroup.controls[key].updateValueAndValidity();
    }

    const newCommentInput = <AddCommentInput>{
      ...value,
      subject: this.subject,
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
    };

    this.commentAddService.addComment(newCommentInput);
  }

  resetForm(): void {
    this.formGroup.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
