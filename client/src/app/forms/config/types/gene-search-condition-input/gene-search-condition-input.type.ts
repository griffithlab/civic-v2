import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";
import { TypeOption } from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'cvc-gene-search-condition-input',
  templateUrl: './gene-search-condition-input.type.html',
  styleUrls: ['./gene-search-condition-input.type.less'],
})
export class GeneSearchConditionInputType extends FieldType {
  formControl!: FormControl;
  selectedField?: string
  selectedFieldFormControl?: FormControl
  selectedFieldFormConfig?: FormlyFieldConfig

  fieldOptions = [
    { value: 'entrezId', label: 'Entrez ID' },
    { value: 'entrezSymbol', label: 'Entrez Symbol' },
    { value: 'description', label: 'Gene Summary' },
    { value: 'alias', label: 'Alias' },
    { value: 'id', label: 'CIViC ID' },
    { value: 'openRevisionCount', label: 'Open Revisions' },
    { value: 'hasAssertion', label: 'Has Assertion' }
  ]

  onFieldSelected(fieldName: string): void {
    if(this.selectedFieldFormControl) {
      this.formControl.reset();
    }
    this.selectedFieldFormControl = <FormControl> this.formControl.get(fieldName)
    this.selectedFieldFormConfig = this.field.fieldGroup?.filter(fg => fg.key == fieldName)[0] 
  }
}

export const GeneSearchConditionInputTypeOption: TypeOption = {
  name: 'gene-search-input',
  component: GeneSearchConditionInputType,
  defaultOptions: {
    fieldGroup: [
      {
        type: 'int-search-select',
        key: 'entrezId',
      },
      {
        type: 'string-search-select',
        key: 'entrezSymbol',
      },
      {
        type: 'string-search-select',
        key: 'description',
      },
      {
        type: 'string-search-select',
        key: 'alias',
      },
      {
        type: 'int-search-select',
        key: 'id',
      },
      {
        type: 'int-search-select',
        key: 'openRevisionCount',
      },
      {
        type: 'boolean-search-select',
        key: 'hasAssertion',
      },
    ]
  }
}