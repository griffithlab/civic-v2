import { Component } from '@angular/core'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'

@Component({
  selector: 'struct-filter',
  templateUrl: './struct-filter.type.html',
  styleUrl: './struct-filter.type.less',
  standalone: false,
})
export class CvcStructFilterField extends FieldType<FieldTypeConfig> {
  constructor() {
    super()
  }
}
