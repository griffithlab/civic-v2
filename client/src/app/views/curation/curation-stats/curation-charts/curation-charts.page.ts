import { Component, OnInit } from '@angular/core';
import { TopGenesByVariantsGQL } from '@app/generated/civic.apollo';
import { Chart, ChartData, ChartEvent, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Router } from '@angular/router';

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
        display: false
      },
      y: {
        grid: {
          display: false
        },
      }
    },
    layout: {
      padding: 50
    },
  }

  doughnutChartData?: ChartData<'doughnut'>
  barChartData?: ChartData<'bar'>
  geneCount?: number
  variantCount?: number
  links?: string[]

  constructor(private topGenesGql: TopGenesByVariantsGQL, private router: Router) { }

  ngOnInit(): void {
    this.topGenesGql.fetch().toPromise().then((res) => {
      if(res.data) {
        let dataset =
            {
              data: res.data.topGenesByVariants.counts.map(g => g.count),
              backgroundColor: ["#FAFAFA", "#E3E0E5", "#CDC7D0", "#B6ADBB", "#9F94A6", "#897A92", "#72617D", "#5B4768", "#452E53", "#2E143E"].reverse(),
              borderColor: "#222222",
              borderWidth: 1,
              hoverBackgroundColor: ["#1B0C25", "#33253B", "#4A3E52", "#625868", "#7A717F", "#918A95", "#A9A3AC", "#C1BDC2", "#D8D6D9", "#F0EFEF"],
              hoverBorderColor: ["#1B0C25", "#33253B", "#4A3E52", "#625868", "#7A717F", "#918A95", "#A9A3AC", "#C1BDC2", "#D8D6D9", "#F0EFEF"],
            }
        this.doughnutChartData = {
          labels: res.data.topGenesByVariants.counts.map(g => g.name),
          datasets: [dataset]
        }
        this.barChartData = {
          labels: res.data.topGenesByVariants.counts.map(g => g.name),
          datasets: [{ ...dataset } ]

        }
        this.geneCount = res.data.topGenesByVariants.geneCount
        this.variantCount = res.data.topGenesByVariants.variantCount
        this.links = res.data.topGenesByVariants.counts.map(g => g.link)
      }
    })
  }

  chartClicked({ event, active }: { event?: ChartEvent, active?: any }): void {
    if (this.links) {
      let link = this.links[active[0].index]
      this.router.navigateByUrl(link)
    }
  }
}
