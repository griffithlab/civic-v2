import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  model,
  output,
  signal,
  WritableSignal,
} from '@angular/core'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { UntypedFormGroup } from '@angular/forms'
import {
  BooleanOperator,
  GetOriginalQueryGQL,
} from '@app/generated/civic.apollo'
import {
  AdvancedSearchEndpoint,
  AdvancedSearchService,
  QueryBuilderFormModel,
  QueryBuilderResult,
} from '@app/forms/config/query-builder/query-builder.types'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { catchError, EMPTY, tap } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc/dist/esm/util'
import { filter, switchMap } from 'rxjs/operators'
import { toObservable } from '@angular/core/rxjs-interop'
import { getQueryFieldConfig } from '@app/forms/config/query-builder/field-config/functions/get-query-field-config'
import { AdvancedSearchRegistry } from './query-builder.service'
import { EntityCacheRegistry } from './field-config/entity-cache/entity-cache.registry'
import { ApolloError } from '@apollo/client/core'
import { Apollo } from 'apollo-angular'

const defaultQueryBuilderFormModel: QueryBuilderFormModel = {
  query: {
    booleanOperator: BooleanOperator.And,
    subFilters: [],
  },
  createPermalink: true,
}

@UntilDestroy()
@Component({
  selector: 'cvc-query-builder-form',
  templateUrl: './query-builder.form.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcQueryBuilderForm {
  searchEndpoint = model.required<AdvancedSearchEndpoint>()
  permalinkId = model<string>()
  resultIds = output<number[]>()

  searchResults = output<QueryBuilderResult>()
  formModel: WritableSignal<QueryBuilderFormModel> = signal(
    defaultQueryBuilderFormModel
  )
  private advancedSearch = inject(AdvancedSearchRegistry)
  private entityCacheRegistry = inject(EntityCacheRegistry)
  private apollo = inject(Apollo)

  formGQL = computed<AdvancedSearchService>(() => {
    const endpoint = this.searchEndpoint()
    return this.advancedSearch.getService(endpoint)
  })
  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[] = []
  options: FormlyFormOptions = { formState: { formLayout: 'inline' } }

  getOriginalQueryGQL = inject(GetOriginalQueryGQL)

  // flag to prevent permalink model from being overwritten
  private permalinkSearchEndpoint?: string

  // if permalinkId provided, fetch original query
  private permalinkId$ = toObservable(this.permalinkId).pipe(
    tap((id) => console.log('permalinkId$:', id))
  )

  constructor() {
    // EFFECT: when search endpoint changes, always switch fields first
    // then reset the model to the default, but do NOT overwrite
    // a model that was just loaded from a permalink
    effect(() => {
      const endpoint = this.searchEndpoint()
      console.log('form searchEndpoint effect:', endpoint)
      this.options = {
        ...this.options,
        formState: {
          ...this.options.formState,
          formLayout: 'inline',
          searchEndpoint: endpoint,
          submitQuery: this.onSubmit.bind(this),
          clearForm: this.onClearForm.bind(this),
          entityCacheRegistry: this.entityCacheRegistry,
          apollo: this.apollo,
        },
      }

      // update root field config
      this.fields = getQueryFieldConfig(
        'query',
        endpoint,
        this.searchEndpointToCardTitle(endpoint)
      )
      // only reset model if this change did not originate from a permalink
      if (endpoint !== this.permalinkSearchEndpoint) {
        this.resetModel()
        // unset the permalink endpoint flag
        this.permalinkSearchEndpoint = undefined
      }
    })

    // SUBSCRIPTION: handle permalink query results: emit result IDs, update form model
    this.permalinkId$
      .pipe(
        filter(isNonNulled),
        switchMap((id) => {
          return this.getOriginalQueryGQL.fetch({ permalinkId: id }).pipe(
            pluck('data', 'searchByPermalink'),
            filter(isNonNulled),
            catchError((err) => {
              console.error('Error fetching permalink query:', err)
              this.onError(err)
              return EMPTY
            })
          )
        }),
        untilDestroyed(this)
      )
      .subscribe((result) => {
        const { searchEndpoint, formQuery, permalinkId, resultIds } = result
        this.permalinkSearchEndpoint = searchEndpoint
        this.onResults(
          searchEndpoint as AdvancedSearchEndpoint,
          resultIds,
          permalinkId
        )
        if (formQuery) {
          this.formModel.update((value) => {
            return {
              ...value,
              query: structuredClone(
                formQuery
              ) as QueryBuilderFormModel['query'],
            }
          })
        } else {
          console.error('searchByPermalink results did not include a formModel')
        }
      })
  }

  onSubmit() {
    const model = this.form.value
    const endpoint = this.searchEndpoint()
    const gql = this.formGQL()

    gql
      .fetch(model)
      .pipe(
        pluck('data', endpoint),
        catchError((err) => {
          this.onError(err)
          return EMPTY
        }),
        untilDestroyed(this)
      )
      .subscribe(({ resultIds, permalinkId, searchEndpoint }) => {
        this.onResults(searchEndpoint, resultIds, permalinkId)
        this.permalinkId.update(() => permalinkId)
      })
  }

  onResults(
    endpoint: AdvancedSearchEndpoint,
    resultIds: number[],
    permalinkId?: string
  ): void {
    let result: QueryBuilderResult
    if (resultIds.length === 0) {
      result = {
        status: 'empty',
        endpoint,
        permalinkId,
      }
    } else {
      result = {
        status: 'ok',
        endpoint,
        resultIds,
        permalinkId,
      }
    }
    this.searchResults.emit(result)
  }

  onError(error: ApolloError) {
    const result: QueryBuilderResult = {
      status: 'error',
      error,
    }
    this.searchResults.emit(result)
  }

  onClearForm() {
    this.resetModel()
    this.searchResults.emit({
      status: 'reset',
    })
  }

  private resetModel() {
    this.formModel.set(structuredClone(defaultQueryBuilderFormModel))
    if (this.options.resetModel && this.options.updateInitialValue) {
      this.options.updateInitialValue(
        structuredClone(defaultQueryBuilderFormModel)
      )
      this.options.resetModel()
    }
  }

  private searchEndpointToCardTitle(endpoint: AdvancedSearchEndpoint): string {
    const capitalized = endpoint.charAt(0).toUpperCase() + endpoint.slice(1)
    return capitalized.replace(/([A-Z])/g, ' $1').trim()
  }
}
