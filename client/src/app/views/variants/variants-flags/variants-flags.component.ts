import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-variants-flags',
  templateUrl: './variants-flags.component.html',
  styleUrls: ['./variants-flags.component.less']
})


export class VariantsFlagsComponent {

  flaggable: FlaggableInput

  constructor( private route: ActivatedRoute) {
    const variantId: number = +this.route.snapshot.params['variantId']; 
    
    this.flaggable = {
      entityType: FlaggableEntities.Variant,
      id: variantId
    }
    
  }
}
