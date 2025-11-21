import { AfterViewInit, Component } from '@angular/core'
import { FieldArrayType } from '@ngx-formly/core'

@Component({
  selector: 'query-subfilters',
  templateUrl: './query-subfilters.type.html',
  standalone: false,
})
export class CvcQuerySubfiltersField
  extends FieldArrayType
  implements AfterViewInit
{
  constructor() {
    super()
  }
  addRow() {
    super.add(undefined, {})
  }
  removeRow(index: number) {
    console.log('removing row', index)
    super.remove(index)
  }

  ngAfterViewInit(): void {
    console.log(`query-subfilters OnInit: ${this.field.id}`)
    // if (this.field.fieldGroup?.length === 0) {
    //   console.log(`--- no model rows, adding undefined filter`)
    //   this.addRow()
    // }
  }
}
