import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  model,
  output,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { UntypedFormGroup } from '@angular/forms'
import {
  BooleanOperator,
  GetOriginalQueryGQL,
} from '@app/generated/civic.apollo'
import {
  QueryBuilderFormModel,
  QueryBuilderSearchEndpoint,
} from '@app/forms/config/query-builder/query-builder.types'
import { UntilDestroy } from '@ngneat/until-destroy'
import { catchError, EMPTY } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc/dist/esm/util'
import { filter, switchMap } from 'rxjs/operators'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { getFieldConfig } from '@app/forms/config/query-builder/field-config/functions/get-field-config'

const defaultQueryBuilderFormModel: QueryBuilderFormModel = {
  query: {
    booleanOperator: BooleanOperator.Or,
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
  searchEndpoint = model.required<QueryBuilderSearchEndpoint>()
  permalinkId = model<string>()
  resultIds = output<number[]>()

  formModel: WritableSignal<QueryBuilderFormModel> = signal(
    defaultQueryBuilderFormModel
  )

  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[] = []
  options: Signal<FormlyFormOptions> = computed(() => ({
    formState: {
      formLayout: 'inline',
      searchEndpoint: this.searchEndpoint(),
    },
  }))

  getOriginalQueryGQL = inject(GetOriginalQueryGQL)

  private permalinkId$ = toObservable(this.permalinkId)
  private permalinkQuery = toSignal(
    this.permalinkId$.pipe(
      filter(isNonNulled), // Only fetch if permalinkId is not null/undefined
      switchMap((id) =>
        this.getOriginalQueryGQL.fetch({ permalinkId: id }).pipe(
          pluck('data', 'searchByPermalink'), // Get the nested data
          filter(isNonNulled), // Ensure it's not null
          catchError((err) => {
            console.error('Error fetching permalink query:', err)
            return EMPTY // On error, emit nothing and complete
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
      const ep = this.searchEndpoint()
      // always update fields to match endpoint
      this.fields = getFieldConfig(
        ep,
        'query-builder-card',
        this.searchEndpointToCardTitle(ep)
      )
      // only reset model if this change did not originate from a permalink
      if (ep !== this.permalinkSearchEndpoint) {
        this.formModel.update(() => defaultQueryBuilderFormModel)
        this.permalinkSearchEndpoint = undefined
      }
    })

    // load form model from permalink if provided
    effect(() => {
      const query = this.permalinkQuery()
      if (query) {
        const { searchEndpoint, formQuery, permalinkId } = query
        this.permalinkSearchEndpoint = searchEndpoint // Set the flag so the reset effect won't overwrite the model
        this.searchEndpoint.update(
          () => searchEndpoint as QueryBuilderSearchEndpoint
        ) // Update parent (triggers fields update)
        this.permalinkId.update(() => permalinkId) // Update parent
        if (formQuery) {
          this.formModel.update((value) => {
            return {
              ...value,
              query: { ...formQuery },
            }
          })
        } else {
          console.error('searchByPermalink results did not include a formModel')
        }
      }
    })
  }
  private searchEndpointToCardTitle(
    endpoint: QueryBuilderSearchEndpoint
  ): string {
    // Capitalize initial character
    const capitalized = endpoint.charAt(0).toUpperCase() + endpoint.slice(1)
    // Split on capital letters and join with space
    return capitalized.replace(/([A-Z])/g, ' $1').trim()
  }
}
