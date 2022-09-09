import { Component, OnInit } from '@angular/core';
import { AmpLevelCountsGQL, EvidenceLevelCountsGQL, EvidenceRatingCountsGQL, EvidenceStatusCountsGQL, EvidenceType, EvidenceTypeCountsGQL, SubsetCountsFragment, SupportCountsFragment, TopDiseasesByEvidenceGQL, TopGenesByVariantsGQL } from '@app/generated/civic.apollo';
import { Router } from '@angular/router';

export interface NameAndValue {
  name: string,
  value: number,
  link?: string,
  entityId?: number
}

@Component({
  selector: 'cvc-curation-charts',
  templateUrl: './curation-charts.page.html',
  styleUrls: ['./curation-charts.page.less']
})
export class CurationChartsPage implements OnInit {
  geneCount?: number
  variantCount?: number
  geneData?: NameAndValue[]

  eidData?: NameAndValue[]
  eidCount?: number
  selectedEvidenceType?: EvidenceType
  eidClinicalSignificanceCounts?: SubsetCountsFragment[]
  eidSupportCounts?: SupportCountsFragment[]

  csData?: NameAndValue[]
  csSupportData?: any
  eidCountForType?: number

  levelData?: NameAndValue[]
  ratingData?: NameAndValue[]
  statusData?: NameAndValue[]

  ampCategoryData?: NameAndValue[]
  assertionWithAmpCategoryCount?: number

  diseaseData?: NameAndValue[]
  diseaseCount?: number
  diseaseEvidenceCount?: number

  //colorScheme = {
  //  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  //};
  colorScheme = {
    domain: ['#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6', '#a6cee3', "#D5D5D5"]
  }

  constructor(
    private topGenesGql: TopGenesByVariantsGQL,
    private topDiseasesGql: TopDiseasesByEvidenceGQL,
    private evidenceTypeCountsGql: EvidenceTypeCountsGQL,
    private evidenceLevelCountsGql: EvidenceLevelCountsGQL,
    private evidenceRatingCountGql: EvidenceRatingCountsGQL,
    private evidenceStatusCountGql: EvidenceStatusCountsGQL,
    private ampLevelCountGql: AmpLevelCountsGQL,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
    this.topGenesGql.fetch().toPromise().then((res) => {
      if(res.data) {
        this.geneData = res.data.topGenesByVariants.counts
        Object.assign(this, this.geneData );
        this.geneCount = res.data.topGenesByVariants.total
        this.variantCount = res.data.topGenesByVariants.secondaryTotal
      }
    })

    this.topDiseasesGql.fetch().toPromise().then((res) => {
      if(res.data) {
        this.diseaseData = res.data.topDiseasesByEvidence.counts
        Object.assign(this, this.diseaseData)
        this.diseaseCount = res.data.topDiseasesByEvidence.total
        this.diseaseEvidenceCount = res.data.topDiseasesByEvidence.secondaryTotal
      }
    })

    this.evidenceTypeCountsGql.fetch().toPromise().then((res) => {
      if (res.data) {
        this.eidData = res.data.evidenceTypeCounts.evidenceTypeCounts.counts
        Object.assign(this, this.eidData)
        this.eidCount = res.data.evidenceTypeCounts.evidenceTypeCounts.total
        this.eidClinicalSignificanceCounts = res.data.evidenceTypeCounts.clinicalSignificanceCounts
        this.eidSupportCounts = res.data.evidenceTypeCounts.supportCounts
      }
    })

    this.evidenceLevelCountsGql.fetch().toPromise().then((res) => {
      if (res.data) {
        this.levelData = res.data.evidenceLevelCounts
        Object.assign(this, this.levelData)
      }
    })

    this.evidenceRatingCountGql.fetch().toPromise().then((res) => {
      if (res.data) {
        this.ratingData = res.data.evidenceRatingCounts
        Object.assign(this, this.ratingData)
      }
    })

    this.evidenceStatusCountGql.fetch().toPromise().then((res) => {
      if (res.data) {
        this.statusData = res.data.evidenceStatusCounts
        Object.assign(this, this.statusData)
      }
    })

    this.ampLevelCountGql.fetch().toPromise().then((res) => {
      if (res.data) {
        this.ampCategoryData = res.data.ampCategoryCounts.counts
        this.assertionWithAmpCategoryCount = res.data.ampCategoryCounts.total
      }
    })
  }

  geneChartClicked(data: NameAndValue): void {
    if (this.geneData) {
      let item = this.geneData.find(g => g.name == data.name)
      if (item && item.link) {
        this.router.navigateByUrl(item.link)
      }
    }
  }

  diseaseChartClicked(data: NameAndValue): void {
    if (this.diseaseData) {
      let item = this.diseaseData.find(d => d.name == data.name)
      if (item && item.link) {
        this.router.navigateByUrl(item.link)
      }
    }
  }

  evidenceTypeChartClicked(data: NameAndValue): void {
    if (this.eidData) {
      this.selectedEvidenceType = data.name as EvidenceType
      let selectedData = this.eidClinicalSignificanceCounts?.find(cs => cs.key == this.selectedEvidenceType)?.counts
      if (selectedData) {
        this.csData = selectedData.counts
        Object.assign(this, this.csData)
        this.eidCountForType = selectedData.total
      }
      let selectedSupportData = this.eidSupportCounts?.find(cs => cs.key == this.selectedEvidenceType)
      if (selectedSupportData) {
        this.csSupportData = selectedSupportData.series
        console.log(this.csSupportData)
        Object.assign(this, this.csSupportData)
      }
    }
  }

  csColors(evidence_type: string) : string[] {
    let color: string[] = []
    switch (evidence_type) {
      case ('Predictive'): {
        color = ["#1F78B4", "#71A9CE", "#C3D9E7", "#e31a1c", "#D5D5D5"]
        break;
      }
      case ('Predisposing'): {
        color = ["#33a02c", "#b2df8a"]
        break;
      }
      case ('Prognostic'): {
        color = ["#ff7f00", "#fed98e"]
        break;
      }
      case ('Diagnostic'): {
        color = ["#01665e", "#80cdc1"]
        break;
      }
      case ('Functional'): {
        color = ["#6a3d9a", "#9574B9", "#C0AAD8", "#ffffbf", "#ae017e", "#D5D5D5"]
        break;
      }
      case ('Oncogenic'): {
        color = ["#e6ab02", "#F1DA9B"]
        break;
      }
    }
    return color
  }
}
