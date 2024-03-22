import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableDisease {
  id: number
  name: string
  link: string
  deprecated: boolean
}

@Component({
  selector: 'cvc-disease-tag',
  templateUrl: './cvc-disease-tag.component.html',
  styleUrls: ['./cvc-disease-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcDiseaseTagComponent extends BaseCloseableTag implements OnInit {
  _disease!: LinkableDisease
  @Input()
  set disease(d: LinkableDisease) {
    if (!d) {
      throw new Error('disease-tag disease Input requires LinkableDisease.')
    }
    this._disease = d
  }
  get disease(): LinkableDisease {
    return this._disease
  }

  @Input() enablePopover: Maybe<boolean> = true
  @Input() truncateLongName: Maybe<boolean> = false

  idFunction() {
    return this.disease.id
  }
}
