import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import {
  EvidenceForGeneGQL,
} from '@app/generated/civic.apollo';

import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { NameAndValue } from '@app/views/curation/curation-stats/curation-charts/curation-charts.page';
import { throwServerError } from '@apollo/client/core';

@Component({
  selector: 'cvc-genes-impact',
  templateUrl: './genes-impact.page.html',
  styleUrls: ['./genes-impact.page.less'],
})
export class GenesImpactPage implements OnDestroy {
  geneId?: number

  diseaseData?: NameAndValue[]
  typeData?: NameAndValue[]

  selectedDiseaseName?: string
  
  viewer$?: Observable<Viewer>;
  routeSub: Subscription

  constructor(
    private evidenceForGeneGql: EvidenceForGeneGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.viewer$ = this.viewerService.viewer$;
      this.geneId = +params.geneId

      this.evidenceForGeneGql.fetch({ geneId: this.geneId }).toPromise().then((res) => {
        if(res.data) {
          this.diseaseData = res.data.evidenceForGene.evidenceByDisease
          console.log(this.diseaseData)
          Object.assign(this, this.diseaseData)
          this.typeData = res.data.evidenceForGene.evidenceByType
          Object.assign(this, this.typeData)
        }
      })
    });
  }

  diseaseChartClicked(data: NameAndValue): void {
    if (this.diseaseData) {
      let item = this.diseaseData.find(d => d.name == data.name)
      if (item && item.entityId && this.geneId) {
        this.selectedDiseaseName = item.name
        this.evidenceForGeneGql.fetch({ geneId: this.geneId, diseaseId: item.entityId }).toPromise().then((res) => {
          if(res.data) {
            this.typeData = res.data.evidenceForGene.evidenceByType
            Object.assign(this, this.typeData)
          }
        })
      }
    }
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
