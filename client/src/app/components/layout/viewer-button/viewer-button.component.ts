import { Component, OnDestroy, } from '@angular/core';
import { Observable } from 'rxjs';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import { ViewerNotificationCountGQL } from '@app/generated/civic.apollo';
import { pluck, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'cvc-viewer-button',
  templateUrl: './viewer-button.component.html',
  styleUrls: ['./viewer-button.component.less']
})
export class CvcViewerButtonComponent {
  viewer$: Observable<Viewer>;
  unreadCount$: Observable<number>;

  constructor(private queryService: ViewerService, private unreadCountGql: ViewerNotificationCountGQL) {
    this.viewer$ = this.queryService.viewer$;
    this.unreadCount$ = this.unreadCountGql.watch(undefined, {pollInterval: 3000})
      .valueChanges.pipe(
        map(({data}) => data.notifications.unreadCount),
        startWith(0)
      )
  }

  signOut(): void {
    this.queryService.signOut();
  }
}
