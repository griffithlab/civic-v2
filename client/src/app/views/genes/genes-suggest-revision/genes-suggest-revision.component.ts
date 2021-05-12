import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'cvc-genes-suggest-revision',
  templateUrl: './genes-suggest-revision.component.html',
  styleUrls: ['./genes-suggest-revision.component.less']
})
export class GenesSuggestRevisionComponent implements OnInit {
  geneId: number;

  constructor(private route: ActivatedRoute) {
    this.geneId = +this.route.snapshot.params['geneId'];
  }

  ngOnInit(): void {
  }

}
