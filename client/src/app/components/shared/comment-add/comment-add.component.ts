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
  Organization,
  AddCommentInput,
  CommentableInput,
  Maybe,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';
import { CommentAddService } from './comment-add.service';
import { GraphQLError } from 'graphql';

@Component({
  selector: 'cvc-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.less']
})
export class CommentAddComponent implements OnDestroy {
  @Input() subject!: CommentableInput;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  addCommentForm: FormGroup;

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

    this.addCommentForm = this.fb.group({
      body: ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitComment(value: { body: string}): void {
    for (const key in this.addCommentForm.controls) {
      this.addCommentForm.controls[key].markAsDirty();
      this.addCommentForm.controls[key].updateValueAndValidity();
    }
    console.log(value);

    const newCommentInput = <AddCommentInput>{
      body: value.body,
      subject: this.subject,
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
    };

    this.commentAddService.addComment(newCommentInput);

  }

  resetForm(): void {
    this.addCommentForm.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
