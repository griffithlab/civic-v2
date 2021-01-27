/* eslint-disable */
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DiseaseOntologyId: any;
  NcitId: any;
  DateTime: any;
  EmailAddress: any;
  Url: any;
};



/**  @model  */
export type Entity = {
  id: Scalars['Int'];
  type: EntityType;
  name: Scalars['String'];
  description: Scalars['String'];
  displayName: Scalars['String'];
  lifecycleActions: Array<LifecycleAction>;
};

/**  @model  */
export type Gene = Entity & {
  __typename?: 'Gene';
  id: Scalars['Int'];
  type: EntityType;
  name: Scalars['String'];
  entrezId: Scalars['Int'];
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName: Scalars['String'];
  lifecycleActions: Array<LifecycleAction>;
  description: Scalars['String'];
  sources?: Maybe<Array<Maybe<Source>>>;
  variants?: Maybe<Array<Maybe<Variant>>>;
};

/**  @model  */
export type Variant = Entity & {
  __typename?: 'Variant';
  id: Scalars['Int'];
  type: EntityType;
  name: Scalars['String'];
  displayName: Scalars['String'];
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  lifecycleActions: Array<LifecycleAction>;
  description: Scalars['String'];
  evidence?: Maybe<Array<Maybe<Evidence>>>;
};

/**  @model  */
export type VariantGroup = Entity & {
  __typename?: 'VariantGroup';
  id: Scalars['Int'];
  type: EntityType;
  name: Scalars['String'];
  displayName: Scalars['String'];
  lifecycleActions: Array<LifecycleAction>;
  description: Scalars['String'];
  sources?: Maybe<Array<Maybe<Source>>>;
  variants: Array<Maybe<Variant>>;
};

/**  @model  */
export type Evidence = Entity & {
  __typename?: 'Evidence';
  id: Scalars['Int'];
  type: EntityType;
  name: Scalars['String'];
  displayName: Scalars['String'];
  lifecycleActions: Array<LifecycleAction>;
  description: Scalars['String'];
  status: EntityStatus;
  disease: Array<Disease>;
  drugs?: Maybe<Array<Maybe<Drug>>>;
  drugInteractionType?: Maybe<DrugInteractionType>;
  rating: EvidenceRating;
  evidenceLevel: EvidenceLevel;
  evidenceType: EvidenceType;
  evidenceDirection: Scalars['String'];
  clinicalSignificance: ClinicalSignificance;
  variantOrigin: VariantOrigin;
  supports?: Maybe<Array<Maybe<Assertion>>>;
};

/**  @model  */
export type Assertion = Entity & {
  __typename?: 'Assertion';
  id: Scalars['Int'];
  type: EntityType;
  name: Scalars['String'];
  displayName: Scalars['String'];
  lifecycleActions: Array<LifecycleAction>;
  description: Scalars['String'];
  status: EntityStatus;
  summary: Scalars['String'];
  evidence?: Maybe<Array<Maybe<Evidence>>>;
  disease?: Maybe<Array<Maybe<Disease>>>;
  rating: EvidenceRating;
  evidenceLevel: EvidenceLevel;
  assertionType: AssertionType;
  evidenceDirection: Scalars['String'];
  variantOrigin: Scalars['String'];
  drugInteractionType?: Maybe<Scalars['String']>;
  ampLevel?: Maybe<AmpLevels>;
  nccnGuideline?: Maybe<NccnGuidelines>;
  openChangeCount: Scalars['Int'];
};

/**  @model  */
export type Source = {
  __typename?: 'Source';
  id: Scalars['Int'];
  sourceType: SourceType;
  sourceUrl: Scalars['String'];
  name: Scalars['String'];
  fullJournalTitle?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  citationId: Scalars['Int'];
  journal: Scalars['String'];
  publicationDate?: Maybe<Scalars['DateTime']>;
  abstract: Scalars['String'];
  authorList?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorString?: Maybe<Scalars['String']>;
  ascoPresenter?: Maybe<Scalars['String']>;
  sourceSuggestions?: Maybe<Array<Maybe<SourceSuggestion>>>;
};

/**  @model  */
export type SourceSuggestion = {
  __typename?: 'SourceSuggestion';
  id: Scalars['Int'];
  sourceId: Scalars['Int'];
  sourceType: SourceType;
  sourceUrl?: Maybe<Scalars['Url']>;
  citationId: Scalars['Int'];
  citation: Scalars['String'];
  status: SuggestionStatus;
  journal: Scalars['String'];
  ascoAbstractId: Scalars['Int'];
  publicationYear: Scalars['Int'];
  submitter: User;
  gene?: Maybe<Gene>;
  variant?: Maybe<Variant>;
  disease?: Maybe<Disease>;
  initialComment?: Maybe<Comment>;
  createdAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<Scalars['String']>;
};

