import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceDirection, EvidenceType, Maybe } from '@app/generated/civic.apollo';
import { TypeOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';
import { Subject } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { EvidenceState } from '@app/forms/config/states/evidence.state';
import { EntityState, EntityType, SelectOption } from '../../states/entity.state';

const optionText: any = {
  'Evidence': {
    'PREDICTIVE': {
      'SUPPORTS': 'The experiment or study supports this variant\'s response to a drug',
      'DOES_NOT_SUPPORT': 'The experiment or study does not support, or was inconclusive of an interaction between this variant and a drug'
    },
    'DIAGNOSTIC': {
      'SUPPORTS': 'The experiment or study supports this variant\'s impact on the diagnosis of disease or subtype',
      'DOES_NOT_SUPPORT': 'The experiment or study does not support this variant\'s impact on diagnosis of disease or subtype'
    },
    'PROGNOSTIC': {
      'SUPPORTS': 'The experiment or study supports this variant\'s impact on prognostic outcome',
      'DOES_NOT_SUPPORT': 'The experiment or study does not support a prognostic association between variant and outcome'
    },
    'PREDISPOSING': {
      'NA': 'Evidence Direction is Not Applicable.'
    },
    'FUNCTIONAL': {
      'SUPPORTS': 'The experiment or study supports this variant causing alteration or non-alteration of the gene product function',
      'DOES_NOT_SUPPORT': 'The experiment or study does not support this variant causing alteration or non-alteration of the gene product function',
    },
    'ONCOGENIC': {
      'NA': 'Evidence Direction is Not Applicable for Oncogenic Evidence Type.'
    },
  },
  'Assertion': {
    'PREDICTIVE': {
      'SUPPORTS': 'The Assertion and associated Evidence Items support this variant\'s response to a drug',
      'DOES_NOT_SUPPORT': 'The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a drug'
    },
    'DIAGNOSTIC': {
      'SUPPORTS': 'The Assertion and associated Evidence Items support this variant\'s impact on the diagnosis of disease or subtype',
      'DOES_NOT_SUPPORT': 'The Assertion and associated evidence does not support this variant\'s impact on diagnosis of disease or subtype'
    },
    'PROGNOSTIC': {
      'SUPPORTS': 'The Assertion and associated Evidence Items support this variant\'s impact on prognostic outcome',
      'DOES_NOT_SUPPORT': 'The Assertion and associated evidence does not support a prognostic association between variant and outcome'
    },
    'PREDISPOSING': {
      'SUPPORTS': 'The Assertion and associated Evidence Items support a variant\'s impact on predisposing outcome',
      'DOES_NOT_SUPPORT': 'The Assertion and associated evidence does not support a predisposing association between variant and outcome'
    },
    'FUNCTIONAL': {
      'SUPPORTS': 'The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function',
      'DOES_NOT_SUPPORT': 'The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function',
    },
  }
}

export const evidenceDirectionSelectTypeOption: TypeOption = {
  name: 'evidence-direction-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Evidence Direction',
      placeholder: 'None specified',
      options: new Subject<SelectOption[]>(),
    },
    expressionProperties: {
      'templateOptions.optionText': (m: any, st: any, ffc?: FormlyFieldConfig) => {
        if (st.entityName && m.evidenceType && m.evidenceDirection){
          return optionText[st.entityName][m.evidenceType][m.evidenceDirection]
        }
      }
    },
    validators: { validation: ['ed-option'] },
    hooks: {
      onInit: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to = ffc!.templateOptions!;
        const options = to.options as Subject<SelectOption[]>;
        // check for formState, populate with all options if not found
        const st: EntityState = ffc?.options?.formState;
        if (!st) { options.next([]) }
        else {
          to.label = `${st.entityName} Direction`;
          to.helpText = `An indicator of whether the ${st.entityName} statement supports or refutes the clinical significance of an event. For predisposing and oncogenic ${st.pluralNames.get(st.entityName)}, directionality is only applied at the assertion level and N/A should be selected here.`;
          // find evidenceType formControl, subscribe to value changes to update options
          const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
          if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
          to.vcSubscription = etCtrl.valueChanges
            .subscribe((et: EntityType) => {
              options.next(
                st.getOptionsFromEnums(st.getDirectionOptions(et))
              );
              ffc!.formControl!.updateValueAndValidity();
            });
        }
      },
      onDestroy: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to = ffc!.templateOptions!;
        to.vcSubscription.unsubscribe();
      }
    },

  }
};

export const edOptionValidator: ValidatorOption = {
  name: 'ed-option',
  validation: (c: AbstractControl, ffc: FormlyFieldConfig, opt: any): ValidationErrors | null => {
    const st: EvidenceState = ffc.options?.formState;
    const ed: EvidenceDirection = c.value;
    if (!ed || !st) { return null; }
    const et: EvidenceType = c.parent?.get('evidenceType')?.value;
    if (!et) { return null; }
    else {
      return st.isValidDirectionOption(et, ed) ? null : { 'ed-option': et };
    }
  },
};

export const edOptionValidationMessage: ValidationMessageOption = {
  name: 'ed-option',
  message: (et: EvidenceType, f: FormlyFieldConfig): string => {
    return `'${formatEvidenceEnum(f.formControl?.value)}' is not a valid Clinical Significance for ${formatEvidenceEnum(et)} Evidence.`;
  }
};
