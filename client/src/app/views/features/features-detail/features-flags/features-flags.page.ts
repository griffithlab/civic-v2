import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-features-flags',
  templateUrl: './features-flags.page.html',
  styleUrls: ['./features-flags.page.less'],
})
export class FeaturesFlagsPage implements OnInit {
  flaggable: FlaggableInput

  constructor(private route: ActivatedRoute) {
    const geneId: number = +this.route.snapshot.params['featureId']

    this.flaggable = {
      entityType: FlaggableEntities.Feature,
      id: geneId,
    }
  }

  ngOnInit(): void {}
}
