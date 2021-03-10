import { Component, OnInit, Input } from '@angular/core';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'cvc-my-gene-info',
  templateUrl: './my-gene-info.component.html',
  styleUrls: ['./my-gene-info.component.less']
})
export class MyGeneInfoComponent implements OnInit {
  @Input() geneInfo: any;

  // TODO set this as number type w/o causing TS compile error
  tabIndex: any;

  constructor(private logger: NGXLogger) {
    this.tabIndex = 0;
  }

  change(args: NzTabChangeEvent): void {
    this.logger.trace(args);
    this.tabIndex = args.index;
  }

  ngOnInit(): void {
    this.change({ index: 0, tab: null });
  }

}
