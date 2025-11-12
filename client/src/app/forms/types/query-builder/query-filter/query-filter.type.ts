import { Component } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  selector: 'query-filter',
  templateUrl: './query-filter.type.html',
  standalone: false,
})
export class CvcQueryFilterField extends FieldType {
  constructor() {
    super()
  }
}
