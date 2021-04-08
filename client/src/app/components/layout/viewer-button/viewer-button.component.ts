import { Component, OnInit } from '@angular/core';

import { ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'cvc-viewer-button',
  templateUrl: './viewer-button.component.html',
  styleUrls: ['./viewer-button.component.less']
})
export class ViewerButtonComponent implements OnInit {

  constructor(private queryService: ViewerService) { }

  signOut(): void {
    this.queryService.signOut();
  }

  ngOnInit(): void {
  }

}
