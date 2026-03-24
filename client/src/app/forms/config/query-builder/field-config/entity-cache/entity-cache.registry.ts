import { inject, Injectable, Type } from '@angular/core'
import {
  EntityCacheAssertionGQL,
  EntityCacheCommentGQL,
  EntityCacheDiseaseGQL,
  EntityCacheEvidenceItemGQL,
  EntityCacheFeatureGQL,
  EntityCacheMolecularProfileGQL,
  EntityCachePhenotypeGQL,
  EntityCacheRevisionGQL,
  EntityCacheSourceGQL,
  EntityCacheTherapyGQL,
  EntityCacheUserGQL,
  EntityCacheVariantGQL,
  EntityCacheVariantTypeGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { QueryRef } from 'apollo-angular'

export interface EntityCacheService {
  fetch(variables?: any, options?: any): Observable<any>
  watch(variables?: any, options?: any): QueryRef<any, any>
}

export const ENTITY_CACHE_ENDPOINTS = {
  cacheAssertion: {
    endpoint: 'assertion',
    typename: 'Assertion',
    token: EntityCacheAssertionGQL as Type<EntityCacheService>,
  },
  cacheComment: {
    endpoint: 'comment',
    typename: 'Comment',
    token: EntityCacheCommentGQL as Type<EntityCacheService>,
  },
  cacheDisease: {
    endpoint: 'disease',
    typename: 'Disease',
    token: EntityCacheDiseaseGQL as Type<EntityCacheService>,
  },
  cacheEvidenceItem: {
    endpoint: 'evidenceItem',
    typename: 'EvidenceItem',
    token: EntityCacheEvidenceItemGQL as Type<EntityCacheService>,
  },
  cacheFeature: {
    endpoint: 'feature',
    typename: 'Feature',
    token: EntityCacheFeatureGQL as Type<EntityCacheService>,
  },
  cacheMolecularProfile: {
    endpoint: 'molecularProfile',
    typename: 'MolecularProfile',
    token: EntityCacheMolecularProfileGQL as Type<EntityCacheService>,
  },
  cachePhenotype: {
    endpoint: 'phenotype',
    typename: 'Phenotype',
    token: EntityCachePhenotypeGQL as Type<EntityCacheService>,
  },
  cacheRevision: {
    endpoint: 'revision',
    typename: 'Revision',
    token: EntityCacheRevisionGQL as Type<EntityCacheService>,
  },
  cacheSource: {
    endpoint: 'source',
    typename: 'Source',
    token: EntityCacheSourceGQL as Type<EntityCacheService>,
  },
  cacheTherapy: {
    endpoint: 'therapy',
    typename: 'Therapy',
    token: EntityCacheTherapyGQL as Type<EntityCacheService>,
  },
  cacheUser: {
    endpoint: 'user',
    typename: 'User',
    token: EntityCacheUserGQL as Type<EntityCacheService>,
  },
  cacheVariant: {
    endpoint: 'variant',
    typename: 'Variant',
    token: EntityCacheVariantGQL as Type<EntityCacheService>,
  },
  cacheVariantType: {
    endpoint: 'variantType',
    typename: 'VariantType',
    token: EntityCacheVariantTypeGQL as Type<EntityCacheService>,
  },
} as const

export type EntityCacheKey = keyof typeof ENTITY_CACHE_ENDPOINTS

@Injectable({ providedIn: 'root' })
export class EntityCacheRegistry {
  private readonly services: Record<EntityCacheKey, EntityCacheService> =
    buildEntityCacheServiceMap()

  getService(key: EntityCacheKey): EntityCacheService {
    return this.services[key]
  }

  getConfig(key: EntityCacheKey) {
    return ENTITY_CACHE_ENDPOINTS[key]
  }
}

function buildEntityCacheServiceMap(): Record<
  EntityCacheKey,
  EntityCacheService
> {
  const result = {} as Record<EntityCacheKey, EntityCacheService>

  ;(Object.keys(ENTITY_CACHE_ENDPOINTS) as EntityCacheKey[]).forEach((key) => {
    const token = ENTITY_CACHE_ENDPOINTS[key].token
    result[key] = inject(token)
  })

  return result
}
