import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

import { Maybe } from '@app/generated/civic.apollo'

export interface LinkablePhenotype {
  id: number
  name: string
  link: string
}

@Component({
  selector: 'cvc-phenotype-tag',
  templateUrl: './phenotype-tag.component.html',
  styleUrls: ['./phenotype-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcPhenotypeTagComponent {
  _phenotype!: LinkablePhenotype
  @Input()
  set phenotype(ph: LinkablePhenotype) {
    if (!ph)
      throw new Error(
        'phenotype-tag phentype input requires LinkablePhenotype.'
      )
    this._phenotype = ph
  }
  get phenotype(): LinkablePhenotype {
    return this._phenotype
  }

  @Input() enablePopover?: boolean = true
  @Input() linked?: boolean = true

  idFunction(): number {
    return this.phenotype.id
  }
}
