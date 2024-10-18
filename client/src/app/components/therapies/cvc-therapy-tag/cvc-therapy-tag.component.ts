import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableTherapy {
  id: number
  name: string
  link: string
  deprecated: boolean
}

@Component({
  selector: 'cvc-therapy-tag',
  templateUrl: './cvc-therapy-tag.component.html',
  styleUrls: ['./cvc-therapy-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcTherapyTagComponent {
  _therapy!: LinkableTherapy
  @Input()
  set therapy(d: LinkableTherapy) {
    if (!d) throw new Error('therapy-tag Input requires LinkableTherapy.')
    this._therapy = d
  }
  get therapy(): LinkableTherapy {
    return this._therapy
  }

  @Input() enablePopover?: boolean = true
  @Input() truncateLongName?: boolean = false
  @Input() linked?: boolean = true

  idFunction(): number {
    return this.therapy.id
  }
}
