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
  QueryBuilderSearchEndpoint,
} from '@app/forms/config/query-builder/query-builder.types'
import { UntilDestroy } from '@ngneat/until-destroy'
import { catchError, EMPTY } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc/dist/esm/util'
import { filter, switchMap } from 'rxjs/operators'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { getQueryFieldConfig } from '@app/forms/config/query-builder/field-config/functions/get-query-field-config'
import { AdvancedSearchRegistry } from './query-builder.service'

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

  private permalinkId$ = toObservable(this.permalinkId)
  permalinkQuery = toSignal(
    this.permalinkId$.pipe(
      filter(isNonNulled), // Only fetch if permalinkId is not null/undefined
      switchMap((id) =>
        this.getOriginalQueryGQL.fetch({ permalinkId: id }).pipe(
          pluck('data', 'searchByPermalink'),
          filter(isNonNulled),
          catchError((err) => {
            console.error('Error fetching permalink query:', err)
            return EMPTY
          })
        )
      )
    )
  )

  private permalinkSearchEndpoint?: string
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
        // this.formModel.update(() =>
        //   structuredClone(defaultQueryBuilderFormModel)
        // )
        if (this.options.resetModel && this.options.updateInitialValue) {
          this.options.updateInitialValue(
            structuredClone(defaultQueryBuilderFormModel)
          )
          this.options.resetModel()
        }
        this.permalinkSearchEndpoint = undefined
      }
    })

    // load form model from permalink if provided
    effect(() => {
      const query = this.permalinkQuery()
      if (query) {
        const { searchEndpoint, formQuery, permalinkId, resultIds } = query
        this.permalinkSearchEndpoint = searchEndpoint // Set the flag so the searchEndpoint effect won't overwrite the model
        this.searchEndpoint.update(
          () => searchEndpoint as QueryBuilderSearchEndpoint
        ) // Update parent (triggers fields update)
        this.permalinkId.update(() => permalinkId) // Update parent
        this.resultIds.emit([...resultIds])
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
  onFormModelChange(model: QueryBuilderFormModel) {
    console.log('!!!! query-builder model', model)
  }
  onSubmit() {
    const model = this.formModel()
    // const model = this.form.value as QueryBuilderFormModel
    const endpoint = this.searchEndpoint()
    const gql = this.formGQL()

    gql
      .fetch(model) // variables typed as any; runtime-checked by backend
      .pipe(
        pluck('data', endpoint)
        // ...
      )
      .subscribe(({ ids, permalinkId }) => {
        this.resultIds.emit(ids)
        this.permalinkId.update(() => permalinkId)
      })
  }

  onReset() {}
  private searchEndpointToCardTitle(
    endpoint: QueryBuilderSearchEndpoint
  ): string {
    // Capitalize initial character
    const capitalized = endpoint.charAt(0).toUpperCase() + endpoint.slice(1)
    // Split on capital letters and join with space
    return capitalized.replace(/([A-Z])/g, ' $1').trim()
  }
}
