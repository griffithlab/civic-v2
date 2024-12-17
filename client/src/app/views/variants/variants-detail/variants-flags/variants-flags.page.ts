import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-variants-flags',
  templateUrl: './variants-flags.page.html',
  styleUrls: ['./variants-flags.page.less'],
  standalone: false,
})
export class VariantsFlagsPage {
  flaggable: FlaggableInput

  constructor(private route: ActivatedRoute) {
    const variantId: number = +this.route.snapshot.params['variantId']

    this.flaggable = {
      entityType: FlaggableEntities.Variant,
      id: variantId,
    }
  }
}
