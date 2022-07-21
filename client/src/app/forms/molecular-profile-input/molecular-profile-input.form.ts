import {
  ChangeDetectorRef,
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
  PreviewMpNameFragment,
  PreviewMolecularProfileNameGQL,
  PreviewMolecularProfileNameQueryVariables,
  PreviewMolecularProfileNameQuery,
  QuicksearchGQL,
  QuicksearchQuery,
  QuicksearchQueryVariables,
  SearchableEntities
} from '@app/generated/civic.apollo';

import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { map, takeUntil, debounceTime, filter, pluck } from 'rxjs/operators';
import {QueryRef } from 'apollo-angular';
import { parseMolecularProfile } from '@app/core/utilities/molecular-profile-parser';
import { isNonNulled } from 'rxjs-etc';
import { tag } from 'rxjs-spy/cjs/operators';


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
  typeaheadQueryRef?: QueryRef<QuicksearchQuery, QuicksearchQueryVariables>

  previewMpName$?: Observable<PreviewMpNameFragment[]>

  suggestions: WithDisplayNameAndValue[] = []
  loading: boolean = false

  mpName?: string;

  parseError?: string
  displayPreview: boolean = false

  constructor(private previewMpGql: PreviewMolecularProfileNameGQL, private quicksearchGql: QuicksearchGQL, cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.previewQueryRef = this.previewMpGql.watch({})
/*     this.typeaheadQueryRef = this.quicksearchGql.watch({
      query: 'ZZZZ',
      types: [SearchableEntities.Variant]
    }) */

    this.previewMpName$ = this.previewQueryRef.valueChanges.pipe(
      pluck('data'),
      filter(isNonNulled),
      map((data) => data.previewMolecularProfileName),
      takeUntil(this.destroy$)
    );

/*     this.typeaheadQueryRef.valueChanges.pipe(
      pluck('data'),
      filter(isNonNulled),
      pluck('search'),
      filter(isNonNulled),
      map((search) => search.map(res => {return {displayName: res.name, value: `VID${res.id}`}})),
      takeUntil(this.destroy$)
    ).subscribe((res) => this.suggestions = res)
    
    this.typeaheadQueryRef.valueChanges.pipe(
      pluck('loading'),
      filter(isNonNulled),
      takeUntil(this.destroy$)
    ).subscribe((loading) => this.loading = loading) */

    this.debouncedPreview
    .pipe(
      takeUntil(this.destroy$),
      debounceTime(500))
    .subscribe((_) => this.refresh());
  }

  autoCompleteValueFor(x: WithDisplayNameAndValue): string {
    return x.value;
  }

  resetForm(): void {
    this.mpName = ''
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    if(prefix === "#") {
     // this.typeaheadQueryRef?.refetch({query: value, types: [SearchableEntities.Variant]})
    }
  }

  onMpNameChanged(e: string): void {
    this.debouncedPreview.next();
  }

  refresh() {
    if(this.mpName && this.mpName.trim() != '') {
      let res = parseMolecularProfile(this.mpName)
      if('errorMessage' in res) {
        this.parseError = res.errorMessage;
        this.displayPreview = false;
      } else {
        this.parseError = undefined;
        this.previewQueryRef?.refetch({mpStructure: res}).then(() => this.displayPreview = true);
      }
    } else {
      this.parseError = undefined;
      this.displayPreview = false;
    }
  }
}
