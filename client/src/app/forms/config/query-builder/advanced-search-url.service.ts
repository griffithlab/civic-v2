import { inject, Injectable } from '@angular/core'
import { Router, UrlTree } from '@angular/router'
import { deflateSync, inflateSync, strFromU8, strToU8 } from 'fflate'
import { ADVANCED_SEARCH_ENDPOINTS } from './query-builder.registry'
import {
  AdvancedSearchEndpoint,
  AdvancedSearchFilter,
} from './query-builder.types'

// Query parameter that carries an encoded advanced-search query model.
export const QUERY_MODEL_PARAM = 'queryModel'

// Current envelope version. Bump when the token shape changes so old links
// can be detected (and, if ever needed, migrated) on decode.
const ENVELOPE_VERSION = 1

// A decoded, validated query token: enough to rehydrate the query-builder
// without a server round-trip.
export type DecodedQueryModel = {
  endpoint: AdvancedSearchEndpoint
  query: AdvancedSearchFilter
}

// Wire format. Kept terse (single-letter keys) since it ends up in a URL.
type QueryModelEnvelope = {
  v: number
  e: AdvancedSearchEndpoint
  q: AdvancedSearchFilter
}

function isValidEndpoint(value: unknown): value is AdvancedSearchEndpoint {
  return (
    typeof value === 'string' &&
    Object.prototype.hasOwnProperty.call(ADVANCED_SEARCH_ENDPOINTS, value)
  )
}

// Upper bound on the decompressed payload. A short token can inflate to an
// arbitrarily large string ("zip bomb"); a shared malicious link should never
// be able to allocate unbounded memory in a victim's tab. Any legitimate
// query model is far smaller than this.
const MAX_DECODED_BYTES = 256 * 1024

// Base64url (RFC 4648 §5) keeps the token within the URL-unreserved set
// [A-Za-z0-9-_], so it needs no further percent-encoding in a query param.
function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64UrlToBytes(token: string): Uint8Array {
  const binary = atob(token.replace(/-/g, '+').replace(/_/g, '/'))
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes
}

// Compress a string into a URL-safe token (raw DEFLATE + base64url).
export function compressToken(text: string): string {
  return bytesToBase64Url(deflateSync(strToU8(text), { level: 9 }))
}

// Reverse compressToken. Returns null for any malformed input (bad base64,
// non-DEFLATE data) or a payload that exceeds MAX_DECODED_BYTES.
export function decompressToken(token: string): string | null {
  try {
    const inflated = inflateSync(base64UrlToBytes(token))
    if (inflated.length > MAX_DECODED_BYTES) return null
    return strFromU8(inflated)
  } catch {
    return null
  }
}

// Serialize an endpoint + filter tree into a URL-safe, compressed token.
export function encodeQueryModel(
  endpoint: AdvancedSearchEndpoint,
  query: AdvancedSearchFilter
): string {
  const envelope: QueryModelEnvelope = {
    v: ENVELOPE_VERSION,
    e: endpoint,
    q: query,
  }
  return compressToken(JSON.stringify(envelope))
}

// Reverse encodeQueryModel. Returns null for any malformed/untrusted input
// (bad compression, invalid JSON, wrong version, or unknown endpoint). The
// payload is only ever JSON.parse'd, never evaluated, and the resulting query
// can express nothing a user couldn't build by hand in the query builder.
export function decodeQueryModel(token: string): DecodedQueryModel | null {
  const json = decompressToken(token)
  if (!json) return null

  let parsed: unknown
  try {
    parsed = JSON.parse(json)
  } catch {
    return null
  }

  if (typeof parsed !== 'object' || parsed === null) return null
  const envelope = parsed as Partial<QueryModelEnvelope>

  if (envelope.v !== ENVELOPE_VERSION) return null
  if (!isValidEndpoint(envelope.e)) return null
  if (typeof envelope.q !== 'object' || envelope.q === null) return null

  return { endpoint: envelope.e, query: envelope.q }
}

// Injectable wrapper around the codec, adding Router-aware URL helpers so any
// component can build a shareable advanced-search link.
@Injectable({ providedIn: 'root' })
export class AdvancedSearchUrlService {
  private router = inject(Router)

  encode(endpoint: AdvancedSearchEndpoint, query: AdvancedSearchFilter): string {
    return encodeQueryModel(endpoint, query)
  }

  decode(token: string): DecodedQueryModel | null {
    return decodeQueryModel(token)
  }

  // Query params object (`{ queryModel: <token> }`) for a shareable link.
  buildQueryParams(endpoint: AdvancedSearchEndpoint, query: AdvancedSearchFilter) {
    return { [QUERY_MODEL_PARAM]: this.encode(endpoint, query) }
  }

  // UrlTree for `/search/query/<endpoint>?queryModel=<token>`.
  createUrlTree(
    endpoint: AdvancedSearchEndpoint,
    query: AdvancedSearchFilter
  ): UrlTree {
    return this.router.createUrlTree(['/search/query', endpoint], {
      queryParams: this.buildQueryParams(endpoint, query),
    })
  }

  // Absolute, copy-pasteable URL (origin + path + query).
  buildShareableUrl(
    endpoint: AdvancedSearchEndpoint,
    query: AdvancedSearchFilter
  ): string {
    const tree = this.createUrlTree(endpoint, query)
    return `${window.location.origin}${this.router.serializeUrl(tree)}`
  }
}
