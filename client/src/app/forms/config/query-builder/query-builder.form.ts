import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  model,
  output,
  signal,
  WritableSignal,
} from '@angular/core'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { UntypedFormGroup } from '@angular/forms'
import { GetOriginalQueryGQL } from '@app/generated/civic.apollo'
import { QueryBuilderFormModel } from '@app/forms/config/query-builder/query-builder.types'
import { UntilDestroy } from '@ngneat/until-destroy'
import { take } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc/dist/esm/util'
import { filter } from 'rxjs/operators'
import { queryBuilderFieldsConfig } from '@app/forms/config/query-builder/query-builder-fields.config'

const defaultQueryBuilderFormModel: QueryBuilderFormModel = {
  query: {
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
  // keeps track of permalink-loaded searchEndpoints,
  // so that the form model update effect doesn't replace
  // the permalink form model with the default, in the case
  // a permalinkId param is provided on the wrong searchEndpoint route
  private permalinkSearchEndpoint?: string

  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[] = queryBuilderFieldsConfig
  options: FormlyFormOptions = { formState: { formLayout: 'inline' } }

  getOriginalQueryGQL = inject(GetOriginalQueryGQL)
  constructor() {
    // update form model, unset permalinkId when searchEndpoint changes
    effect(() => {
      if (this.searchEndpoint() !== this.permalinkSearchEndpoint) {
        this.formModel.update(() => defaultQueryBuilderFormModel)
        this.permalinkSearchEndpoint = undefined
      }
    })
    // load form model from permalink if provided
    effect(() => {
      if (this.permalinkId() !== undefined) {
        this.getOriginalQueryGQL
          .fetch({ permalinkId: this.permalinkId()! })
          .pipe(pluck('data'), filter(isNonNulled), take(1))
          .subscribe((query) => {
            const { searchEndpoint, formQuery, permalinkId } =
              query.searchByPermalink
            this.permalinkSearchEndpoint = searchEndpoint
            this.searchEndpoint.update(() => searchEndpoint)
            this.permalinkId.update(() => permalinkId)
            if (formQuery) {
              this.formModel.update((value) => {
                return {
                  ...value,
                  query: formQuery,
                }
              })
            } else {
              console.error(
                'searchByPermalink results did not include a formModel'
              )
            }
          })
      }
    })
  }
}
