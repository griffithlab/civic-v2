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

  get isEmpty(): boolean {
    return !Array.isArray(this.model) || this.model.length === 0
  }

  addRow(initialModel?: any) {
    this.options.formState.showErrors = false
    super.add(undefined, initialModel)
  }
  removeRow(index: number) {
    super.remove(index)
  }
}
