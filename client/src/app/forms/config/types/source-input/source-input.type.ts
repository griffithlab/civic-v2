import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { FieldType } from '@ngx-formly/core'
import { TypeOption } from '@ngx-formly/core/lib/models'

@Component({
  selector: 'cvc-source-input-type',
  templateUrl: './source-input.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceInputType extends FieldType<any> {
  constructor() {
    super()
  }

  onSourceSelected(s: Maybe<any>): void {
    console.log(s)
    this.formControl.setValue(s)
  }
}

export const SourceInputTypeOption: TypeOption = {
  name: 'source-input',
  component: SourceInputType,
}
