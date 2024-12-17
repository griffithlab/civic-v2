import { Component, Input, OnInit } from '@angular/core'
import { AbstractControl, UntypedFormGroup } from '@angular/forms'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-form-debug-field-list',
  templateUrl: './form-debug-field-list.component.html',
  styleUrls: ['./form-debug-field-list.component.less'],
  standalone: false,
})
export class FormDebugFieldListComponent implements OnInit {
  _cvcFormControl: Maybe<AbstractControl>
  // TODO support FormArray?
  formControl: Maybe<UntypedFormGroup>
  @Input()
  set cvcAbstractControl(fc: Maybe<AbstractControl>) {
    if (!fc)
      throw new Error(
        `cvc-form-debug-field-list requires valid cvcFormControl Input.`
      )
    this._cvcFormControl = fc
    this.formControl = fc as UntypedFormGroup
  }
  get cvcFormControl(): Maybe<AbstractControl> {
    return this._cvcFormControl
  }
  constructor() {}

  ngOnInit(): void {}
}
