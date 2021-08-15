import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'cvc-genes-suggest',
  templateUrl: './genes-suggest.page.html',
  styleUrls: ['./genes-suggest.page.less']
})
export class GenesSuggestPage implements OnInit {
  geneId: number;

  constructor(private route: ActivatedRoute) {
    this.geneId = +this.route.snapshot.params['geneId'];
  }

  ngOnInit(): void {
  }

}
