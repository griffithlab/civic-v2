import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { VariantOrigin } from '@app/generated/civic.apollo';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';

const optionText: { [option: string]: string } = {
  'SOMATIC': 'Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring.',
  'RARE_GERMLINE': 'Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item.',
  'COMMON_GERMLINE': 'Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item.',
  'UNKNOWN': 'The variant origin is uncertain based on the available evidence.',
  'NA': 'The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin.',
  'MIXED': 'Variants in the corresponding Molecular Profile have heterogenous origins.',
}

export const variantOriginSelectTypeOption: TypeOption = {
  name: 'variant-origin-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Variant Origin',
      placeholder: 'None specified',
      helpText: 'Origin of variant',
      options: [
        {value: VariantOrigin.Somatic, label: formatEvidenceEnum(VariantOrigin.Somatic)},
        {value: VariantOrigin.RareGermline, label: formatEvidenceEnum(VariantOrigin.RareGermline)},
        {value: VariantOrigin.CommonGermline, label: formatEvidenceEnum(VariantOrigin.CommonGermline)},
        {value: VariantOrigin.Unknown, label: formatEvidenceEnum(VariantOrigin.Unknown)},
        {value: VariantOrigin.Na, label: formatEvidenceEnum(VariantOrigin.Na)},
        {value: VariantOrigin.Mixed, label: formatEvidenceEnum(VariantOrigin.Mixed)},
      ]
    },
    expressionProperties: {
      'templateOptions.optionText': (m: any, st: any, ffc?: FormlyFieldConfig) => {
        return optionText[m.variantOrigin]
      }
    }
  }
};
