import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { ViewerNotificationCountGQL } from '@app/generated/civic.apollo'
import { Apollo, gql } from 'apollo-angular'
import { environment } from 'environments/environment'
import { BehaviorSubject, filter, Observable, Subject } from 'rxjs'
import { startWith, withLatestFrom } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc'

@Component({
  selector: 'cvc-viewer-button',
  templateUrl: './viewer-button.component.html',
  styleUrls: ['./viewer-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcViewerButtonComponent implements OnInit {
  @Input() cvcCollapsed: boolean = false

  viewer$: Observable<Viewer>
  unreadCount$: Observable<number>

  menuSelection$: Subject<number>
  coiUpdateModalVisible: boolean = false
  addVariantModalVisible$: BehaviorSubject<boolean>

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
          pluck('data', 'notifications', 'unreadCount'),
          filter(isNonNulled),
          startWith(0)
        )
    } else {
      this.unreadCount$ = this.unreadCountGql
        .watch(undefined)
        .valueChanges.pipe(
          pluck('data', 'notifications', 'unreadCount'),
          filter(isNonNulled),
          startWith(0)
        )
    }
    this.addVariantModalVisible$ = new BehaviorSubject<boolean>(false)
  }

  ngOnInit(): void {
    this.menuSelection$
      .pipe(withLatestFrom(this.viewer$))
      .subscribe(([mroId, viewer]: [number, Viewer]) => {
        if (viewer.signedIn) {
          const fragment = {
            id: `User:${viewer.user?.id}`,
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
        }
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
