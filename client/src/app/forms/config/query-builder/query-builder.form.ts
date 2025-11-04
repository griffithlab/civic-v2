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
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core'
import { UntypedFormGroup } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcForms2Module } from '@app/forms/forms.module'
import {
  AdvancedSearchResult,
  GetOriginalQueryGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { QueryBuilderFormModel } from '@app/forms/config/query-builder/query-builder.types'
import { UntilDestroy } from '@ngneat/until-destroy'
import { take } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc/dist/esm/util'
import { filter } from 'rxjs/operators'

@UntilDestroy()
@Component({
  selector: 'cvc-query-builder-form',
  templateUrl: './query-builder.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormlyModule, NzFormModule, CvcForms2Module],
})
export class CvcQueryBuilderForm {
  searchEndpoint = model<string>()
  permalinkId = model<Maybe<string>>()

  results = output<AdvancedSearchResult>()

  formModel: WritableSignal<Maybe<QueryBuilderFormModel>> =
    signal<Maybe<QueryBuilderFormModel>>(undefined)
  result = output<AdvancedSearchResult>()

  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[] = []
  options: FormlyFormOptions = { formState: { formLayout: 'inline' } }

  searchByPermalinkGQL = inject(GetOriginalQueryGQL)
  constructor() {
    effect(() => {
      if (this.permalinkId() !== undefined) {
        this.searchByPermalinkGQL
          .fetch({ permalinkId: this.permalinkId()! })
          .pipe(pluck('data'), filter(isNonNulled), take(1))
          .subscribe((res) => {
            console.log('permalink search results:', res.searchByPermalink)
            this.results.emit(res.searchByPermalink as AdvancedSearchResult)
          })
      }
    })
  }
}
