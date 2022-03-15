import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

//
// DEPRECATED - use source-select field instead
//


@Component({
  selector: 'cvc-source-input-type',
  templateUrl: './source-input.type.html',
  styleUrls: ['./source-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceInputType extends FieldType {
  closeCallback: (id: number) => void
  constructor() {
    super();
    this.closeCallback = (id: number) => {
      console.log(`I just closed source ${id}`)
    }
  }

  onSourceSelected(s: Maybe<any>): void {
    console.log(s);
    this.formControl.setValue(s);
  }

}

export const SourceInputTypeOption: TypeOption = {
  name: 'source-input',
  component: SourceInputType,
}
