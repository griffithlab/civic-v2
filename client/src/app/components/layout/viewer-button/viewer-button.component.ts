import { Component, Input, OnInit } from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { ViewerNotificationCountGQL } from '@app/generated/civic.apollo'
import { Apollo, gql } from 'apollo-angular'
import { environment } from 'environments/environment'
import { Observable, Subject } from 'rxjs'
import { map, startWith, withLatestFrom } from 'rxjs/operators'

@Component({
  selector: 'cvc-viewer-button',
  templateUrl: './viewer-button.component.html',
  styleUrls: ['./viewer-button.component.less'],
})
export class CvcViewerButtonComponent implements OnInit {
  @Input() cvcCollapsed: boolean = false

  viewer$: Observable<Viewer>
  unreadCount$: Observable<number>

  menuSelection$: Subject<number>
  coiUpdateModalVisible: boolean = false
  addVariantModalVisible: boolean = false

  constructor(
    private queryService: ViewerService,
    private unreadCountGql: ViewerNotificationCountGQL,
    private apollo: Apollo
  ) {
    this.viewer$ = this.queryService.viewer$
    this.menuSelection$ = new Subject()
    if (environment.production) {
      this.unreadCount$ = this.unreadCountGql
        .watch(undefined, { pollInterval: 5000 })
        .valueChanges.pipe(
          map(({ data }) => data.notifications.unreadCount),
          startWith(0)
        )
    } else {
      this.unreadCount$ = this.unreadCountGql
        .watch(undefined)
        .valueChanges.pipe(
          map(({ data }) => data.notifications.unreadCount),
          startWith(0)
        )
    }
  }

  ngOnInit(): void {
    this.menuSelection$
      .pipe(withLatestFrom(this.viewer$))
      .subscribe(([mroId, viewer]: [number, Viewer]) => {
        const fragment = {
          id: `User:${viewer.id}`,
          fragment: gql`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,
          data: {
            mostRecentOrganizationId: mroId,
          },
        }
        this.apollo.client.writeFragment(fragment)
      })
  }
  signOut(): void {
    this.queryService.signOut()
  }

  coiUpdated() {
    this.coiUpdateModalVisible = false
    this.queryService.refetch()
  }

  handleCoiModalCancel() {
    this.coiUpdateModalVisible = false
  }
}
