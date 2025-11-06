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
import { QueryBuilderFormModel } from '@app/forms/config/query-builder/query-builder.types'
import { UntilDestroy } from '@ngneat/until-destroy'
import { catchError, EMPTY } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc/dist/esm/util'
import { filter, switchMap } from 'rxjs/operators'
import { queryBuilderFieldsConfig } from '@app/forms/config/query-builder/field-config/query-builder-fields.config'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'

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
  searchEndpoint = model.required<string>()
  permalinkId = model<string>()
  resultIds = output<number[]>()

  formModel: WritableSignal<QueryBuilderFormModel> = signal(
    defaultQueryBuilderFormModel
  )

  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[] = queryBuilderFieldsConfig
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
    // reset the form model when search endpoint changes,
    // but only if it will not overwrite a formModel returned
    // from a permalink query
    effect(() => {
      if (this.searchEndpoint() !== this.permalinkSearchEndpoint) {
        this.formModel.update(() => defaultQueryBuilderFormModel)
        this.permalinkSearchEndpoint = undefined
      }
    })
    // load form model from permalink if provided
    effect(() => {
      const query = this.permalinkQuery() // Track the new signal
      if (query) {
        const { searchEndpoint, formQuery, permalinkId } = query
        this.permalinkSearchEndpoint = searchEndpoint // Set the flag
        this.searchEndpoint.update(() => searchEndpoint) // Update parent
        this.permalinkId.update(() => permalinkId) // Update parent
        if (formQuery) {
          this.formModel.update((value) => {
            return {
              ...value,
              query: formQuery,
            }
          })
        } else {
          console.error('searchByPermalink results did not include a formModel')
        }
      }
    })
  }
}
