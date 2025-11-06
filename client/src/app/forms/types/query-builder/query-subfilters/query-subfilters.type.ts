import { Component } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  selector: 'query-subfilters',
  templateUrl: './query-subfilters.type.html',
  standalone: false,
})
export class CvcQuerySubfiltersField extends FieldType {
  constructor() {
    super()
  }
}
