import { Component, OnInit } from '@angular/core';
import { NGXLogger } from "ngx-logger";

import { NzIconService } from 'ng-zorro-antd/icon';

// TODO: import and add icons at app root so available everywhere

@Component({
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.less']
})
export class GenesComponent implements OnInit {

  constructor(private logger: NGXLogger) {
  }

  ngOnInit(): void {
    this.logger.trace("GenesComponent initialized.");
  }
}
