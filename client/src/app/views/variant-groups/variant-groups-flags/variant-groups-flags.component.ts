import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-variant-groups-flags',
  templateUrl: './variant-groups-flags.component.html',
  styleUrls: ['./variant-groups-flags.component.less']
})
export class VariantGroupsFlagsComponent {

  flaggable: FlaggableInput

  constructor(private route: ActivatedRoute) {
    const variantGroupId: number = +this.route.snapshot.params['variantGroupId'];

    this.flaggable = {
      entityType: FlaggableEntities.VariantGroup,
      id: variantGroupId
    }

  }
}
