import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  signal,
  WritableSignal,
} from '@angular/core'
import { AdvancedSearchResult, Maybe } from '@app/generated/civic.apollo'
import { CvcQueryBuilderForm } from '@app/forms/config/query-builder/query-builder.form'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'cvc-query-search-page',
  templateUrl: './query-search.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CvcQueryBuilderForm],
})
export class QuerySearchPage {
  searchEndpoint = model.required<string>()
  permalinkId = input<Maybe<string>>()
  results: WritableSignal<Maybe<AdvancedSearchResult>> = signal(undefined)
}
