import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
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
import { SearchByPermalinkGQL } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ActivatedRoute } from '@angular/router'

export interface CvcQueryBuilderFormModel {
  query: {
    subFilters: {
      field: string
      operator: string
      value: any
    }[]
  }
}

export const defaultQueryBuildFormModel: CvcQueryBuilderFormModel = {
  query: {
    subFilters: [],
  },
}
@UntilDestroy()
@Component({
  selector: 'cvc-query-builder-form',
  templateUrl: './query-builder.form.html',
  styleUrls: ['./query-builder.form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormlyModule, NzFormModule, CvcForms2Module],
})
export class CvcQueryBuilderForm {
  model = input<CvcQueryBuilderFormModel>(defaultQueryBuildFormModel)
  searchEndpoint = input.required<string>()
  formModel = input<any>(defaultQueryBuildFormModel, { alias: 'cvcFormModel' })
  permalinkId = input<string>()

  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[] = []
  options: FormlyFormOptions = { formState: { formLayout: 'inline' } }

  private searchByPermalink: SearchByPermalinkGQL = inject(SearchByPermalinkGQL)
  private route: ActivatedRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      const permalinkId = params['p']
      if (permalinkId) {
        this.loadFromPermalink(permalinkId)
      } else {
        // this.setupReactiveSearch()
      }
    })
  }
  loadFromPermalink(permalinkId: string) {
    this.searchByPermalink
      .watch({ permalinkId })
      .valueChanges.pipe(untilDestroyed(this))
      .subscribe((res) => {
        if (res.data.searchByPermalink) {
          // this.model.set(res.data.searchByPermalink)
        }
      })
  }
}
