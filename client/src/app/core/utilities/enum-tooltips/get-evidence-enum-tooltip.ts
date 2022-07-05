import { AssertionClinicalSignificance, AssertionDirection, AssertionType, DrugInteraction, EvidenceClinicalSignificance, EvidenceDirection, EvidenceLevel, EvidenceType, Maybe, Scalars, SourceSource, VariantOrigin } from "@app/generated/civic.apollo";
import { InputEnum } from "../enum-formatters/format-evidence-enum";
import { Assertion, EvidenceItem, Gene, Variant, VariantGroup } from '@app/generated/civic.apollo';

export type EnumTooltipContext = EvidenceType | AssertionType | undefined

export type EnumTooltipEntity = Assertion | EvidenceItem | Gene | Variant | VariantGroup

export type EnumContextualTooltipMap = {
  [key in EvidenceType | AssertionType]?: {
    [key in InputEnum]?: string
  }
}

export type EnumTooltipMap = {
  [key in InputEnum]?: string
}

export type RatingTooltipMap = {
  [key: Scalars['Int']]: string
}

export const tooltips: EnumTooltipMap = {
  /*
   * SHARED ATTRIBUTE TOOLTIPS
   */

  // NOTE: Ratings have their own map, as they're not enums

  // Variant Origin
  [VariantOrigin.Somatic]: 'Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring.',
  [VariantOrigin.RareGermline]: 'Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item.',
  [VariantOrigin.CommonGermline]: 'Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item.',
  [VariantOrigin.Unknown]: 'The variant origin is uncertain based on the available evidence.',
  [VariantOrigin.Na]: 'The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin.',

  // Source Source
  [SourceSource.Pubmed]: 'Evidence item source uses a PubMed publication.',
  [SourceSource.Asco]: 'Evidence item source uses an ASCO abstract.',

  // Evidence Level
  [EvidenceLevel.A]: 'Proven/consensus association in human medicine',
  [EvidenceLevel.B]: 'Clinical trial or other primary patient data supports association',
  [EvidenceLevel.C]: 'Individual case reports from clinical journals',
  [EvidenceLevel.D]: 'In vivo or in vitro models support association',
  [EvidenceLevel.E]: 'Indirect evidence',

  // Drug Interaction Type
  [DrugInteraction.Combination]: 'The drugs listed were used as part of a combination therapy approach',
  [DrugInteraction.Sequential]: 'The drugs listed were used at separate timepoints in the same treatment plan',
  [DrugInteraction.Substitutes]: 'The drugs listed are often considered to be of the same family, or behave similarly in a treatment setting',

  /*
   * EVIDENCE ITEM ATTRIBUTE TOOLTIPS
   */

  // Evidence Type
  [EvidenceType.Diagnostic]: 'Evidence pertains to a variant\'s impact on patient diagnosis (cancer subtype)',

  [EvidenceType.Functional]: 'Evidence pertains to a variant that alters biological function from the reference state',
  [EvidenceType.Oncogenic]: 'Evidence pertains to a somatic variant\'s involvement in tumor pathogenesis as described by the Hallmarks of Cancer',
  [EvidenceType.Predictive]: 'Evidence pertains to a variant\'s effect on therapeutic response',
  [EvidenceType.Predisposing]: 'Evidence pertains to a germline variant\'s role in conferring susceptibility to disease (including pathogenicity evaluations)',
  [EvidenceType.Prognostic]: 'Evidence pertains to a variant\'s impact on disease progression, severity, or patient survival',

}

/* RATING TOOLTIPS
 * requires its own map b/c ratings are specified as Scalars['Int'], not an enum
 */
export const ratingTooltipMap = {
  1: 'Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.',
  2: 'Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.',
  3: 'Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.',
  4: 'Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.',
  5: 'Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods.'
}

export const contextualTooltips: EnumContextualTooltipMap = {
  /*
   * EVIDENCE ITEM CONTEXTUAL ATTRIBUTE TOOLTIPS
   *
   */
  /* Predictive Evidence Context */
  [EvidenceType.Predictive]: {
    // Clinical Significance
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

    // Direction
    [EvidenceDirection.Supports]:
      'The experiment or study supports this variant\'s response to a drug',
    [EvidenceDirection.DoesNotSupport]:
      'The experiment or study does not support, or was inconclusive of an interaction between this variant and a drug',
  },

  /* Diagnostic Evidence Context */
  [EvidenceType.Diagnostic]: {
    // Clinical Signififance
    [EvidenceClinicalSignificance.Positive]:
      'Associated with diagnosis of disease or subtype',
    [EvidenceClinicalSignificance.Negative]:
      'Associated with lack of disease or subtype',

    // Direction
    [EvidenceDirection.Supports]:
      'The experiment or study supports this variant\'s impact on the diagnosis of disease or subtype',
    [EvidenceDirection.DoesNotSupport]:
      'The experiment or study does not support this variant\'s impact on diagnosis of disease or subtype',

  },

  /* Prognostic Evidence Context */
  [EvidenceType.Prognostic]: {
    // Clinical Significance
    [EvidenceClinicalSignificance.BetterOutcome]:
      'Demonstrates better than expected clinical outcome',
    [EvidenceClinicalSignificance.PoorOutcome]:
      'Demonstrates worse than expected clinical outcome',
    [EvidenceClinicalSignificance.Na]:
      'Clinical Significance is not applicable',

    // Direction
    [EvidenceDirection.Supports]:
      'The experiment or study supports this variant\'s impact on prognostic outcome',
    [EvidenceDirection.DoesNotSupport]:
      'The experiment or study does not support a prognostic association between variant and outcome',

  },

  /* Predisposing Evidence Context */
  [EvidenceType.Predisposing]: {
    // Clinical Significance
    [EvidenceClinicalSignificance.Na]:
      'Clinical Significance is not applicable',

    // Direction
    [EvidenceDirection.Na]:
      'Evidence Direction is not applicable'
  },

  /* Functional Evidence Context */
  [EvidenceType.Functional]: {
    // Clinical Significance
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

    // Direction
    [EvidenceDirection.Supports]:
      'The experiment or study supports this variant causing alteration or non-alteration of the gene product function',
    [EvidenceDirection.DoesNotSupport]:
      'The experiment or study does not support this variant causing alteration or non-alteration of the gene product function',
  },

  /* Oncogenic Evidence Context */
  [EvidenceType.Oncogenic]: {
    // Clinical Significance
    [EvidenceClinicalSignificance.Na]:
      'Clinical Significance is not applicable',

    // Direction
    [EvidenceDirection.Na]:
      'Evidence Direction is not applicable for Oncogenic Evidence'
  },
}

export function getEvidenceEnumTooltip(
  value: InputEnum,
  entity: EnumTooltipEntity
): string {

  const requiresContext = [
    EvidenceClinicalSignificance,
    EvidenceDirection,
    AssertionClinicalSignificance,
    AssertionDirection,
  ]

  let tooltip: string | undefined
  // if tooltip type does not require context, obtain
  // value from tooltips: EnumTooltipMap
  // console.log(value)
  // if (context) {
  //   if (value) {
  //     const entityTooltips = contextualTooltips[context]
  //     if (entityTooltips) {
  //       tooltip = entityTooltips[value]
  //     } else {
  //       console.warn(`getEvidenceEnumTooltip could not find contextualTooltips for context ${context}`)
  //     }
  //   }
  // } else {
  //   console.warn('getEvidenceEnumTooltip requires EvidenceType or AssertionType context.')
  // }
  // console.log(`tooltip for ${value} in context ${context}: ${tooltip}`)
  return tooltip ? tooltip : ''
}
