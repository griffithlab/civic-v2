import { Component } from '@angular/core'
import { FieldArrayType } from '@ngx-formly/core'

@Component({
  selector: 'query-subfilters',
  templateUrl: './query-subfilters.type.html',
  standalone: false,
})
export class CvcQuerySubfiltersField extends FieldArrayType {
  constructor() {
    super()
  }
  addRow() {
    console.log('adding row')
    super.add()
  }
}
