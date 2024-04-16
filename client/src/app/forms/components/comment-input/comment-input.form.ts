import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core'

import { Subject, Observable } from 'rxjs'

import {
  PreviewCommentGQL,
  ParsedCommentFragmentFragment,
  UserTypeaheadGQL,
  UserTypeaheadQuery,
  UserTypeaheadQueryVariables,
  EntityTypeaheadGQL,
  EntityTypeaheadQuery,
  EntityTypeaheadQueryVariables,
  TaggableEntity,
  UserRole,
} from '@app/generated/civic.apollo'

import { MentionOnSearchTypes } from 'ng-zorro-antd/mention'
import { filter, map, startWith, takeUntil } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { QueryRef } from 'apollo-angular'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { isNonNulled } from 'rxjs-etc'

interface WithDisplayNameAndValue {
  displayName: string
  value: string
}

@Component({
  selector: 'cvc-comment-input-form',
  templateUrl: './comment-input.form.html',
  styleUrls: ['./comment-input.form.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CvcCommentInputForm implements OnDestroy, OnChanges {
  @Input() comment?: string
  @Output() commentChange = new EventEmitter<string>()

  private destroy$ = new Subject<void>()

  previewComment$?: Observable<ParsedCommentFragmentFragment[]>
  previewLoading$?: Observable<boolean>

  suggestions: WithDisplayNameAndValue[] = []
  roleSuggestions = [
    { displayName: 'admins', value: 'admins' },
    { displayName: 'editors', value: 'editors' },
  ]
  commentText?: string

  viewer$?: Observable<Viewer>

  private userTypeaheadQueryRef$!: QueryRef<
    UserTypeaheadQuery,
    UserTypeaheadQueryVariables
  >
  private entityTypeaheadQueryRef$!: QueryRef<
    EntityTypeaheadQuery,
    EntityTypeaheadQueryVariables
  >

  constructor(
    private previewCommentGql: PreviewCommentGQL,
    private userTypeaheadGql: UserTypeaheadGQL,
    private entityTypeaheadGql: EntityTypeaheadGQL,
    private viewerService: ViewerService
  ) {}

  ngOnInit(): void {
    this.viewer$ = this.viewerService.viewer$

    this.commentText = this.comment

    this.userTypeaheadQueryRef$ = this.userTypeaheadGql.watch({
      queryTerm: '',
    })

    this.userTypeaheadQueryRef$.valueChanges
      .pipe(
        pluck('data', 'userTypeahead'),
        filter(isNonNulled),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (users) =>
          (this.suggestions = users.map((u) => {
            return { displayName: u.username, value: u.username }
          }))
      )

    this.entityTypeaheadQueryRef$ = this.entityTypeaheadGql.watch({
      queryTerm: '',
    })

    this.entityTypeaheadQueryRef$.valueChanges
      .pipe(
        pluck('data', 'entityTypeahead'),
        filter(isNonNulled),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (tagEntities) =>
          (this.suggestions = tagEntities.map((t) => {
            return {
              displayName: t.displayName,
              value: this.tagForEntityTypeAndId(t.tagType, t.entityId),
            }
          }))
      )
  }

  ngOnChanges() {
    this.commentText = this.comment
  }

  autoCompleteValueFor(x: WithDisplayNameAndValue): string {
    return x.value
  }

  tagForEntityTypeAndId(entityType: TaggableEntity, id: number): string {
    switch (entityType) {
      case TaggableEntity.Feature:
        return `FID${id}`
      case TaggableEntity.Variant:
        return `VID${id}`
      case TaggableEntity.VariantGroup:
        return `VGID${id}`
      case TaggableEntity.EvidenceItem:
        return `EID${id}`
      case TaggableEntity.Assertion:
        return `AID${id}`
      case TaggableEntity.Revision:
        return `RID${id}`
      case TaggableEntity.MolecularProfile:
        return `MPID${id}`
      case TaggableEntity.Role:
        return Object.keys(UserRole)[id]
    }
  }

  resetForm(): void {
    this.commentText = ''
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  onPreviewButtonClicked() {
    if (this.commentText) {
      this.previewComment$ = this.previewCommentGql
        .watch({ commentText: this.commentText })
        .valueChanges.pipe(
          pluck('data', 'previewCommentText'),
          filter(isNonNulled)
        )
      this.previewLoading$ = this.previewCommentGql
        .watch({ commentText: this.commentText })
        .valueChanges.pipe(
          map(({ loading }) => {
            return loading
          }),
          startWith(true)
        )
    }
  }

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    if (prefix === '@') {
      this.userTypeaheadQueryRef$.refetch({ queryTerm: value })
    } else if (prefix == '$') {
      this.suggestions = this.roleSuggestions.filter((role) =>
        role.value.startsWith(value)
      )
    } else {
      this.entityTypeaheadQueryRef$.refetch({ queryTerm: value })
    }
  }

  onCommentChanged(e: string): void {
    this.commentChange.emit(e)
  }
}
