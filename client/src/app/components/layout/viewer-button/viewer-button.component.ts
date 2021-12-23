import { Component, } from '@angular/core';
import { Observable } from 'rxjs';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';

@Component({
  selector: 'cvc-viewer-button',
  templateUrl: './viewer-button.component.html',
  styleUrls: ['./viewer-button.component.less']
})
export class CvcViewerButtonComponent {
  viewer$: Observable<Viewer>;

  constructor(private queryService: ViewerService) {
    this.viewer$ = this.queryService.viewer$;
  }

  signOut(): void {
    this.queryService.signOut();
  }
}
