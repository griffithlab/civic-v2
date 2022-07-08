import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableGene {
  id: number;
  name: string;
  link: string;
}

@Component({
  selector: 'cvc-gene-tag',
  templateUrl: './gene-tag.component.html',
  styleUrls: ['./gene-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcGeneTagComponent extends BaseCloseableTag implements OnInit {
  @Input() gene!: LinkableGene;
  @Input() enablePopover: Maybe<boolean> = true
  @Input() truncateLongName: Maybe<boolean> = false

  constructor() {
    super();
  }

  idFunction(): number {
    return this.gene.id;
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.gene === undefined) {
      throw new Error(
        'cvc-gene-tag requires LinkableGene input, none supplied.'
      );
    }
  }
}
