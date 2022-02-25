import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-source-input',
  templateUrl: './source-input.type.html',
  styleUrls: ['./source-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceInputType extends FieldType {
  constructor() {
    super();
  }

  onSourceSelected(s: Maybe<any>): void {
    console.log(s);
    this.formControl.setValue(s);
  }

}

export const SourceInputTypeOption = {
  name: 'source-input',
  component: SourceInputType,
}
