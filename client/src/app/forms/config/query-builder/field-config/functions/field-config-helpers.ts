import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormRowOptions } from '@app/forms/wrappers/form-row/form-row.wrapper'
import {
  EntityCacheKey,
  ENTITY_CACHE_ENDPOINTS,
} from '../entity-cache/entity-cache.registry'
import { tap } from 'rxjs'
import { gql } from 'apollo-angular'

export const sortByKey = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  [...items].sort((a, b) => String(a.key).localeCompare(String(b.key)))

export const sortByLabel = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  [...items].sort((a, b) =>
    String(a.props!.label).localeCompare(String(b.props!.label))
  )

export const withStatic = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    type: 'formly-group',
    wrappers: ['form-row'],
    props: {
      ...i.props,
      formRowOptions: <FormRowOptions>{
        spanIndexed: [8, 16],
        gutter: [8, 0],
      },
    },
  }))

export const withRecursive = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    type: 'formly-group',
    props: {
      ...i.props,
    },
  }))

export const withHideExpression = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    expressions: {
      ...i.expressions,
      hide: (field: FormlyFieldConfig) => {
        return field.key !== field.parent?.props?.selectedKey
      },
    },
  }))

export const withSmallSize = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    props: {
      ...i.props,
      size: 'small',
    },
  }))

export const withPrecache = (
  items: FormlyFieldConfig[],
  cacheKey: EntityCacheKey
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    hooks: {
      ...i.hooks,
      onInit: (field: FormlyFieldConfig) => {
        const id = field.model?.value
        if (!id || typeof id !== 'number') return
        const registry = field.options?.formState?.entityCacheRegistry
        if (!registry) {
          console.warn(
            `withPrecache: EntityCacheRegistry not found in formState for field ${field.key}`
          )
          return
        }
        const config = ENTITY_CACHE_ENDPOINTS[cacheKey]
        const service = registry.getService(cacheKey)
        return service
          .fetch({ [`${config.endpoint}Id`]: id }, { fetchPolicy: 'cache-first' })
          .pipe(
            tap((result: any) => {
              const entity = result.data?.[config.endpoint]
              if (!entity) return
              const apollo = field.options?.formState?.apollo
              if (!apollo) return
              // write fragment under expected typename so entity-tag's
              // readFragment can find it (handles interface types like Variant)
              apollo.client.cache.writeFragment({
                id: `${config.typename}:${id}`,
                fragment: gql`
                  fragment Precache${config.typename} on ${config.typename} {
                    id
                    name
                    link
                  }
                `,
                data: {
                  __typename: config.typename,
                  id: entity.id,
                  name: entity.name,
                  link: entity.link ?? null,
                },
              })
            })
          )
      },
    },
  }))
