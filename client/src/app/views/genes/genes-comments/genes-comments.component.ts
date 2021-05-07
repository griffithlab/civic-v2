import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenesCommentsService } from './genes-comments.service';

@Component({
  selector: 'cvc-genes-comments',
  templateUrl: './genes-comments.component.html',
  styleUrls: ['./genes-comments.component.less'],
  providers: [GenesCommentsService]
})
export class GenesCommentsComponent implements OnInit {
  service: GenesCommentsService;

  constructor(
    private genesCommentsService: GenesCommentsService,
    private route: ActivatedRoute
  ) {
    const geneId: number = +this.route.snapshot.params['geneId'];
    this.service = genesCommentsService;
    this.service.watch({ id: geneId });
  }

  ngOnInit(): void {
  }

}
