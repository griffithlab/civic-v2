import {
  AssertionType,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  TherapyInteraction,
  VariantOrigin,
} from '@app/generated/civic.apollo'

// map of tooltips for attributes without contextual differences
export type tooltipMap = {
  [key: string | symbol]: {
    // attribute name
    [key: string | symbol]: string // attribute value
  }
}

export const tooltips: tooltipMap = {
  evidenceType: {
    [EvidenceType.Diagnostic]: `Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)`,
    [EvidenceType.Functional]: `Evidence pertains to a variant that alters biological function from the reference state`,
    [EvidenceType.Oncogenic]: `Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer`,
    [EvidenceType.Predictive]: `Evidence pertains to a variant's effect on therapeutic response`,
    [EvidenceType.Predisposing]: `Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)`,
    [EvidenceType.Prognostic]: `Evidence pertains to a variant's impact on disease progression, severity, or patient survival`,
  },

  assertionType: {
    [AssertionType.Diagnostic]: `Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)`,
    [AssertionType.Predictive]: `Assertion pertains to a variant's effect on therapeutic response`,
    [AssertionType.Predisposing]: `Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)`,
    [AssertionType.Prognostic]: `Assertion pertains to a variant's impact on disease progression, severity, or patient survival`,
    [AssertionType.Oncogenic]: `Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer`,
  },

  variantOrigin: {
    [VariantOrigin.Somatic]:
      'Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring',
    [VariantOrigin.RareGermline]:
      'Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item',
    [VariantOrigin.CommonGermline]:
      'Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item',
    [VariantOrigin.Unknown]:
      'The variant origin is uncertain based on the available evidence',
    [VariantOrigin.Na]:
      'The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin',
    [VariantOrigin.Combined]:
      'Variants in the Molecular Profile span multiple Origin types.',
    [VariantOrigin.Mixed]:
      'The population of patient variants described in the Evidence is a mixture of Somatic and Germline.',
  },

  evidenceLevel: {
    [EvidenceLevel.A]: 'Proven/consensus association in human medicine',
    [EvidenceLevel.B]:
      'Clinical trial or other primary patient data supports association',
    [EvidenceLevel.C]: 'Individual case reports from clinical journals',
    [EvidenceLevel.D]: 'In vivo or in vitro models support association',
    [EvidenceLevel.E]: 'Indirect evidence',
  },

  evidenceLevelBrief: {
    [EvidenceLevel.A]: 'Validated association',
    [EvidenceLevel.B]: 'Clinical evidence',
    [EvidenceLevel.C]: 'Case Study',
    [EvidenceLevel.D]: 'Preclinical evidence',
    [EvidenceLevel.E]: 'Inferential association',
  },

  therapyInteractionType: {
    [TherapyInteraction.Combination]:
      'The therapies listed were used as part of a combination therapy approach',
    [TherapyInteraction.Sequential]:
      'The therapies listed were used at separate timepoints in the same treatment plan',
    [TherapyInteraction.Substitutes]:
      'The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting',
  },

  evidenceRating: {
    1: 'Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims',
    2: 'Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing',
    3: 'Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning',
    4: 'Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning',
    5: 'Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods',
  },
}

// a map of tooltips that differ based on their display context (entity type, evidence/assertion type)
export type ContextualTooltipMap = {
  [key: string | symbol]: {
    // TODO: type as [key in ContextualAttribute]?: {
    [key: string | symbol]: {
      // TODO: type as [key in TooltipContext]?: {
      [key: string | symbol]: {
        // TODO: type as [key in InputEnum]? : {}
        [key: string | number | symbol]: string // TODO: type as [key in TooltipEntity]
      }
    }
  }
}

