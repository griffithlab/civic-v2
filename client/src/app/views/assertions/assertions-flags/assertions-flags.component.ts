import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-assertions-flags',
  templateUrl: './assertions-flags.component.html',
  styleUrls: ['./assertions-flags.component.less']
})


export class AssertionsFlagsComponent {

  flaggable: FlaggableInput

  constructor( private route: ActivatedRoute) {
    const assertionId: number = +this.route.snapshot.params['assertionId']; 
    
    this.flaggable = {
      entityType: FlaggableEntities.Assertion,
      id: assertionId
    }
    
  }
}
