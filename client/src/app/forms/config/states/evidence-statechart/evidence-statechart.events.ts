import {
  TherapyInteraction,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  VariantOrigin,
} from '@app/generated/civic.apollo'
import { EntityType } from '../entity.state'

// to be based on: https://github.com/stefanoslig/xstate-angular/blob/main/apps/conduit/src/app/article-list/%2Bxstate/article-list-machine.events.ts
export class SetGene {
  readonly type = 'SET_GENE'
  constructor(public geneId: number) {}
}

export class SetVariant {
  readonly type = 'SET_VARIANT'
  constructor(public variantId: number) {}
}

export class SetType {
  readonly type = 'SET_TYPE'
  constructor(public evidenceType: EvidenceType) {}
}

export class SetSource {
  readonly type = 'SET_SOURCE'
  constructor(public sourceId: number) {}
}

export class SetOrigin {
  readonly type = 'SET_ORIGIN'
  constructor(public origin: VariantOrigin) {}
}

export class SetDisease {
  readonly type = 'SET_DISEASE'
  constructor(public diseaseId: number) {}
}

export class SetDrug {
  readonly type = 'SET_DRUG'
  constructor(public drugIds: number[]) {}
}

export class SetInteraction {
  readonly type = 'SET_INTERACTION'
  constructor(public interaction: TherapyInteraction) {}
}

export class SetDirection {
  readonly type = 'SET_DIRECTION'
  constructor(public direction: EvidenceDirection) {}
}

export class SetLevel {
  readonly type = 'SET_LEVEL'
  constructor(public level: EvidenceLevel) {}
}

export class SetRating {
  readonly type = 'SET_RATING'
  constructor(public rating: number) {}
}

export class SetPhenotypes {
  readonly type = 'SET_PHENOTYPES'
  constructor(public phenotypeIds: number[]) {}
}