export const contextualTooltips: ContextualTooltipMap = {
  // Clinical Significance
  significance: {
    PREDICTIVE: {
      ADVERSE_RESPONSE: {
        EvidenceItem:
          'Associated with an adverse response to theraputic treatment',
        Assertion:
          'Associated with an adverse response to theraputic treatment',
      },
      REDUCED_SENSITIVITY: {
        EvidenceItem:
          'Response to treatment is lower than seen in other treatment contexts',
        Assertion:
          'Response to treatment is lower than seen in other treatment contexts',
      },
      RESISTANCE: {
        EvidenceItem:
          'Associated with clinical or preclinical resistance to treatment',
        Assertion:
          'Associated with clinical or preclinical resistance to treatment',
      },
      SENSITIVITYRESPONSE: {
        EvidenceItem:
          'Associated with clinical or preclinical response to treatment',
        Assertion:
          'Associated with a clinical or preclinical response to treatment',
      },
      NA: {
        EvidenceItem: 'Clinical Significance is not applicable',
        Assertion: 'Clinical Significance is not applicable',
      },
    },
    DIAGNOSTIC: {
      POSITIVE: {
        EvidenceItem: 'Associated with diagnosis of disease or subtype',
        Assertion: 'Associated with diagnosis of disease or subtype',
      },
      NEGATIVE: {
        EvidenceItem: 'Associated with lack of disease or subtype',
        Assertion: 'Associated with lack of disease or subtype',
      },
    },
    PROGNOSTIC: {
      BETTER_OUTCOME: {
        EvidenceItem: 'Demonstrates better than expected clinical outcome',
        Assertion: 'Demonstrates better than expected clinical outcome',
      },
      POOR_OUTCOME: {
        EvidenceItem: 'Demonstrates worse than expected clinical outcome',
        Assertion: 'Demonstrates worse than expected clinical outcome',
      },
      Na: {
        EvidenceItem: 'Clinical Significance is not applicable',
        Assertion: 'Clinical Significance is not applicable',
      },
    },
    PREDISPOSING: {
      PATHOGENIC: {
        Assertion: 'Very strong evidence the variant is pathogenic',
      },
      LIKELY_PATHOGENIC: {
        Assertion: 'Strong evidence (>90% certainty) the variant is pathogenic',
      },
      BENIGN: {
        Assertion: 'Very strong evidence the variant is benign',
      },
      LIKELY_BENIGN: {
        Assertion: 'Not expected to have a major effect on disease',
      },
      UNCERTAIN_SIGNIFICANCE: {
        Assertion:
          'Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting',
      },
      Na: {
        EvidenceItem: 'Clinical Significance is not applicable',
      },
      PREDISPOSITION: {
        EvidenceItem:
          'Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification.',
      },
      PROTECTIVENESS: {
        EvidenceItem:
          'Germline variant has properties that protect individuals from acquiring cancer.',
      },
    },
    ONCOGENIC: {
      ONCOGENICITY: {
        EvidenceItem:
          'Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.',
      },
      PROTECTIVENESS: {
        EvidenceItem:
          'Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties.',
      },
      ONCOGENIC: {
        Assertion: 'Very strong evidence the variant is oncogenic.',
      },
      LIKELY_ONCOGENIC: {
        Assertion: 'Strong evidence the variant is oncogenic.',
      },
      BENIGN: {
        Assertion:
          'Very strong evidence the variant does not have oncogenic properties.',
      },
      LIKELY_BENIGN: {
        Assertion:
          'Strong evidence the variant does not have oncogenic properties.',
      },
      UNCERTAIN_SIGNIFICANCE: {
        Assertion:
          'Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting.',
      },
    },
  },
  evidenceDirection: {
    PREDICTIVE: {
      SUPPORTS: {
        EvidenceItem:
          "The experiment or study supports this variant's response to a therapy",
      },
      DOES_NOT_SUPPORT: {
        EvidenceItem:
          'The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy',
      },
    },
    DIAGNOSTIC: {
      SUPPORTS: {
        EvidenceItem:
          "The experiment or study supports this variant's impact on the diagnosis of disease or subtype",
      },
      DOES_NOT_SUPPORT: {
        EvidenceItem:
          "The experiment or study does not support this variant's impact on diagnosis of disease or subtype",
      },
    },
    PROGNOSTIC: {
      SUPPORTS: {
        EvidenceItem:
          "The experiment or study supports this variant's impact on prognostic outcome",
      },
      DOES_NOT_SUPPORT: {
        EvidenceItem:
          'The experiment or study does not support a prognostic association between variant and outcome',
      },
    },
    PREDISPOSING: {
      Na: {
        EvidenceItem: 'Evidence Direction is not applicable',
      },
      SUPPORTS: {
        EvidenceItem:
          'The evidence supports a pathogenic or a protective role for a germline variant in cancer.',
      },
      DOES_NOT_SUPPORT: {
        EvidenceItem:
          'The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer.',
      },
    },
    FUNCTIONAL: {
      SUPPORTS: {
        EvidenceItem:
          'The experiment or study supports this variant causing alteration or non-alteration of the gene product function',
      },
      DOES_NOT_SUPPORT: {
        EvidenceItem:
          'The experiment or study does not support this variant causing alteration or non-alteration of the gene product function',
      },
    },
    ONCOGENIC: {
      NA: {
        EvidenceItem:
          'Evidence Direction is not applicable for Oncogenic Evidence Type',
      },
      SUPPORTS: {
        EvidenceItem: `The evidence supports an oncogenic or protective role for a somatic variant`,
      },
      DOES_NOT_SUPPORT: {
        EvidenceItem: `The evidence does not support an oncogenic or protective role for a somatic variant`,
      },
    },
  },
  assertionDirection: {
    PREDICTIVE: {
      SUPPORTS: {
        Assertion:
          "The Assertion and associated Evidence Items support this variant's response to a therapy",
      },
      DOES_NOT_SUPPORT: {
        Assertion:
          'The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy',
      },
    },
    DIAGNOSTIC: {
      SUPPORTS: {
        Assertion:
          "The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype",
      },
      DOES_NOT_SUPPORT: {
        Assertion:
          "The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype",
      },
    },
    PROGNOSTIC: {
      SUPPORTS: {
        Assertion:
          "The Assertion and associated Evidence Items support this variant's impact on prognostic outcome",
      },
      DOES_NOT_SUPPORT: {
        Assertion:
          'The Assertion and associated evidence does not support a prognostic association between variant and outcome',
      },
    },
    PREDISPOSING: {
      SUPPORTS: {
        Assertion:
          "The Assertion and associated Evidence Items support a variant's impact on predisposing outcome",
      },
    },
    FUNCTIONAL: {
      SUPPORTS: {
        Assertion:
          'The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function',
      },
      DOES_NOT_SUPPORT: {
        Assertion:
          'The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function',
      },
    },
    ONCOGENIC: {
      SUPPORTS: {
        Assertion: `The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance`,
      },
    },
  },
}

export function getEvidenceEnumTooltip(
  name: string | symbol,
  value: string | symbol | number,
  contextType: Maybe<symbol>,
  contextEntity: Maybe<string>
): string {
  let tooltip: string | undefined

  if (contextType && contextEntity) {
    tooltip = contextualTooltips[name][contextType][value][contextEntity]
  } else {
    tooltip = tooltips[name][value]
  }

  return tooltip ? tooltip : ''
}
