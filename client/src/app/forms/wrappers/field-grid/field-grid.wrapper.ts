import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'

export type CvcFieldGridWrapperConfig = Partial<GroupConfig>

type GroupConfig = {
  grid: {
    // columns of equal width
    cols:
      | 2
      | 3
      | 4
      // thirds, quarters layouts
      | '1-2'
      | '2-1'
      | '1-3'
      | '3-1'
  }
}

@Component({
  selector: 'cvc-field-grid',
  templateUrl: './field-grid.wrapper.html',
  styleUrls: ['./field-grid.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFieldGridWrapper
  extends FieldWrapper<FormlyFieldConfig<any>>
  implements OnInit
{
  get errorState() {
    return this.showError ? 'error' : ''
  }

  ngOnInit(): void {
    // set default layout to grid, merge w/ any specified grid props
    this.props.grid = {
      cols: 2,
      ...(this.props.grid ? this.props.grid : undefined),
    }
  }
}
