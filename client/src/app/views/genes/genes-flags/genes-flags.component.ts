import { Component, OnInit } from '@angular/core';
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-genes-flags',
  templateUrl: './genes-flags.component.html',
  styleUrls: ['./genes-flags.component.less']
})


export class GenesFlagsComponent implements OnInit {

  flaggable: FlaggableInput

  constructor() { 
    this.flaggable = {
      entityType: FlaggableEntities.Gene,
      id: 5
    }
    
  }

  ngOnInit(): void {
  }

}
