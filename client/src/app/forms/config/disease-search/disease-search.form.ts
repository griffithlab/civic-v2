import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { Apollo } from 'apollo-angular'
import { debounceTime, distinctUntilChanged, filter, switchMap, } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs'
import {
  DiseaseSearchFilter,
  SearchByPermalinkGQL,
  SearchDiseasesGQL,
  SearchDiseasesQuery,
  SearchDiseasesQueryVariables,
} from '@app/generated/civic.apollo'
import { diseaseSearchFields } from './disease-search.form.config'

export interface DiseaseSearchFormModel {
  filters: {
    id?: { operator: string; value?: number }
    name?: { operator: string; value?: string }
    doid?: { operator: string; value?: string }
    diseaseAliases?: { operator: string; value?: string }
    deprecated?: { value: boolean }
  }
}

@UntilDestroy()
@Component({
  selector: 'cvc-disease-search-form',
  templateUrl: './disease-search.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcDiseaseSearchForm implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({})
  model: DiseaseSearchFormModel = { filters: {} }
  fields: FormlyFieldConfig[] = diseaseSearchFields
  options: FormlyFormOptions = { formState: { formLayout: 'inline' } }

  results$ = new BehaviorSubject<SearchDiseasesQuery['searchDiseases'] | null>(
    null
  )

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router,
    private searchDiseasesGQL: SearchDiseasesGQL,
    private searchByPermalinkGQL: SearchByPermalinkGQL
  ) {}

  ngOnInit() {
    // Check for permalink in URL
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      const permalinkId = params['p']
      if (permalinkId) {
        this.loadFromPermalink(permalinkId)
      } else {
        this.setupReactiveSearch()
      }
    })
  }

  setupReactiveSearch() {
    this.form.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((model) => this.hasValidSearch(model)),
        switchMap((model) => this.executeSearch(model, true)),
        untilDestroyed(this)
      )
      .subscribe({
        next: (result) => {
          const data = result.data.searchDiseases
          this.results$.next(data)

          if (data.permalinkId) {
            this.updatePermalinkUrl(data.permalinkId)
          }
        },
        error: (error) => {
          console.error('Search error:', error)
        },
      })
  }

  executeSearch(
    model: DiseaseSearchFormModel,
    createPermalink: boolean
  ): Observable<{ data: SearchDiseasesQuery }> {
    const query = this.buildGraphQLQuery(model)

    return this.apollo.query<SearchDiseasesQuery, SearchDiseasesQueryVariables>(
      {
        query: this.searchDiseasesGQL.document,
        variables: { query, createPermalink },
        fetchPolicy: 'network-only',
      }
    )
  }

  buildGraphQLQuery(model: DiseaseSearchFormModel): DiseaseSearchFilter {
    const filters = model.filters
    const query: DiseaseSearchFilter = {}

    // Only include fields with values
    if (filters.id?.value !== null && filters.id?.value !== undefined) {
      query.id = {
        operator: filters.id.operator as any,
        value: filters.id.value,
      }
    }

    if (filters.name?.value?.trim()) {
      query.name = {
        operator: filters.name.operator as any,
        value: filters.name.value.trim(),
      }
    }

    if (filters.doid?.value?.trim()) {
      query.doid = {
        operator: filters.doid.operator as any,
        value: filters.doid.value.trim(),
      }
    }

    if (filters.diseaseAliases?.value?.trim()) {
      query.diseaseAliases = {
        operator: filters.diseaseAliases.operator as any,
        value: filters.diseaseAliases.value.trim(),
      }
    }

    if (filters.deprecated?.value !== undefined) {
      query.deprecated = { value: filters.deprecated.value }
    }

    return query
  }

  hasValidSearch(model: DiseaseSearchFormModel): boolean {
    const filters = model.filters
    return !!(
      filters.id?.value ||
      filters.name?.value?.trim() ||
      filters.doid?.value?.trim() ||
      filters.diseaseAliases?.value?.trim() ||
      filters.deprecated?.value !== undefined
    )
  }

  updatePermalinkUrl(permalinkId: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { p: permalinkId },
      queryParamsHandling: 'merge',
    })
  }

  loadFromPermalink(permalinkId: string) {
    this.apollo
      .query({
        query: this.searchByPermalinkGQL.document,
        variables: { permalinkId },
      })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (result: any) => {
          this.results$.next(result.data.searchByPermalink)
          // Set up reactive search for subsequent form changes
          this.setupReactiveSearch()
        },
        error: (error) => {
          console.error('Permalink load error:', error)
        },
      })
  }

  clearFilters() {
    this.form.reset()
    this.results$.next(null)
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
    })
  }
}
