import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-genes-flags',
  templateUrl: './genes-flags.component.html',
  styleUrls: ['./genes-flags.component.less']
})


export class GenesFlagsComponent implements OnInit {

  flaggable: FlaggableInput

  constructor(
      private route: ActivatedRoute
    ) {
    const geneId: number = +this.route.snapshot.params['geneId']; 
    
    this.flaggable = {
      entityType: FlaggableEntities.Gene,
      id: geneId
    }
    
  }

  ngOnInit(): void {
  }

}
