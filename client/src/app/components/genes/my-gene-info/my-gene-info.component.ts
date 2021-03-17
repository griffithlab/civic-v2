import { Component,
         Input,
         OnChanges,
         OnInit,
       } from '@angular/core';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { NGXLogger } from 'ngx-logger';

import { MyGeneInfoService } from './my-gene-info.service';

@Component({
  selector: 'cvc-my-gene-info',
  templateUrl: './my-gene-info.component.html',
  styleUrls: ['./my-gene-info.component.less']
})
export class MyGeneInfoComponent implements OnInit, OnChanges {
  @Input() geneInfo: any;

  info: any;
  // TODO set this as number type w/o causing TS compile error
  tabIndex: any;

  constructor(private infoService: MyGeneInfoService, private logger: NGXLogger) {
    this.tabIndex = 0;
  }

  ngOnInit(): void {
    this.tabChange({ index: 0, tab: null });
  }

  ngOnChanges(): void {
    if(this.geneInfo) {
      this.info = this.infoService.parse(this.geneInfo);
    }
  }

  tabChange(args: NzTabChangeEvent): void {
    this.tabIndex = args.index;
  }

}
