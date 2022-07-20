import {
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import {
  Subject,
  Observable
} from 'rxjs';


import {
  EntityTypeaheadGQL,
  EntityTypeaheadQuery,
  EntityTypeaheadQueryVariables,
  TaggableEntity,
  UserRole,
  PreviewMpNameFragment,
  PreviewMolecularProfileNameGQL,
  PreviewMolecularProfileNameQueryVariables,
  PreviewMolecularProfileNameQuery
} from '@app/generated/civic.apollo';

import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { map, takeUntil, debounceTime, filter, pluck } from 'rxjs/operators';
import {QueryRef } from 'apollo-angular';
import { parseMolecularProfile } from '@app/core/utilities/molecular-profile-parser';
import { isNonNulled } from 'rxjs-etc';


interface WithDisplayNameAndValue {
  displayName: string
  value: string
}

@Component({
  selector: 'cvc-molecular-profile-input-form',
  templateUrl: './molecular-profile-input.form.html',
  styleUrls: ['./molecular-profile-input.form.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CvcMolecularProfileInputForm implements OnDestroy, OnInit {
  private destroy$ = new Subject();
  private debouncedPreview = new Subject();

  previewQueryRef?: QueryRef<PreviewMolecularProfileNameQuery, PreviewMolecularProfileNameQueryVariables>

  previewMpName$?: Observable<PreviewMpNameFragment[]>

  suggestions: WithDisplayNameAndValue[] = [];

  mpName?: string;

  parseError?: string

  private entityTypeaheadQueryRef$!: QueryRef<EntityTypeaheadQuery, EntityTypeaheadQueryVariables>;

  constructor(private previewMpGql: PreviewMolecularProfileNameGQL, private entityTypeaheadGql: EntityTypeaheadGQL) {
  }

  ngOnInit(): void {
    this.previewQueryRef = this.previewMpGql.watch({})

    this.previewMpName$ = this.previewQueryRef.valueChanges.pipe(
      pluck('data'),
      filter(isNonNulled),
      map((data) => data.previewMolecularProfileName),
      takeUntil(this.destroy$)
    );

    this.debouncedPreview
    .pipe(
      takeUntil(this.destroy$),
      debounceTime(500))
    .subscribe((_) => this.refresh());

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
      case TaggableEntity.MolecularProfile:
        return `MPID${id}`
      case TaggableEntity.Role:
        return Object.keys(UserRole)[id];
    }
  }

  resetForm(): void {
    this.mpName = ''
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    if(prefix === "@") {
      //this.userTypeaheadQueryRef$.refetch({queryTerm: value})
    } else if (prefix == '$') {
    } else {
      this.entityTypeaheadQueryRef$.refetch({queryTerm: value})
    }
  }

  onMpNameChanged(e: string): void {
    this.debouncedPreview.next();
  }

  refresh() {
    if(this.mpName && this.mpName.trim() != '') {
      let res = parseMolecularProfile(this.mpName)
      if('errorMessage' in res) {
        this.parseError = res.errorMessage
      } else {
        this.previewQueryRef?.refetch({mpStructure: res}).then(() => this.parseError = undefined)
      }
    } else {
      this.parseError = undefined
    }
  }
}
