import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  selector: 'cvc-search-button-type',
  templateUrl: './search-button.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class SearchButtonType extends FieldType<any> {
  defaultOptions = {
    templateOptions: {
      submitLabel: 'Search',
      submitSize: 'small',
    },
  }

  constructor() {
    super()
  }
}

export const SearchButtonTypeOption = {
  name: 'search-button',
  component: SearchButtonType,
}
