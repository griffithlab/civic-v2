import { TypeOption, ValidationMessageOption, ValidatorOption, } from '@ngx-formly/core/lib/services/formly.config';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { EntityClinicalSignificance, EntityState, EntityType, SelectOption, SelectType } from '../../states/entity.state';
import { Maybe } from '@app/generated/civic.apollo';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';

const optionText: any = {
  Evidence: {
    'PREDICTIVE': {
      'SENSITIVITYRESPONSE': 'Associated with a clinical or preclinical response to treatment',
      'RESISTANCE': 'Associated with clinical or preclinical resistance to treatment',
      'ADVERSE_RESPONSE': 'Associated with an adverse response to drug treatment',
      'REDUCED_SENSITIVITY': 'Response to treatment is lower than seen in other treatment contexts',
      'NA': 'Clinical Significance is not applicable.'
    },
    'DIAGNOSTIC': {
      'POSITIVE': 'Associated with diagnosis of disease or subtype',
      'NEGATIVE': 'Associated with lack of disease or subtype',
    },
    'PROGNOSTIC': {
      'BETTER_OUTCOME': 'Demonstrates better than expected clinical outcome',
      'POOR_OUTCOME': 'Demonstrates worse than expected clinical outcome',
      'NA': 'Clinical Significance is not applicable.'
    },
    'PREDISPOSING': {
      'PREDISPOSITION': 'TODO',
      'PROTECTIVENESS': 'TODO'
    },
    'FUNCTIONAL': {
      'GAIN_OF_FUNCTION': 'Sequence variant confers an increase in normal gene function',
      'LOSS_OF_FUNCTION': 'Sequence variant confers a diminished or abolished function',
      'UNALTERED_FUNCTION': 'Gene product of sequence variant is unchanged',
      'NEOMORPHIC': 'Sequence variant creates a novel function',
      'DOMINANT_NEGATIVE': 'Sequence variant abrogates function of wildtype allele gene product',
      'UNKNOWN': 'Sequence variant that cannot be precisely defined by the other listed categories',
    },
    'ONCOGENIC': {
      'ONCOGENICITY': 'TODO',
      'PROTECTIVENESS': 'TODO'
    }
  },
  Assertion: {
    'PREDICTIVE': {
      'SENSITIVITYRESPONSE': 'Associated with a clinical or preclinical response to treatment',
      'RESISTANCE': 'Associated with clinical or preclinical resistance to treatment',
      'ADVERSE_RESPONSE': 'Associated with an adverse response to drug treatment',
      'REDUCED_SENSITIVITY': 'Response to treatment is lower than seen in other treatment contexts',
      'NA': 'Clinical Significance is not applicable.'
    },
    'DIAGNOSTIC': {
      'POSITIVE': 'Associated with diagnosis of disease or subtype',
      'NEGATIVE': 'Associated with lack of disease or subtype',
    },
    'PROGNOSTIC': {
      'BETTER_OUTCOME': 'Demonstrates better than expected clinical outcome',
      'POOR_OUTCOME': 'Demonstrates worse than expected clinical outcome',
      'NA': 'Clinical Significance is not applicable.'
    },
    'PREDISPOSING': {
      'PATHOGENIC': 'Very strong evidence the variant is pathogenic',
      'LIKELY_PATHOGENIC': 'Strong evidence (>90% certainty) the variant is pathogenic.',
      'BENIGN': 'Very strong evidence the variant is benign',
      'LIKELY_BENIGN': 'Not expected to have a major effect on disease',
      'UNCERTAIN_SIGNIFICANCE': 'Does not fullfill the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting',
    },
    'ONCOGENIC': {
      'ONCOGENIC': 'TODO',
      'LIKELY_ONCOGENIC': 'TODO',
      'BENIGN': 'Very strong evidence the variant is benign',
      'LIKELY_BENIGN': 'Not expected to have a major effect on disease',
      'UNCERTAIN_SIGNIFICANCE': 'TODO',

    }
  }
}

export const clinicalSignificanceSelectTypeOption: TypeOption = {
  name: 'clinical-significance-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Clinical Signficance',
      helpText: 'The impact of the variant.',
      placeholder: 'None specified',
      options: [],
    },
    validators: {
      validation: ['cs-option']
    },
    hooks: {
      onInit: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        const st: EntityState = ffc?.options?.formState;
        if (!st) { return } // if no form state, empty options

        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
        to.options = st.getOptionsFromEnums(st.getSignificanceOptions(etCtrl.value));
        to.vcSub = etCtrl.valueChanges
          .subscribe((et: EntityType) => {
            to.options = st.getOptionsFromEnums(st.getSignificanceOptions(et));
            ffc!.formControl!.updateValueAndValidity();
          });

      },
      onDestroy: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        to.vcSub.unsubscribe();
      }
    },
    expressionProperties: {
      'templateOptions.optionText': (m: any, st: any, ffc?: FormlyFieldConfig) => {
        if (st.entityName && m.evidenceType && m.clinicalSignificance){
          return optionText[st.entityName][m.evidenceType][m.clinicalSignificance]
        }
      }
    }
  }
};

export const csOptionValidator: ValidatorOption = {
  name: 'cs-option',
  validation: (c: AbstractControl, ffc: FormlyFieldConfig, opt: any): ValidationErrors | null => {
    const st: EntityState = ffc.options?.formState;
    const cs: EntityClinicalSignificance = c.value;
    if (!cs || !st) { return null; }
    const et: EntityType = c.parent?.get('evidenceType')?.value;
    if (!et) { return null; }
    else {
      return st.isValidSignificanceOption(et, cs) ? null : { 'cs-option': et };
    }
  },
};

export const csOptionValidationMessage: ValidationMessageOption = {
  name: 'cs-option',
  message: (et: EntityType, ffc: FormlyFieldConfig): string => {
    const st: EntityState = ffc.options!.formState!;
    return `'${formatEvidenceEnum(ffc.formControl?.value)}' is not a valid Clinical Significance for ${formatEvidenceEnum(et)} ${st.pluralNames.get(st.entityName)}.`;
  }
};
