import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableDrug {
  id: number,
  name: string,
  link: string,
}

@Component({
  selector: 'cvc-drug-tag',
  templateUrl: './cvc-drug-tag.component.html',
  styleUrls: ['./cvc-drug-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcDrugTagComponent extends BaseCloseableTag implements OnInit {
  _drug!: LinkableDrug
  @Input()
  set drug(d: LinkableDrug) {
    if (!d) throw new Error('drug-tag drug Input requires LinkableDrug.');
    this._drug = d;
  }
  get drug(): LinkableDrug { return this._drug }

  @Input() enablePopover: Maybe<boolean> = true
  @Input() truncateLongName: Maybe<boolean> = false

  idFunction(): number {
    return this.drug.id;
  }

}
