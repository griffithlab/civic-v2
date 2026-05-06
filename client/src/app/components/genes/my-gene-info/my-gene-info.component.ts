import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs'

import { MyGeneInfoService } from './my-gene-info.service'

@Component({
    selector: 'cvc-my-gene-info',
    templateUrl: './my-gene-info.component.html',
    styleUrls: ['./my-gene-info.component.less'],
    standalone: false
})
export class CvcMyGeneInfoComponent implements OnInit, OnChanges {
  @Input() geneInfo: any

  info: any
  // TODO set this as number type w/o causing TS compile error
  tabIndex: any

  constructor(
   private infoService: MyGeneInfoService,
  ) {
    this.tabIndex = 0
  }

  ngOnInit(): void {
    this.tabChange({ index: 0, tab: null })
  }

  ngOnChanges(): void {
    if (this.geneInfo) {
      this.info = this.infoService.parse(JSON.parse(String(this.geneInfo)))
    }
  }

  tabChange(args: NzTabChangeEvent): void {
    this.tabIndex = args.index
  }
}
