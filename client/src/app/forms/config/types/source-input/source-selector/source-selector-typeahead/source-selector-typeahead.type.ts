import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core'
import { UntypedFormControl } from '@angular/forms'
import { CitationTypeaheadGQL, Source } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FieldType } from '@ngx-formly/core'
import { TypeOption } from '@ngx-formly/core/lib/models'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

type Option = { value: string; label: string; source: any }

@UntilDestroy()
@Component({
  selector: 'cvc-source-selector-typeahead-type',
  templateUrl: './source-selector-typeahead.type.html',
  styleUrls: ['./source-selector-typeahead.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceSelectorTypeaheadType
  extends FieldType<any>
  implements AfterViewInit
{
  selectedValue = null
  nzFilterOption = () => true

  constructor(
    private sourceTypeaheadQuery: CitationTypeaheadGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search',
        sourceType: undefined,
        showArrow: false,
        onSearch: () => {},
        filterOption: () => {},
        modelChange: () => {},
        triggerParentSubmit: () => {},
        minLengthSearch: 1,
        // selector component doesn't update field value until it's valid
        // storing its value and length (for various UI conditionals) here
        fieldLength: 0,
        fieldValue: '',
        optionList: [] as Option[],
      },
    }
  }

  ngAfterViewInit() {
    // super.ngAfterViewInit(); NOTE: will be required with v6
    this.to.filterOption = () => true // TODO: look up what this does
    this.to.modelChange = (e: any): void => {
      // this gets called both when an existing source is selected,
      // and when source-loader triggers onModelUpdated() & patches the form
      if (this.to.optionList.length > 0) {
        // update form model with selected source's id & citation
        const { source } = this.to.optionList.find(
          (opt: Option) => opt.value === e
        )
        const src: Source = source as Source
        if (src) {
          this.form.patchValue([
            { citation: src.citation ? src.citation : src.name, id: src.id },
          ])
        } else {
          console.error('Could not find selected citation in list?')
        }
      }
    }
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value
      this.to.fieldLength = value.length
      if (
        value.length < this.to.minLengthSearch ||
        value.length > this.to.maxLength!
      ) {
        return
      }
      this.sourceTypeaheadQuery
        .fetch(
          {
            sourceType: this.to.sourceType,
            partialCitationId: value,
          },
          { fetchPolicy: 'network-only' }
        )
        .pipe(
          map((r) => r.data),
          filter(isNonNulled),
          untilDestroyed(this)
        )
        .subscribe(({ sourceTypeahead }) => {
          this.to.optionList = sourceTypeahead.map((s) => {
            return { value: s.citationId, label: s.citationId, source: s }
          })
          // TODO implement this search as an observable to avoid detectChanges
          this.changeDetectorRef.detectChanges()
        })
    }
  }

  onModelUpdated(e: any) {
    this.form.patchValue(e)
    // TODO determine if detecteChanges() required here
    this.changeDetectorRef.detectChanges()
    this.to.triggerParentSubmit()
  }
}

export const SourceSelectorTypeaheadTypeOption: TypeOption = {
  name: 'source-selector-typeahead',
  component: SourceSelectorTypeaheadType,
  wrappers: ['form-field'],
}
