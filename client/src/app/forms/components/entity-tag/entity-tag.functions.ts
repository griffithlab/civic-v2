import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import { LinkableEntity } from './entity-tag.types'
import { Apollo, gql } from 'apollo-angular'
import { inject } from '@angular/core'
import {
  GeneVariantTagFieldsFragmentDoc,
  FactorVariantTagFieldsFragmentDoc,
  FusionVariantTagFieldsFragmentDoc,
  ClinicalTrialTagFieldsFragmentDoc,
  EvidenceTagFieldsFragmentDoc,
  AssertionTagFieldsFragmentDoc,
  TherapyTagFieldsFragmentDoc,
  VariantTagFieldsFragmentDoc,
  MolecularProfileTagFieldsFragmentDoc,
  SourceTagFieldsFragmentDoc,
  VariantTypeTagFieldsFragmentDoc,
  VariantGroupTagFieldsFragmentDoc,
  DiseaseTagFieldsFragmentDoc,
  VariantLinkableTagFieldsFragmentDoc,
  GeneVariantLinkableTagFieldsFragmentDoc,
  FactorVariantLinkableTagFieldsFragmentDoc,
  ClinicalTrialLinkableTagFieldsFragmentDoc,
  FusionVariantLinkableTagFieldsFragmentDoc,
  MolecularProfileLinkableTagFieldsFragmentDoc,
  EvidenceLinkableTagFieldsFragmentDoc,
  AssertionLinkableTagFieldsFragmentDoc,
  TherapyLinkableTagFieldsFragmentDoc,
  DiseaseLinkableTagFieldsFragmentDoc,
  SourceLinkableTagFieldsFragmentDoc,
  VariantTypeLinkableTagFieldsFragmentDoc,
  VariantGroupLinkableTagFieldsFragmentDoc,
  Maybe,
  ClingenCodeTagFieldsFragmentDoc,
  AcmgCodeTagFieldsFragmentDoc,
  PhenotypeTagFieldsFragmentDoc,
  PhenotypeLinkableTagFieldsFragmentDoc,
} from '@app/generated/civic.apollo'

export const isLinkableEntity: TypeGuard<any, LinkableEntity> = (
  entity: any
): entity is LinkableEntity =>
  entity !== undefined &&
  entity.__typename &&
  entity.id &&
  entity.name !== undefined

const entityTagFieldsMap = new Map<string, Maybe<ReturnType<typeof gql>>>([
  ['Variant', VariantTagFieldsFragmentDoc],
  ['GeneVariant', GeneVariantTagFieldsFragmentDoc],
  ['FactorVariant', FactorVariantTagFieldsFragmentDoc],
  ['FusionVariant', FusionVariantTagFieldsFragmentDoc],
  ['ClinicalTrial', ClinicalTrialTagFieldsFragmentDoc],
  ['EvidenceItem', EvidenceTagFieldsFragmentDoc],
  ['Assertion', AssertionTagFieldsFragmentDoc],
  ['Therapy', TherapyTagFieldsFragmentDoc],
  ['Disease', DiseaseTagFieldsFragmentDoc],
  ['MolecularProfile', MolecularProfileTagFieldsFragmentDoc],
  ['Source', SourceTagFieldsFragmentDoc],
  ['VariantType', VariantTypeTagFieldsFragmentDoc],
  ['VariantGroup', VariantGroupTagFieldsFragmentDoc],
  ['ClingenCode', ClingenCodeTagFieldsFragmentDoc],
  ['AcmgCode', AcmgCodeTagFieldsFragmentDoc],
  ['Phenotype', PhenotypeTagFieldsFragmentDoc],
])

const entityLinkableTagFieldsMap = new Map<
  string,
  Maybe<ReturnType<typeof gql>>
>([
  ['Variant', VariantLinkableTagFieldsFragmentDoc],
  ['GeneVariant', GeneVariantLinkableTagFieldsFragmentDoc],
  ['FactorVariant', FactorVariantLinkableTagFieldsFragmentDoc],
  ['FusionVariant', FusionVariantLinkableTagFieldsFragmentDoc],
  ['ClinicalTrial', ClinicalTrialLinkableTagFieldsFragmentDoc],
  ['EvidenceItem', EvidenceLinkableTagFieldsFragmentDoc],
  ['Assertion', AssertionLinkableTagFieldsFragmentDoc],
  ['Therapy', TherapyLinkableTagFieldsFragmentDoc],
  ['Disease', DiseaseLinkableTagFieldsFragmentDoc],
  ['MolecularProfile', MolecularProfileLinkableTagFieldsFragmentDoc],
  ['Source', SourceLinkableTagFieldsFragmentDoc],
  ['VariantType', VariantTypeLinkableTagFieldsFragmentDoc],
  ['VariantGroup', VariantGroupLinkableTagFieldsFragmentDoc],
  ['Phenotype', PhenotypeLinkableTagFieldsFragmentDoc],
])

export const getFragmentDoc = (
  typename: string,
  isLinked: boolean
): Maybe<ReturnType<typeof gql>> => {
  if (isLinked) {
    return entityLinkableTagFieldsMap.get(typename)
  }
  return entityTagFieldsMap.get(typename)
}
