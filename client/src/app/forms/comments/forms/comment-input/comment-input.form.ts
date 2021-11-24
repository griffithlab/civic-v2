import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
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
  EntityTypeaheadGQL,
  EntityTypeaheadQuery,
  EntityTypeaheadQueryVariables,
  TaggableEntity
} from '@app/generated/civic.apollo';

import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { map, startWith, takeUntil } from 'rxjs/operators';
import {QueryRef } from 'apollo-angular';


interface WithDisplayNameAndValue {
  displayName: string
  value: string
}

@Component({
  selector: 'cvc-comment-input',
  templateUrl: './comment-input.form.html',
  styleUrls: ['./comment-input.form.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CvcCommentInputForm implements OnDestroy, OnChanges {
  @Input()  comment?: string;
  @Output() commentChange = new EventEmitter<string>();
  
  private destroy$ = new Subject();

  previewComment$?: Observable<PreviewCommentFragment[]>
  previewLoading$?: Observable<boolean>

  suggestions: WithDisplayNameAndValue[] = [];
  commentText?: string;

  private userTypeaheadQueryRef$!: QueryRef<UserTypeaheadQuery, UserTypeaheadQueryVariables>;
  private entityTypeaheadQueryRef$!: QueryRef<EntityTypeaheadQuery, EntityTypeaheadQueryVariables>;

  constructor(private previewCommentGql: PreviewCommentGQL, private userTypeaheadGql: UserTypeaheadGQL, private entityTypeaheadGql: EntityTypeaheadGQL) {
  }

  ngOnInit(): void {
    this.commentText = this.comment

    this.userTypeaheadQueryRef$ = this.userTypeaheadGql.watch({
      queryTerm: ''
    });

    this.userTypeaheadQueryRef$.valueChanges.pipe(
      map(({data}) => data.userTypeahead),
      takeUntil(this.destroy$)
    ).subscribe((users) => this.suggestions = users.map((u) => {return {displayName: u.username, value: u.username }}))

    this.entityTypeaheadQueryRef$ = this.entityTypeaheadGql.watch({
      queryTerm: ''
    })

    this.entityTypeaheadQueryRef$.valueChanges.pipe(
      map(({data}) => data.entityTypeahead),
      takeUntil(this.destroy$)
    ).subscribe((tagEntities) => this.suggestions = tagEntities.map((t) => {
      return {
        displayName: t.displayName,
        value: this.tagForEntityTypeAndId(t.tagType, t.entityId) 
      } 
    }))
  }

  ngOnChanges() {
    this.commentText = this.comment;
  }

  autoCompleteValueFor(x: WithDisplayNameAndValue): string {
    return x.value;
  }

  tagForEntityTypeAndId(entityType: TaggableEntity, id: number): string {
    switch (entityType) {
      case (TaggableEntity.Gene):
        return `GID${id}`;
      case TaggableEntity.Variant:
        return `VID${id}`;
      case TaggableEntity.VariantGroup:
        return `VGID${id}`;
      case TaggableEntity.EvidenceItem:
        return `EID${id}`;
      case TaggableEntity.Assertion:
        return `AID${id}`;
      case TaggableEntity.Revision:
        return `RID${id}`;
      case TaggableEntity.Organization:
        return `OID${id}`;
    }
  }

  resetForm(): void {
    this.commentText = ''
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
    if(prefix === "@") {
      this.userTypeaheadQueryRef$.refetch({queryTerm: value})
    } else {
      this.entityTypeaheadQueryRef$.refetch({queryTerm: value})
    }
  }

  onCommentChanged(e: string): void {
    this.commentChange.emit(e)
  }
}
