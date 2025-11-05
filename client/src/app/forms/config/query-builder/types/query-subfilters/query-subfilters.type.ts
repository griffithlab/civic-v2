import { Component } from '@angular/core'
import { FieldArrayType } from '@ngx-formly/core'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'

@Component({
  selector: 'query-subfilters',
  templateUrl: './query-subfilters.type.html',
  standalone: true,
  imports: [CommonModule, NzGridModule, NzCardModule],
})
export class CvcQuerySubfiltersField extends FieldArrayType {}
