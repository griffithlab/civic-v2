import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceClinicalSignificance } from '@app/generated/civic.apollo';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { $enum } from 'ts-enum-util';
import * as state from '@app/forms/config/states/evidence.state';

export const clinicalSignificanceSelectTypeOption: TypeOption = {
  name: 'clinical-significance-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Clinical Signficance',
      helpText: 'The impact of the variant for predictive, prognostic, diagnostic, or functional evidence types. For predisposing and oncogenic evidence, impact is only applied at the assertion level and N/A should be selected here.',
      placeholder: 'Not specified',
      options: $enum(EvidenceClinicalSignificance)
        .map((value, key) => {
          return { value: value, label: formatEvidenceEnum(value) }
        })
    },
    expressionProperties: {
      'templateOptions.options': (model: any) => {
        return state.getSignificanceOptions(model.evidenceType)
          .map(
            (value) => {
              return {
                value: value,
                label: formatEvidenceEnum(value)
              }
            })
      }
    }

  }
};
