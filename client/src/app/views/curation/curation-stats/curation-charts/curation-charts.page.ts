import { Component, OnInit } from '@angular/core';
import { TopGenesByVariantsGQL } from '@app/generated/civic.apollo';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'cvc-curation-charts',
  templateUrl: './curation-charts.page.html',
  styleUrls: ['./curation-charts.page.less']
})
export class CurationChartsPage implements OnInit {
  options: ChartOptions<'doughnut'> = {
    cutout: "75%",
    plugins: {
      title: {
        display: true,
        text: "I'm a title!",
      },
      subtitle: {
        display: true,
        position: 'top',
        text: 'im a subtitle'
      }
    },
    elements: {
    }
  }

  chartData?: ChartData<'doughnut'>

  constructor(private topGenesGql: TopGenesByVariantsGQL) { }

  ngOnInit(): void {
    this.topGenesGql.fetch().toPromise().then((res) => {
      if(res.data) {
        this.chartData = {
          labels: res.data.topGenesByVariants.map(g => g.name),
          datasets: [
            {data: res.data.topGenesByVariants.map(g => g.count)}
          ]
        }
      }
    })
    
  }

}
