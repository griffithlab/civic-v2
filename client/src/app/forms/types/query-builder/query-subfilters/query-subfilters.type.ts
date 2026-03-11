import { Component } from '@angular/core'
import { FieldArrayType } from '@ngx-formly/core'

@Component({
  selector: 'query-subfilters',
  templateUrl: './query-subfilters.type.html',
  styleUrls: ['./query-subfilters.type.less'],
  standalone: false,
})
export class CvcQuerySubfiltersField extends FieldArrayType {
  constructor() {
    super()
  }

  addRow(initialModel?: any) {
    super.add(undefined, initialModel)
  }
  removeRow(index: number) {
    super.remove(index)
  }
}
