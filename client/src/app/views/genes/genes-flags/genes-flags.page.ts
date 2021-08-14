import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-genes-flags',
  templateUrl: './genes-flags.page.html',
  styleUrls: ['./genes-flags.page.less']
})

export class GenesFlagsPage implements OnInit {

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
