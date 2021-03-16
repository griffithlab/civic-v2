import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Revision } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-gene-description-revision',
  templateUrl: './gene-description-revision.component.html',
  styleUrls: ['./gene-description-revision.component.less'],
  encapsulation: ViewEncapsulation.None // no encapsulation b/c diff html provided by server
})

export class GeneDescriptionRevisionComponent implements OnInit {
  @Input() revision!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
