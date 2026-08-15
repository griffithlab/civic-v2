import { Maybe } from '@app/generated/civic.apollo.types'
import { Apollo } from 'apollo-angular'
import { isTaggableTypename, tagSpecFor } from './entity-tag-specs'
import { LinkableEntity } from './entity-tag.types'

/**
 * Reads an already-cached entity by typename and id, using the same
 * Linkable* fragment CvcTag renders from.
 *
 * The evidence and variant managers filter their entity columns by NAME
 * rather than id, so they resolve the ids a form hands them into names. Both
 * did it by interpolating a fragment document at runtime —
 * `fragment Linkable${typename}Entity on ${typename} { id name link }` —
 * which codegen cannot see, and which hand-repeated a field list that could
 * silently drift from the real fragment. This reads the registered one.
 *
 * Returns undefined when the entity is not in the cache; callers decide
 * whether that is worth reporting.
 */
export function readCachedEntity(
  apollo: Apollo,
  typename: string,
  id: number
): Maybe<LinkableEntity> {
  if (!isTaggableTypename(typename)) return undefined
  return (
    apollo.client.readFragment<LinkableEntity>({
      id: `${typename}:${id}`,
      fragment: tagSpecFor(typename).fragment,
    }) ?? undefined
  )
}

/** The cached entity's display name, or undefined if it is not cached. */
export function readCachedEntityName(
  apollo: Apollo,
  typename: string,
  id: number
): Maybe<string> {
  return readCachedEntity(apollo, typename, id)?.name
}
