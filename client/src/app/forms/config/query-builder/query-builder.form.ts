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
  Maybe,
} from '@app/generated/civic.apollo'
import {
  AdvancedSearchEndpoint,
  AdvancedSearchService,
  QueryBuilderFormModel,
  QueryBuilderResult,
} from '@app/forms/config/query-builder/query-builder.types'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { catchError, EMPTY } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc/dist/esm/util'
import { filter, switchMap } from 'rxjs/operators'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { getQueryFieldConfig } from '@app/forms/config/query-builder/field-config/functions/get-query-field-config'
import { AdvancedSearchRegistry } from './query-builder.service'
import { ApolloError } from '@apollo/client/core'

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
  searchResultsDISPLAY = signal<Maybe<QueryBuilderResult>>(undefined)
  formModel: WritableSignal<QueryBuilderFormModel> = signal(
    defaultQueryBuilderFormModel
  )
  private advancedSearch = inject(AdvancedSearchRegistry)

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
  // flag to prevent double-querying permalinkIds
  private permalinkQueryId?: string

  // if permalinkId provided, fetch original query
  // NOTE: results are handled by permalink effect below
  private permalinkId$ = toObservable(this.permalinkId)
  permalinkQuery = toSignal(
    this.permalinkId$.pipe(
      filter(isNonNulled),
      filter((id) => id !== this.permalinkQueryId),
      switchMap((id) =>
        this.getOriginalQueryGQL.fetch({ permalinkId: id }).pipe(
          pluck('data', 'searchByPermalink'),
          filter(isNonNulled),
          catchError((err) => {
            console.error('Error fetching permalink query:', err)
            this.onError(err)
            return EMPTY
          })
        )
      )
    )
  )

  constructor() {
    // when search endpoint changes, always switch fields first
    // then reset the model to the default, but do NOT overwrite
    // a model that was just loaded from a permalink
    effect(() => {
      const endpoint = this.searchEndpoint()
      this.options = {
        ...this.options,
        formState: {
          ...this.options.formState,
          formLayout: 'inline',
          searchEndpoint: endpoint,
          submitQuery: this.onSubmit.bind(this),
          resetForm: this.onReset.bind(this),
        },
      }

      // update root builder card field config
      this.fields = getQueryFieldConfig(
        'query',
        endpoint,
        this.searchEndpointToCardTitle(endpoint)
      )
      // only reset model if this change did not originate from a permalink
      if (endpoint !== this.permalinkSearchEndpoint) {
        this.formModel.set(structuredClone(defaultQueryBuilderFormModel))
        if (this.options.resetModel && this.options.updateInitialValue) {
          this.options.updateInitialValue(
            structuredClone(defaultQueryBuilderFormModel)
          )
          this.options.resetModel()
        }
        this.permalinkSearchEndpoint = undefined
      }
    })

    // handle permalink query results: emit result IDs, update form model
    effect(() => {
      const result = this.permalinkQuery()
      if (result) {
        const { searchEndpoint, formQuery, permalinkId, resultIds } = result
        // Set permalink endpoint flag so that the searchEndpoint effect logic
        // won't overwrite the model returned from the permalink query
        this.permalinkSearchEndpoint = searchEndpoint
        // Update parent search page (which might need to change the tab),
        // and triggers effect to generate this endpoint's field configuration
        // this.searchEndpoint.update(
        //   () => searchEndpoint as AdvancedSearchEndpoint
        // )
        // emit permalink to parent search page so it can append permalinkId to URL
        // this.permalinkId.update(() => permalinkId)
        // emit resultIds to parent search page for display in results table
        // this.resultIds.emit([...resultIds])
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
      }
    })
  }

  onSubmit() {
    const model = this.form.value
    const endpoint = this.searchEndpoint()
    const gql = this.formGQL()

    gql
      .fetch(model) // variables typed as any; runtime-checked by backend
      .pipe(
        pluck('data', endpoint),
        catchError((err) => {
          console.error('Error on query:', err)
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
    // set permalink id flag to prevent double-query
    this.permalinkQueryId = permalinkId
    this.searchResultsDISPLAY.set(result)
    this.searchResults.emit(result)
  }

  onError(error: ApolloError) {
    // differentiate network errors (500, 401) from query errors (graphql errors with 200 status code)
    console.error('Error on query:', error)
    const result: QueryBuilderResult = {
      status: 'error',
      error,
    }
    this.searchResultsDISPLAY.set(result)
    this.searchResults.emit(result)
  }

  onReset() {}
  private searchEndpointToCardTitle(endpoint: AdvancedSearchEndpoint): string {
    // Capitalize initial character
    const capitalized = endpoint.charAt(0).toUpperCase() + endpoint.slice(1)
    // Split on capital letters and join with space
    return capitalized.replace(/([A-Z])/g, ' $1').trim()
  }
}
