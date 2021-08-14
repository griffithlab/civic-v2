import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'cvc-genes-suggest-revision',
  templateUrl: './genes-suggest-revision.page.html',
  styleUrls: ['./genes-suggest-revision.page.less']
})
export class GenesSuggestRevisionPage implements OnInit {
  geneId: number;

  constructor(private route: ActivatedRoute) {
    this.geneId = +this.route.snapshot.params['geneId'];
  }

  ngOnInit(): void {
  }

}