export enum SuggestionStatus {
  Curated = 'CURATED',
  Rejected = 'REJECTED',
  New = 'NEW'
}

export type Disease = {
  __typename?: 'Disease';
  id: Scalars['Int'];
  name: Scalars['String'];
  displayName: Scalars['String'];
  doid: Scalars['DiseaseOntologyId'];
  url?: Maybe<Scalars['String']>;
};

export type Drug = {
  __typename?: 'Drug';
  id: Scalars['Int'];
  name: Scalars['String'];
  displayName: Scalars['String'];
  ncitId: Scalars['NcitId'];
};

export type LifecycleAction = {
  __typename?: 'LifecycleAction';
  id: Scalars['Int'];
  type: LifecycleType;
  timestamp: Scalars['DateTime'];
  user?: Maybe<User>;
  organization?: Maybe<Organization>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  displayName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['EmailAddress'];
  comments?: Maybe<Array<Maybe<Comment>>>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
  description: Scalars['String'];
  parent?: Maybe<Organization>;
};

export enum EntityStatus {
  Submitted = 'SUBMITTED',
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

export enum EvidenceRating {
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE',
  Four = 'FOUR',
  Five = 'FIVE'
}

export enum AmpLevels {
  TierILevelA = 'TIER_I_LEVEL_A',
  TierILevelB = 'TIER_I_LEVEL_B',
  TierIiLevelC = 'TIER_II_LEVEL_C',
  TierIiLevelD = 'TIER_II_LEVEL_D',
  TierIii = 'TIER_III',
  TierIv = 'TIER_IV',
  Na = 'NA'
}

export enum SourceType {
  Pubmed = 'PUBMED',
  Asco = 'ASCO'
}

export enum NccnGuidelines {
  AcuteLymphoblasticLeukemia = 'ACUTE_LYMPHOBLASTIC_LEUKEMIA',
  AcuteMyeloidLeukemia = 'ACUTE_MYELOID_LEUKEMIA',
  AnalCarcinoma = 'ANAL_CARCINOMA',
  BladderCancer = 'BLADDER_CANCER',
  BoneCancer = 'BONE_CANCER',
  BreastCancer = 'BREAST_CANCER',
  CentralNervousSystemCancers = 'CENTRAL_NERVOUS_SYSTEM_CANCERS',
  CervicalCancer = 'CERVICAL_CANCER',
  ChronicLymphocyticLeukemiaSmallLymphocyticLymphoma = 'CHRONIC_LYMPHOCYTIC_LEUKEMIA_SMALL_LYMPHOCYTIC_LYMPHOMA',
  ChronicMyeloidLeukemia = 'CHRONIC_MYELOID_LEUKEMIA',
  ColonRectalCancer = 'COLON_RECTAL_CANCER',
  ColonCancer = 'COLON_CANCER',
  RectalCancer = 'RECTAL_CANCER',
  EsophagealAndEsophagogastricJunctionCancers = 'ESOPHAGEAL_AND_ESOPHAGOGASTRIC_JUNCTION_CANCERS',
  GastricCancer = 'GASTRIC_CANCER',
  HairyCellLeukemia = 'HAIRY_CELL_LEUKEMIA',
  HeadAndNeckCancers = 'HEAD_AND_NECK_CANCERS',
  HepatobiliaryCancers = 'HEPATOBILIARY_CANCERS',
  HodgkinLymphoma = 'HODGKIN_LYMPHOMA',
  KidneyCancer = 'KIDNEY_CANCER',
  MalignantPleuralMesothelioma = 'MALIGNANT_PLEURAL_MESOTHELIOMA',
  Melanoma = 'MELANOMA',
  MultipleMyelomaOtherPlasmaCellNeoplasms = 'MULTIPLE_MYELOMA_OTHER_PLASMA_CELL_NEOPLASMS',
  MultipleMyeloma = 'MULTIPLE_MYELOMA',
  SystemicLightChainAmyloidosis = 'SYSTEMIC_LIGHT_CHAIN_AMYLOIDOSIS',
  WaldenstromsMacroglobulinemiaLymphoplasmacyticLymphoma = 'WALDENSTROMS_MACROGLOBULINEMIA_LYMPHOPLASMACYTIC_LYMPHOMA',
  MyelodysplasticSyndromes = 'MYELODYSPLASTIC_SYNDROMES',
  MyeloproliferativeNeoplasms = 'MYELOPROLIFERATIVE_NEOPLASMS',
  NeuroendocrineTumors = 'NEUROENDOCRINE_TUMORS',
  NonHodgkinsLymphomas = 'NON_HODGKINS_LYMPHOMAS',
  BCellLymphomas = 'B_CELL_LYMPHOMAS',
  PrimaryCutaneousBCellLymphomas = 'PRIMARY_CUTANEOUS_B_CELL_LYMPHOMAS',
  TCellLymphomas = 'T_CELL_LYMPHOMAS',
  NonMelanomaSkinCancers = 'NON_MELANOMA_SKIN_CANCERS',
  BasalCellSkinCancer = 'BASAL_CELL_SKIN_CANCER',
  DermatofibrosarcomaProtuberans = 'DERMATOFIBROSARCOMA_PROTUBERANS',
  MerkelCellCarcinoma = 'MERKEL_CELL_CARCINOMA',
  SquamousCellSkinCancer = 'SQUAMOUS_CELL_SKIN_CANCER',
  NonSmallCellLungCancer = 'NON_SMALL_CELL_LUNG_CANCER',
  OccultPrimary = 'OCCULT_PRIMARY',
  OvarianCancer = 'OVARIAN_CANCER',
  PancreaticAdenocarcinoma = 'PANCREATIC_ADENOCARCINOMA',
  PenileCancer = 'PENILE_CANCER',
  ProstateCancer = 'PROSTATE_CANCER',
  SmallCellLungCancer = 'SMALL_CELL_LUNG_CANCER',
  SoftTissueSarcoma = 'SOFT_TISSUE_SARCOMA',
  TesticularCancer = 'TESTICULAR_CANCER',
  ThymomasAndThymicCarcinomas = 'THYMOMAS_AND_THYMIC_CARCINOMAS',
  ThyroidCarcinoma = 'THYROID_CARCINOMA',
  UterineNeoplasms = 'UTERINE_NEOPLASMS',
  VulvarCancer = 'VULVAR_CANCER'
}

export enum EvidenceType {
  Diagnostic = 'DIAGNOSTIC',
  Functional = 'FUNCTIONAL',
  Predictive = 'PREDICTIVE',
  Predisposing = 'PREDISPOSING',
  Prognostic = 'PROGNOSTIC'
}

export enum AssertionType {
  Diagnostic = 'DIAGNOSTIC',
  Predictive = 'PREDICTIVE',
  Predisposing = 'PREDISPOSING',
  Prognostic = 'PROGNOSTIC'
}

export enum EntityType {
  Evidence = 'EVIDENCE',
  Gene = 'GENE',
  Source = 'SOURCE',
  Variant = 'VARIANT',
  VariantGroup = 'VARIANT_GROUP'
}

export enum EvidenceLevel {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E'
}

export enum ClinicalSignificance {
  SensitivityResponse = 'SENSITIVITY_RESPONSE',
  Resistance = 'RESISTANCE',
  AdverseResponse = 'ADVERSE_RESPONSE',
  ReducedSensitivity = 'REDUCED_SENSITIVITY',
  Positive = 'POSITIVE',
  Negative = 'NEGATIVE',
  BettterOutcome = 'BETTTER_OUTCOME',
  PoorOutcome = 'POOR_OUTCOME',
  GainOfFunction = 'GAIN_OF_FUNCTION',
  LossOfFunction = 'LOSS_OF_FUNCTION',
  UnalteredFunction = 'UNALTERED_FUNCTION',
  Neomorphic = 'NEOMORPHIC',
  DominantNegative = 'DOMINANT_NEGATIVE',
  Oncogenic = 'ONCOGENIC',
  Unknown = 'UNKNOWN',
  Na = 'NA'
}

export enum VariantOrigin {
  Somatic = 'SOMATIC',
  RareGermline = 'RARE_GERMLINE',
  CommonGermline = 'COMMON_GERMLINE',
  Unknown = 'UNKNOWN',
  Na = 'NA'
}

export enum DrugInteractionType {
  Combination = 'COMBINATION',
  Sequential = 'SEQUENTIAL',
  Substitutes = 'SUBSTITUTES'
}

export enum LifecycleType {
  Accepted = 'ACCEPTED',
  LastModified = 'LAST_MODIFIED',
  LastReviewed = 'LAST_REVIEWED',
  Rejected = 'REJECTED'
}

export type Query = {
  __typename?: 'Query';
  allEvidence: Array<Maybe<Evidence>>;
  allGenes: Array<Maybe<Gene>>;
  allVariants: Array<Variant>;
  allUsers: Array<Maybe<User>>;
  allAssertions: Array<Maybe<Assertion>>;
  allVariantGroups: Array<Maybe<VariantGroup>>;
  allSources: Array<Maybe<Source>>;
  allDrugs: Array<Maybe<Drug>>;
  allDiseases: Array<Maybe<Disease>>;
  allSourceSuggestions: Array<Maybe<SourceSuggestion>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  domain?: Maybe<Scalars['String']>;
};






export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { allGenes: Array<Maybe<(
    { __typename?: 'Gene' }
    & Pick<Gene, 'id' | 'name'>
  )>> }
);

export const Document = gql`
    {
  allGenes {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GQL extends Apollo.Query<Query, QueryVariables> {
    document = Document;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }