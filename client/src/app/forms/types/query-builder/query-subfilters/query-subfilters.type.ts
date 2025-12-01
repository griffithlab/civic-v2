import { AfterViewInit, Component, OnInit } from '@angular/core'
import { FieldArrayType } from '@ngx-formly/core'

@Component({
  selector: 'query-subfilters',
  templateUrl: './query-subfilters.type.html',
  styleUrls: ['./query-subfilters.type.less'],
  standalone: false,
})
export class CvcQuerySubfiltersField
  extends FieldArrayType
  implements OnInit, AfterViewInit
{
  constructor() {
    super()
  }

  addRow() {
    super.add()
  }
  removeRow(index: number) {
    super.remove(index)
  }

  ngOnInit(): void {
    this.props.isRootFilter = this.field.parent?.key === 'query'
  }
  ngAfterViewInit(): void {
    // if (this.field.fieldGroup?.length === 0) {
    //   console.log(`--- no model rows, adding undefined filter`)
    //   this.addRow()
    // }
  }
}
