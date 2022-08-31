import { Component, OnInit } from '@angular/core';
import { EvidenceType, EvidenceTypeCountsGQL, Maybe, SubsetCountsFragment, TopGenesByVariantsGQL } from '@app/generated/civic.apollo';
import { Chart, ChartData, ChartEvent, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Router } from '@angular/router';
import { reduce } from 'rxjs/operators';
import { valueToObjectRepresentation } from '@apollo/client/utilities';

Chart.register(ChartDataLabels);

@Component({
  selector: 'cvc-curation-charts',
  templateUrl: './curation-charts.page.html',
  styleUrls: ['./curation-charts.page.less']
})
export class CurationChartsPage implements OnInit {
  doughnutOptions: ChartOptions<'doughnut'> = {
    cutout: "75%",
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: false
      },
      tooltip: {
        displayColors: false
      }
    },
  }

  barOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      },
      tooltip: {
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        display: false,
      },
      y: {
        grid: {
          display: false
        },
        afterFit: function(scaleInstance) {
          scaleInstance.width = 150
        },
      },
    },
    layout: {
      padding: 50
    }
  }
    //onHover: (event, chartElement) => {
    //  if (event.native) {
    //    let target = event.native.currentTarget as HTMLElement
    //    target.style.cursor = chartElement[0] ? 'pointer' : 'default';
    //  }
    //},
  

  csLeftBarOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'start',
        align: 'start'
      },
      tooltip: {
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        display: false,
        reverse: true,
        min: 0,
        max: 3000
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        afterFit: function(scaleInstance) {
          scaleInstance.width = 300
        },
      },
    },
    layout: {
      padding: { left: 0, right: 0, top: 50, bottom: 0}
    },
  }

  csRightBarOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      },
      tooltip: {
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        display: false,
        min: 0,
        max: 3000
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        afterFit: function(scaleInstance) {
          scaleInstance.width = 300
        },
        position: 'right',
      },
    },
    layout: {
      padding: { left: 0, right: 0, top: 50, bottom: 0}
    },
  }

  geneDoughnutChartData?: ChartData<'doughnut'>
  geneBarChartData?: ChartData<'bar'>
  geneCount?: number
  variantCount?: number
  links?: Maybe<string>[]

  eidDoughnutChartData?: ChartData<'doughnut'>
  eidBarChartData?: ChartData<'bar'>
  eidCount?: number
  selectedEvidenceType?: EvidenceType
  eidClinicalSignificanceCounts?: SubsetCountsFragment[]
  eidSupportCounts?: SubsetCountsFragment[]
  eidDoesNotSupportCounts?: SubsetCountsFragment[]

  csDoughnutChartData?: ChartData<'doughnut'>
  csSupportBarChartData?: ChartData<'bar'>
  csDoesNotSupportBarChartData?: ChartData<'bar'>
  eidCountForType?: number

  constructor(
    private topGenesGql: TopGenesByVariantsGQL,
    private evidenceTypeCountsGql: EvidenceTypeCountsGQL,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.topGenesGql.fetch().toPromise().then((res) => {
      if(res.data) {
        let dataset = {
          data: res.data.topGenesByVariants.counts.map(g => g.count),
          backgroundColor: ["#FAFAFA", "#E3E0E5", "#CDC7D0", "#B6ADBB", "#9F94A6", "#897A92", "#72617D", "#5B4768", "#452E53", "#2E143E"].reverse(),
          borderColor: "#222222",
          borderWidth: 1,
          hoverBackgroundColor: ["#1B0C25", "#33253B", "#4A3E52", "#625868", "#7A717F", "#918A95", "#A9A3AC", "#C1BDC2", "#D8D6D9", "#F0EFEF"],
          hoverBorderColor: ["#1B0C25", "#33253B", "#4A3E52", "#625868", "#7A717F", "#918A95", "#A9A3AC", "#C1BDC2", "#D8D6D9", "#F0EFEF"],
        }
        this.geneDoughnutChartData = {
          labels: res.data.topGenesByVariants.counts.map(g => g.name),
          datasets: [dataset]
        }
        this.geneBarChartData = {
          labels: res.data.topGenesByVariants.counts.map(g => g.name),
          datasets: [dataset]
        }
        this.geneCount = res.data.topGenesByVariants.total
        this.variantCount = res.data.topGenesByVariants.secondaryTotal
        this.links = res.data.topGenesByVariants.counts.map(g => g.link)
      }
    })

    this.evidenceTypeCountsGql.fetch().toPromise().then((res) => {
      if (res.data) {
        let dataset = {
          data: res.data.evidenceTypeCounts.evidenceTypeCounts.counts.map(t => t.count),
          backgroundColor: ["#E3E0E5", "#B6ADBB", "#897A92", "#5B4768", "#2E143E"].reverse(),
          borderColor: "#222222",
          borderWidth: 1,
          hoverBackgroundColor: ["#1B0C25", "#4A3E52", "#7A717F", "#A9A3AC", "#D8D6D9"],
          hoverBorderColor: ["#1B0C25", "#4A3E52", "#7A717F", "#A9A3AC", "#D8D6D9"],
        }
        this.eidDoughnutChartData = {
          labels: res.data.evidenceTypeCounts.evidenceTypeCounts.counts.map(t => t.name),
          datasets: [dataset]
        }
        this.eidBarChartData = {
          labels: res.data.evidenceTypeCounts.evidenceTypeCounts.counts.map(t => t.name),
          datasets: [dataset]
        }
        this.eidCount = res.data.evidenceTypeCounts.evidenceTypeCounts.total
        this.eidClinicalSignificanceCounts = res.data.evidenceTypeCounts.clinicalSignificanceCounts
        this.eidSupportCounts = res.data.evidenceTypeCounts.supportCounts
        this.eidDoesNotSupportCounts = res.data.evidenceTypeCounts.doesNotSupportCounts
      }
    })
  }

  geneChartClicked({ event, active }: { event?: ChartEvent, active?: any }): void {
    if (this.links) {
      let link = this.links[active[0].index]
      if (link) {
        this.router.navigateByUrl(link)
      }
    }
  }

  evidenceTypeChartClicked({ event, active }: { event?: ChartEvent, active?: any }): void {
    if (this.eidDoughnutChartData && this.eidDoughnutChartData.labels) {
      this.selectedEvidenceType = this.eidDoughnutChartData.labels[active[0].index] as EvidenceType
      let csData = this.eidClinicalSignificanceCounts?.find(cs => cs.key == this.selectedEvidenceType)
      if (csData) {
        let dataset = {
          data: csData?.counts.counts.map(cs => cs.count),
          backgroundColor: ["#FAFAFA", "#CDC7D0", "#9F94A6", "#72617D", "#452E53", "#2E143E"].reverse(),
          borderColor: "#222222",
          borderWidth: 1,
          hoverBackgroundColor: ["#1B0C25", "#33253B", "#625868", "#918A95", "#C1BDC2", "#F0EFEF"],
          hoverBorderColor: ["#1B0C25", "#33253B", "#625868", "#918A95", "#C1BDC2", "#F0EFEF"],
        }
        this.csDoughnutChartData = {
          labels: csData?.counts.counts.map(cs => cs.name),
          datasets: [dataset]
        }
        this.eidCountForType = csData.counts.total
      }
      let supportData = this.eidSupportCounts?.find(cs => cs.key == this.selectedEvidenceType)
      if (supportData) {
        let dataset = {
          data: supportData?.counts.counts.map(cs => cs.count),
          backgroundColor: ["#FAFAFA", "#CDC7D0", "#9F94A6", "#72617D", "#452E53", "#2E143E"].reverse(),
          borderColor: "#222222",
          borderWidth: 1,
          hoverBackgroundColor: ["#1B0C25", "#33253B", "#625868", "#918A95", "#C1BDC2", "#F0EFEF"],
          hoverBorderColor: ["#1B0C25", "#33253B", "#625868", "#918A95", "#C1BDC2", "#F0EFEF"],
        }
        this.csSupportBarChartData = {
          labels: supportData?.counts.counts.map(cs => "Supports " + cs.name),
          datasets: [dataset]
        }
      }
      let doesNotSupportData = this.eidDoesNotSupportCounts?.find(cs => cs.key == this.selectedEvidenceType)
      if (doesNotSupportData) {
        let dataset = {
          data: doesNotSupportData?.counts.counts.map(cs => cs.count),
          backgroundColor: ["#FAFAFA", "#CDC7D0", "#9F94A6", "#72617D", "#452E53", "#2E143E"].reverse(),
          borderColor: "#222222",
          borderWidth: 1,
          hoverBackgroundColor: ["#1B0C25", "#33253B", "#625868", "#918A95", "#C1BDC2", "#F0EFEF"],
          hoverBorderColor: ["#1B0C25", "#33253B", "#625868", "#918A95", "#C1BDC2", "#F0EFEF"],
        }
        this.csDoesNotSupportBarChartData = {
          labels: doesNotSupportData?.counts.counts.map(cs => "Does Not Support " + cs.name),
          datasets: [dataset]
        }
      }
    }
  }
}
