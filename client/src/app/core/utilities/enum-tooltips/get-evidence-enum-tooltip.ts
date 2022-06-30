import { AssertionType, EvidenceClinicalSignificance, EvidenceDirection, EvidenceType, Maybe } from "@app/generated/civic.apollo";
import { InputEnum } from "../enum-formatters/format-evidence-enum";

export type EnumTooltipContext = EvidenceType | AssertionType

export type AttributeTooltipMap = {
  [key in EvidenceType | AssertionType]?: {
    [key in InputEnum]?: string
  }
}

export const tooltips: AttributeTooltipMap = {
  // Evidence Item Clinical Significance tooltips
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

  [EvidenceType.Predisposing]: {
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
  },

 // Evidence Item Evidence Direction tooltips
  // [EvidenceType.Predictive]: {
  //   [EvidenceDirection.Supports]:
  //     'The experiment or study supports this variant\'s response to a drug',
  //   [EvidenceDirection.DoesNotSupport]:
  //     'The experiment or study does not support, or was inconclusive of an interaction between this variant and a drug',
  // },

  // [EvidenceType.Diagnostic]: {
  //   [EvidenceDirection.Supports]:
  //     'The experiment or study supports this variant\'s impact on the diagnosis of disease or subtype',
  //   [EvidenceDirection.DoesNotSupport]:
  //     'The experiment or study does not support this variant\'s impact on diagnosis of disease or subtype',
  // },

  // [EvidenceType.Prognostic]: {
  //   [EvidenceDirection.Supports]:
  //     'The experiment or study supports this variant\'s impact on prognostic outcome',
  //   [EvidenceDirection.DoesNotSupport]:
  //     'The experiment or study does not support a prognostic association between variant and outcome',
  // },

  // [EvidenceType.Predisposing]: {
  //   [EvidenceDirection.Na]:
  //     'Evidence Direction is not applicable'
  // },

  // [EvidenceType.Functional]: {
  //   [EvidenceDirection.Supports]:
  //     'The experiment or study supports this variant causing alteration or non-alteration of the gene product function',
  //   [EvidenceDirection.DoesNotSupport]:
  //     'The experiment or study does not support this variant causing alteration or non-alteration of the gene product function',
  // },

  // [EvidenceType.Oncogenic]: {
  //   [EvidenceDirection.Na]:
  //     'Evidence Direction is not applicable for Oncogenic Evidence'
  // }
}

export function getEvidenceEnumTooltip(
  value: Maybe<InputEnum>,
  context: Maybe<EvidenceType | AssertionType>
): string {
  let tooltip: string | undefined
  if (context) {
    if (value) {
      const entityTooltips = tooltips[context]
      if (entityTooltips) {
        tooltip = entityTooltips[value]
      } else {
        console.warn(`getEvidenceEnumTooltip could not find tooltips for context ${context}`)
      }
    }
  } else {
    console.warn('getEvidenceEnumTooltip requires EvidenceType or AssertionType context.')
  }
  console.log(`tooltip for ${value} in context ${context}: ${tooltip}`)
  return tooltip ? tooltip : ''
}
