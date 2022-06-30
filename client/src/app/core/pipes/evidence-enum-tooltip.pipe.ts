import { Pipe, PipeTransform } from '@angular/core';
import { AssertionType, EvidenceClinicalSignificance, EvidenceType, Maybe } from '@app/generated/civic.apollo';
import { InputEnum } from '../utilities/enum-formatters/format-evidence-enum';

export type AttributeTooltipMap = {
  [key in EvidenceType | AssertionType]?: {
    [key in InputEnum]?: string
  }
}

@Pipe({
  name: 'evidenceEnumTooltip',
  pure: true
})
export class EvidenceEnumTooltipPipe implements PipeTransform {
  attributeTooltips: AttributeTooltipMap = {
    [EvidenceType.Predictive]: {
      [EvidenceClinicalSignificance.AdverseResponse]:
        'Associated with an adverse response to drug treatment',
      [EvidenceClinicalSignificance.ReducedSensitivity]:
        'Response to treatment is lower than seen in other treatment contexts',
      [EvidenceClinicalSignificance.Resistance]:
        'Associated with clinical or preclinical resistance to treatment',
      [EvidenceClinicalSignificance.Sensitivityresponse]:
        'Associated with clinical or preclinical resistance to treatment',
      [EvidenceClinicalSignificance.Na]:
        'Clinical Significance is not applicable',
    },

    [EvidenceType.Diagnostic]: {
      [EvidenceClinicalSignificance.Positive]:
        'Associated with diagnosis of disease or subtype',
      [EvidenceClinicalSignificance.Negative]:
        'Associated with lack of disease or subtype',
    },

    [EvidenceType.Prognostic]: {
      [EvidenceClinicalSignificance.BetterOutcome]:
        'Demonstrates better than expected clinical outcome',
      [EvidenceClinicalSignificance.PoorOutcome]:
        'Demonstrates worse than expected clinical outcome',
      [EvidenceClinicalSignificance.Na]:
        'Clinical Significance is not applicable'
    },

    [EvidenceType.Prognostic]: {
      [EvidenceClinicalSignificance.Na]:
        'Clinical Significance is not applicable'
    },

    [EvidenceType.Functional]: {
      [EvidenceClinicalSignificance.GainOfFunction]:
        'Sequence variant confers an increase in normal gene function',
      [EvidenceClinicalSignificance.LossOfFunction]:
        'Sequence variant confers a diminished or abolished function',
      [EvidenceClinicalSignificance.UnalteredFunction]:
        'Gene product of sequence variant is unchanged',
      [EvidenceClinicalSignificance.Neomorphic]:
        'Sequence variant creates a novel function',
      [EvidenceClinicalSignificance.Neomorphic]:
        'Sequence variant abrogates function of wildtype allele gene product',
    },

    [EvidenceType.Oncogenic]: {
      [EvidenceClinicalSignificance.Na]:
        'Clinical Significance is not applicable'
    }
  }

  transform(value: Maybe<InputEnum>, context: Maybe<EvidenceType | AssertionType>): string {
    let tooltip: string | undefined
    if (context) {
      if (value) {
        const entityTooltips = this.attributeTooltips[context]
        if (entityTooltips) {
          tooltip = entityTooltips[value]
        } else {
          console.warn(`evidenceEnumTooltip pipe could not find tooltips for context ${context}`)
        }
      }
    } else {
      console.warn('evidenceEnumTooltip pipe requires EvidenceType or AssertionType context.')
    }
    return tooltip ? tooltip : ''
  }
}
