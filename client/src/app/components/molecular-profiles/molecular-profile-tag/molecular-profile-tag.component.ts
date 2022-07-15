import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableMolecularProfile {
  id: number;
  name: string;
  link: string;
}

@Component({
  selector: 'cvc-molecular-profile-tag',
  templateUrl: './molecular-profile-tag.component.html',
  styleUrls: ['./molecular-profile-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcMolecularProfileTagComponent extends BaseCloseableTag implements OnInit {
  @Input() molecularProfile!: LinkableMolecularProfile;
  @Input() enablePopover: Maybe<boolean> = true
  @Input() truncateLongName: Maybe<boolean> = false

  constructor() {
    super();
  }

  idFunction(): number {
    return this.molecularProfile.id;
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.molecularProfile === undefined) {
      throw new Error(
        'cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.'
      );
    }
  }
}
