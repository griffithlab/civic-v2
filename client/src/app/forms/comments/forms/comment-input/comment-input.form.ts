import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation
} from '@angular/core';

import {
  Subject,
  Observable
} from 'rxjs';

import {
  PreviewCommentGQL,
  PreviewCommentFragment,
  UserTypeaheadGQL,
  UserTypeaheadQuery,
  UserTypeaheadQueryVariables,
} from '@app/generated/civic.apollo';

import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { map, startWith } from 'rxjs/operators';
import { Apollo, QueryRef } from 'apollo-angular';

@Component({
  selector: 'cvc-comment-input',
  templateUrl: './comment-input.form.html',
  styleUrls: ['./comment-input.form.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CvcCommentInputForm implements OnDestroy {
  @Input()  comment?: string;
  @Output() commentChange = new EventEmitter<string>();
  
  private destroy$ = new Subject();

  previewComment$?: Observable<PreviewCommentFragment[]>
  previewLoading$?: Observable<boolean>

  suggestions: string[] = [];
  commentText?: string;

  private userTypeaheadQueryRef$!: QueryRef<UserTypeaheadQuery, UserTypeaheadQueryVariables>;

  constructor(private previewCommentGql: PreviewCommentGQL, private userTypeaheadGql: UserTypeaheadGQL, private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.commentText = this.comment

    this.userTypeaheadQueryRef$ = this.userTypeaheadGql.watch({
      queryTerm: ''
    });

    this.userTypeaheadQueryRef$.valueChanges.pipe(
      map(({data}) => data.userTypeahead)
    ).subscribe((users) => this.suggestions = users.map((u) => u.username))
  }

  resetForm(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onPreviewButtonClicked() {
    if (this.commentText) {
      this.previewComment$ = this.previewCommentGql.watch({commentText: this.commentText}).valueChanges.pipe(
        map(({data}) => { return data.previewCommentText })
      );
      this.previewLoading$ = this.previewCommentGql.watch({commentText: this.commentText}).valueChanges.pipe(
        map(({loading}) => { return loading }), startWith(true)
      )
    }
  }

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
      console.log('before calling fetch');
      this.userTypeaheadQueryRef$.refetch({queryTerm: value})
    //this.suggestions = prefix === '@' ? this.users : this.tags;
  }

  onCommentChanged(e: string): void {
    this.commentChange.emit(e)
  }
}
