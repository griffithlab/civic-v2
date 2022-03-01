import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceClinicalSignificance } from '@app/generated/civic.apollo';
import { ExtensionOption, FormlyExtension, TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { $enum } from 'ts-enum-util';
import * as state from '@app/forms/config/states/evidence.state';
import { BehaviorSubject } from 'rxjs';
import { FieldFormExtension } from '@ngx-formly/core/lib/extensions/field-form/field-form';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { tap } from 'rxjs/operators';
import { FormlyFieldSelect, FormlyNzSelectModule } from '@ngx-formly/ng-zorro-antd/select';
import { CvcClinicalSignificanceSelectModule } from './clinical-significance-select.module';
import { FormConfig } from 'ng-zorro-antd/core/config';
import { FormControl } from '@angular/forms';

export type SelectOption = {
  [key: string | number]: string | number
}

export const defaultOptions = new BehaviorSubject<SelectOption[]>
  (getOptionsFromEnums(state.getAllSignificanceOptions()));

@Component({
  selector: 'cvc-clinical-significance-select',
  templateUrl: './clinical-significance-select.type.html',
  styleUrls: ['./clinical-significance-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicalSignificanceSelectType extends FieldType implements OnInit {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      label: 'Clinical Signficance',
      helpText: 'The impact of the variant for predictive, prognostic, diagnostic, or functional evidence types. For predisposing and oncogenic evidence, impact is only applied at the assertion level and N/A should be selected here.',
      placeholder: 'Not specified',
      options: getOptionsFromEnums(state.getAllSignificanceOptions())
    },
    // expressionProperties: {
    //   'templateOptions.options': (model: any) => {
    //     return state.getSignificanceOptions(model.evidenceType)
    //       .map(
    //         (value) => {
    //           return {
    //             value: value,
    //             label: formatEvidenceEnum(value)
    //           }
    //         })
    //   }
    // }
  }



  ngOnInit(): void {
    console.log('ClinicalSignificanceType OnInit! -------------');
  }
}

export const clinicalSignificanceSelectTypeOption: TypeOption = {
  name: 'clinical-significance-select',
  component: ClinicalSignificanceSelectType,
  wrappers: ['form-field'],
};

export function getOptionsFromEnums(e: EvidenceClinicalSignificance[]): SelectOption[] {
  if (e.length === 0) { return []; }
  return e.map((value) => { return { value: value, label: formatEvidenceEnum(value) } })
}

// watches changes on the evidenceType value, updates valid select options
// export const ClinicalSignificanceOptionsExtension: FormlyExtension = {
//   postPopulate(field: FormlyFieldConfig): void {
//     const to = field.templateOptions || {};

//     const formControl = field.parent?.formControl;

//     field.expressionProperties = {
//       'templateOptions.test': formControl ? formControl.valueChanges.pipe(tap(
//         (m:any) => {
//           console.log(m);
//         })
//       ) : 'no formControl'
//     };
//   }
// }

// export const clinicalSignificanceOptionsExt = {
//   name: 'clinical-significance-options',
//   extension: ClinicalSignificanceOptionsExtension,
// }
