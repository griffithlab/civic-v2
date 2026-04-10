import { inject, Injectable } from '@angular/core'
import { ADVANCED_SEARCH_ENDPOINTS } from './query-builder.registry'
import {
  AdvancedSearchEndpoint,
  AdvancedSearchService,
} from './query-builder.types'

@Injectable({ providedIn: 'root' })
export class AdvancedSearchRegistry {
  private readonly services: Record<
    AdvancedSearchEndpoint,
    AdvancedSearchService
  > = buildServiceMap()

  getService(endpoint: AdvancedSearchEndpoint): AdvancedSearchService {
    return this.services[endpoint]
  }
}

function buildServiceMap(): Record<
  AdvancedSearchEndpoint,
  AdvancedSearchService
> {
  const result = {} as Record<AdvancedSearchEndpoint, AdvancedSearchService>

  ;(Object.keys(ADVANCED_SEARCH_ENDPOINTS) as AdvancedSearchEndpoint[]).forEach(
    (endpoint) => {
      const token = ADVANCED_SEARCH_ENDPOINTS[endpoint].token
      // token: Type<AdvancedSearchService>
      result[endpoint] = inject(token)
    }
  )

  return result
}
