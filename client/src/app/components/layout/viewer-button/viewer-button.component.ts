import {
  ChangeDetectionStrategy,
  Component,
  createNgModule,
  DestroyRef,
  inject,
  Injector,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { NavigationStart, Router } from '@angular/router'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  UserMostRecentOrgIdFragmentDoc,
  ViewerNotificationCountGQL,
} from '@app/core/services/viewer/viewer.service.gql.generated'
import { Apollo } from 'apollo-angular'
import { environment } from 'environments/environment'
import { BehaviorSubject, filter, Observable, Subject } from 'rxjs'
import { map, startWith, withLatestFrom } from 'rxjs/operators'
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

  // the variant submit form drags in the forms field-type tree, so it is
  // dynamically imported when the Add Variant modal first renders its content
  // rather than bundled with the app shell
  @ViewChild('variantFormOutlet', { read: ViewContainerRef })
  set variantFormOutlet(outlet: ViewContainerRef | undefined) {
    if (outlet && outlet.length === 0) this.loadVariantSubmitForm(outlet)
  }

  private readonly destroyRef = inject(DestroyRef)
  private readonly injector = inject(Injector)
  private readonly router = inject(Router)

  constructor(
    private queryService: ViewerService,
    private unreadCountGql: ViewerNotificationCountGQL,
    private apollo: Apollo
  ) {
    this.viewer$ = this.queryService.viewer$
    this.menuSelection$ = new Subject()
    if (environment.production) {
      this.unreadCount$ = this.unreadCountGql
        .watch({ pollInterval: 5000 })
        .valueChanges.pipe(
          map(({ data }) => data?.notifications?.unreadCount),
          filter(isNonNulled),
          startWith(0)
        )
    } else {
      this.unreadCount$ = this.unreadCountGql.watch().valueChanges.pipe(
        map(({ data }) => data?.notifications?.unreadCount),
        filter(isNonNulled),
        startWith(0)
      )
    }
    this.addVariantModalVisible$ = new BehaviorSubject<boolean>(false)
  }

  ngOnInit(): void {
    // the new variant's "details here" link navigates underneath the modal;
    // close it rather than leave it covering the page it linked to
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationStart),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.addVariantModalVisible$.next(false))

    this.menuSelection$
      .pipe(withLatestFrom(this.viewer$))
      .subscribe(([mroId, viewer]: [number, Viewer]) => {
        if (viewer.signedIn) {
          this.apollo.client.writeFragment({
            id: `User:${viewer.user?.id}`,
            fragment: UserMostRecentOrgIdFragmentDoc,
            data: {
              mostRecentOrganizationId: mroId,
            },
          })
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

  private async loadVariantSubmitForm(outlet: ViewContainerRef) {
    const [{ VariantSubmitFormModule }, { VariantSubmitForm }] =
      await Promise.all([
        import('@app/forms/config/variant-submit/variant-submit.module'),
        import('@app/forms/config/variant-submit/variant-submit.form'),
      ])
    const moduleRef = createNgModule(VariantSubmitFormModule, this.injector)
    outlet.createComponent(VariantSubmitForm, { ngModuleRef: moduleRef })
  }
}
