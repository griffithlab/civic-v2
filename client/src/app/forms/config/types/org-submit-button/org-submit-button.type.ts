import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core'
import { Maybe, Organization } from '@app/generated/civic.apollo'
import { FieldType } from '@ngx-formly/core'
import { TypeOption } from '@ngx-formly/core/lib/models'
import { Subject } from 'rxjs'
import { distinctUntilChanged, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'cvc-org-submit-button-type',
  templateUrl: './org-submit-button.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrgSubmitButtonComponent
  extends FieldType<any>
  implements AfterViewInit, OnDestroy
{
  _selectedOrg: Maybe<Organization> = undefined
  get selectedOrg(): Maybe<Organization> {
    return this._selectedOrg
  }

  set selectedOrg(org: Maybe<Organization>) {
    this._selectedOrg = org
    this.formControl.setValue(org)
  }

  private destroy$ = new Subject<void>()

  constructor(private cdr: ChangeDetectorRef) {
    super()

    this.defaultOptions = {
      templateOptions: {
        submitLabel: 'Submit',
        submitSize: 'small',
      },
    }
  }

  ngAfterViewInit() {
    // NOTE: this subscription forces the field to update on
    // form.statusChanges. Even given that this type uses OnPush,
    // it doesn't seem like this should be required.
    this.form.statusChanges
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => this.cdr.detectChanges())
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}

export const OrgSubmitButtonTypeOption: TypeOption = {
  name: 'org-submit-button',
  component: OrgSubmitButtonComponent,
}
