import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { Revision } from '@app/generated/civic.apollo';

import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'cvc-gene-description-revision',
  templateUrl: './gene-description-revision.component.html',
  styleUrls: ['./gene-description-revision.component.less'],
  encapsulation: ViewEncapsulation.None // no encapsulation b/c diff html provided by server
})

export class GeneDescriptionRevisionComponent implements OnChanges {
  @Input() revision!: any;
  insertions!: string;
  deletions!: string;

  constructor(private logger: NGXLogger) { }

  ngOnChanges(): void {
   // extract insertions, deletions HTML from linkoutData diff
    if(this.revision) {
      const diffDom = new DOMParser().parseFromString(this.revision.linkoutData.diffValue.value, "text/html")
      const ins = diffDom.querySelector('ins');
      if(ins) { this.insertions = ins.outerHTML; }
      const del = diffDom.querySelector('del');
      if(del) { this.deletions = del.outerHTML; }
    }
  }

}
