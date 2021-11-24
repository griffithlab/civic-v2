import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  BehaviorSubject,
  Subject,
  Observable
} from 'rxjs';

import { map, startWith, takeUntil } from 'rxjs/operators';

import {
  Organization,
  AddCommentInput,
  CommentableInput,
  Maybe,
  PreviewCommentGQL,
  PreviewCommentQuery,
  PreviewCommentFragment,
} from '@app/generated/civic.apollo';

import { ViewerService, Viewer } from '@app/core/services/viewer/viewer.service';
import { CommentAddService } from './comment-add.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';

@Component({
  selector: 'cvc-comment-add',
  templateUrl: './comment-add.form.html',
  styleUrls: ['./comment-add.form.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CvcCommentAddForm implements OnDestroy {
  @Input() subject!: CommentableInput;
  @Output() commentAddedEvent = new EventEmitter<void>();

  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  commentText?: string;

  constructor(private fb: FormBuilder,
              private viewerService: ViewerService,
              private commentAddService: CommentAddService, private previewCommentGql: PreviewCommentGQL) {
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
        if(e) { 
          console.log("inside submit success if")
          this.resetForm(); 
          this.commentAddedEvent.emit();
        }
        console.log("outisde submit success if")
      });
  }

  ngOnInit(): void {
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitComment(): void {
    if (this.commentText) {
      const newCommentInput = <AddCommentInput>{
        body: this.commentText,
        subject: this.subject,
        organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
      };

      this.commentAddService.addComment(newCommentInput);
    }
  }

  resetForm(): void {
    this.commentText = undefined
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
