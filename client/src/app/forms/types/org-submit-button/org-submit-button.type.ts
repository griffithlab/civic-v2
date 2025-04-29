import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  Maybe,
  Organization,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import {
  FieldType,
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { Apollo, gql } from 'apollo-angular'
import {
  BehaviorSubject,
  filter,
  Observable,
  Subject,
  Subscription,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import {
  ButtonMutation,
  CvcOrgSubmitButtonDirective,
} from './org-submit-button.directive'

interface CvcOrgSubmitButtonProps extends FormlyFieldProps {
  submitLabel: string
  align?: 'left' | 'right' | 'center'
}

export interface CvcOrgSubmitButtonFieldConfig
  extends FormlyFieldConfig<CvcOrgSubmitButtonProps> {
  type: 'org-submit-button' | Type<CvcOrgSubmitButtonComponent>
}

@UntilDestroy({ arrayName: 'subscriptions' })
@Component({
  selector: 'cvc-org-submit-button',
  templateUrl: './org-submit-button.type.html',
  styleUrls: ['./org-submit-button.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcOrgSubmitButtonComponent
  extends FieldType<FieldTypeConfig<CvcOrgSubmitButtonProps>>
  implements OnInit, AfterViewInit
{
  // get a reference to submit button
  @ViewChild(CvcOrgSubmitButtonDirective, { static: false })
  button?: CvcOrgSubmitButtonDirective

  // SOURCE STREAMS
  viewer$: Observable<Viewer>
  menuSelection$: Subject<number> = new Subject()

  organizationId$!: BehaviorSubject<Maybe<number>>
  selectedOrg$!: Observable<Maybe<ViewerOrganizationFragment>>

  // INTERMEDIATE STREAMS
  organizations$: Observable<ViewerOrganizationFragment[]>
  mostRecentOrg$: Observable<Maybe<ViewerOrganizationFragment>>

  // these synchronize submit button & org dropdown button states, styles
  isDisabled$: Subject<boolean>
  isHidden$: Subject<boolean>
  buttonClass$!: BehaviorSubject<string>
  baseButtonClass = 'org-dropdown-btn'

  formUpdate$!: BehaviorSubject<any>
  subscriptions: Subscription[]
  defaultOptions: Partial<FieldTypeConfig<CvcOrgSubmitButtonProps>> = {
    props: {
      submitLabel: 'Submit',
    },
  }

  constructor(
    private viewerService: ViewerService,
    private cdr: ChangeDetectorRef,
    private apollo: Apollo
  ) {
    super()
    this.viewer$ = this.viewerService.viewer$
    this.organizations$ = this.viewer$.pipe(pluck('organizations'))
    this.mostRecentOrg$ = this.viewer$.pipe(pluck('mostRecentOrg'))
    this.isDisabled$ = new Subject()
    this.isHidden$ = new Subject<boolean>()
    this.buttonClass$ = new BehaviorSubject<string>(this.baseButtonClass)
    this.subscriptions = []
  }

  ngOnInit(): void {
    // set defaults
    // this.props.submitLabel = this.props.submitLabel || defaultOptions.props.submitLabel
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

    // create subject for detecting changes on form update events,
    // starting with initial form status (required for OnPush)
    this.formUpdate$ = new BehaviorSubject(this.form.status)

    // emit form update events from formUpdate$
    const fcSub = this.form.statusChanges.subscribe((s) =>
      this.formUpdate$.next(s)
    )

    // call detectChanges for each form update event
    const scSub = this.formUpdate$.subscribe((_) => this.cdr.detectChanges())

    // set field value to emitted orgId$ updates
    const mroSub = this.mostRecentOrg$
      .pipe(pluck('id'), filter(isNonNulled))
      .subscribe((id) => {
        this.formControl.setValue(id)
      })
    this.subscriptions = this.subscriptions.concat([fcSub, scSub, mroSub])
  }

  ngAfterViewInit() {
    // subscribe to org-selector-btn.directive's domChange @Output,
    // emit mutation events from the appropriate Subjects
    if (this.button) {
      if (this.button.domChange) {
        const sub = this.button.domChange.subscribe((m: ButtonMutation) => {
          if (m.type === 'class' && typeof m.change === 'string') {
            // preserve base class by preprending it
            this.buttonClass$.next(`${this.baseButtonClass} ${m.change}`)
          } else if (m.type === 'disabled' && typeof m.change === 'boolean') {
            this.isDisabled$.next(m.change)
          } else if (m.type === 'hidden' && typeof m.change === 'boolean') {
            this.isHidden$.next(m.change)
          }
        })
        this.subscriptions.push(sub)
      }
    }
  }
}
