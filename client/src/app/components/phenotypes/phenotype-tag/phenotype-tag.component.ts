import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkablePhenotype {
  id: number;
  name: string;
  link: string;
}

@Component({
  selector: 'cvc-phenotype-tag',
  templateUrl: './phenotype-tag.component.html',
  styleUrls: ['./phenotype-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcPhenotypeTagComponent extends BaseCloseableTag {
  _phenotype!: LinkablePhenotype;
  @Input()
  set phenotype(ph: LinkablePhenotype) {
    if (!ph)
      throw new Error(
        'phenotype-tag phentype input requires LinkablePhenotype.'
      );
    this._phenotype = ph;
  }
  get phenotype(): LinkablePhenotype {
    return this._phenotype;
  }

  @Input() enablePopover: Maybe<boolean> = true;

  idFunction(): number {
    return this.phenotype.id;
  }
}
