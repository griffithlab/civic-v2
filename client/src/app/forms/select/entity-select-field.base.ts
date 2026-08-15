import {
  Directive,
  TemplateRef,
  computed,
  effect,
  linkedSignal,
  signal,
  untracked,
  viewChild,
} from '@angular/core'
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop'
import { Maybe } from '@app/generated/civic.apollo.types'
import { BATCHED } from '@app/graphql/graphql.module'
import { EntityTagRef, TaggableTypename } from '@app/tags'
import { FieldTypeConfig } from '@ngx-formly/core'
import { Observable, debounceTime, forkJoin, map, of } from 'rxjs'
import { CvcFieldBase } from './field.base'
import {
  CvcEntitySelectResult,
  EntitySelectSpec,
} from './entity-select-config'
import {
  CVC_DEFAULT_SELECT_MESSAGES,
  CvcSelectMessages,
  CvcSelectNotFoundDisplay,
  selectNotFoundDisplay,
} from './select-messages'
import { CvcEntitySelectFieldProps } from './select.types'

export type CvcEntitySelectValue = Maybe<number | number[]>

/** typeahead quiet period; nz-select emits nzOnSearch on every keystroke */
const SEARCH_DEBOUNCE_MS = 300

/**
 * Base for entity-select fields: a debounced typeahead over one GQL query, the
 * selected ids as bare numbers, and `EntityTagRef`s for rendering `cvc-tag`.
 *
 * Subclasses supply an `EntitySelectSpec` (build it with `entitySelectConfig`)
 * and a template that declares its own `<nz-option>`s inside `<nz-select>` —
 * nz-select binds options via `@ContentChildren` at template declaration, so
 * options cannot be projected through a wrapper component (see
 * projected-options.spec.ts). Nothing here calls detectChanges: results,
 * loading and messages are signals, and tag content comes from the cache.
 */
@Directive()
export abstract class CvcEntitySelectFieldBase<
  TResult extends CvcEntitySelectResult,
  TParam = void,
  P extends CvcEntitySelectFieldProps = CvcEntitySelectFieldProps,
> extends CvcFieldBase<CvcEntitySelectValue, FieldTypeConfig<P>> {
  /** query wiring and tag typename resolution; build with entitySelectConfig() */
  protected abstract readonly select: EntitySelectSpec<TResult, TParam>

  /** extra typeahead query parameter, e.g. feature-select's featureType */
  protected readonly param = signal<Maybe<TParam>>(undefined)
  /** the param's display name, used in dropdown messages */
  protected readonly paramName = signal<Maybe<string>>(undefined)
  /** overridable per field */
  protected readonly messages: CvcSelectMessages = CVC_DEFAULT_SELECT_MESSAGES

  /** raw typeahead input; undefined until the dropdown opens or the user types */
  readonly search = signal<Maybe<string>>(undefined)

  /** the search string the current results correspond to */
  protected readonly searchTerm = toSignal(
    toObservable(this.search).pipe(debounceTime(SEARCH_DEBOUNCE_MS))
  )

  /**
   * Drives nz-select's nzOpen. Stays undefined until something needs to force
   * the dropdown open or closed (quick-add), leaving nz-select to manage its
   * own open state the rest of the time — old code was sensitive to this.
   */
  readonly open = signal<Maybe<boolean>>(undefined)

  /** the dropdown's actual open state, reported by nz-select */
  private readonly dropdownOpen = signal(false)

  private readonly typeaheadResource = rxResource({
    params: () => {
      const search = this.searchTerm()
      if (search === undefined) return undefined
      if (search.length < this.minSearchStrLength) return undefined
      return { search, param: this.param() as TParam }
    },
    // a new search cancels the in-flight one; no queryRef/refetch bookkeeping
    stream: ({ params }) =>
      this.select.typeahead
        .fetch({ variables: this.select.typeaheadVars(params.search, params.param) })
        .pipe(map((r) => this.select.typeaheadResults(r.data))),
    defaultValue: [] as TResult[],
  })

  /**
   * The entities nz-select can currently offer as options. Normally the
   * typeahead results, but prepopulated and quick-added entities are written
   * here too: nz-select can only render a selected item it has seen as an
   * option, and a preselected id never appears in a search result.
   */
  protected readonly results = linkedSignal<
    { loading: boolean; results: TResult[] },
    TResult[]
  >({
    source: () => ({
      loading: this.typeaheadResource.isLoading(),
      results: this.typeaheadResource.hasValue()
        ? this.typeaheadResource.value()
        : [],
    }),
    // hold the previous options while a new search is in flight: the resource
    // resets to its default on every param change, which would otherwise blink
    // the dropdown to "no results" (and its quick-add form) between keystrokes
    computation: (source, previous) =>
      source.loading ? (previous?.value ?? []) : source.results,
  })

  protected readonly isLoading = computed(() =>
    this.typeaheadResource.isLoading()
  )

  /**
   * Concrete typenames seen for ids, accumulated from typeahead and tag-query
   * results. Polymorphic fields (variant, feature) need it to build a tag ref
   * for an id whose entity is no longer in the current result list — the old
   * code smuggled the typename through nz-select's nzTitle attribute.
   */
  private readonly typenames = signal<ReadonlyMap<number, TaggableTypename>>(
    new Map()
  )

  /** the field template's quick-add form, when it declares one */
  private readonly addFormTemplate =
    viewChild<TemplateRef<unknown>>('addForm')

  protected readonly notFound = computed<CvcSelectNotFoundDisplay>(() => {
    const searchStr = this.searchTerm() ?? ''
    const results = this.results()
    return selectNotFoundDisplay({
      isOpen: this.dropdownOpen(),
      searchStr,
      entityName: this.props.entityName,
      paramName: this.paramName() ?? undefined,
      minSearchStrLength: this.minSearchStrLength,
      isLoading: this.isLoading(),
      resultCount: results.length,
      showAddForm:
        !!this.addFormTemplate() && this.showAddForm(searchStr, results),
      messages: this.messages,
    })
  })

  /** bind to nzDropdownRender */
  protected readonly dropdownRender = computed(() =>
    this.notFound().showAddForm ? (this.addFormTemplate() ?? null) : null
  )

  constructor() {
    super()
    effect(() => this.rememberTypenames(this.results()))
  }

  override ngOnInit(): void {
    super.ngOnInit()
    const value = this.value()
    if (value !== undefined) {
      this.fetchTagRecords(value).subscribe()
    }
  }

  protected get minSearchStrLength(): number {
    return this.select.minSearchStrLength ?? 0
  }

  /** when to offer the quick-add form; overridable per field */
  protected showAddForm(searchStr: string, results: TResult[]): boolean {
    return searchStr.length > this.minSearchStrLength && results.length === 0
  }

  /** tag ref for a dropdown option, whose full result is in template scope */
  protected refFor(result: TResult): EntityTagRef {
    const typename = this.select.typename
    return {
      __typename:
        typeof typename === 'string' ? typename : typename(result),
      id: result.id,
    }
  }

  /** tag ref for a selected item, where nz-select only gives back the id */
  protected refForId(id: number): Maybe<EntityTagRef> {
    const typename = this.select.typename
    if (typeof typename === 'string') return { __typename: typename, id }
    const known = this.typenames().get(id)
    return known ? { __typename: known, id } : undefined
  }

  protected onOpenChange(isOpen: boolean): void {
    this.dropdownOpen.set(isOpen)
    // opening lists everything the server offers for an empty query
    if (isOpen) this.search.set('')
  }

  /**
   * A quick-add form created an entity: select it and close the dropdown.
   *
   * NOT named onPopulate — formly invokes prePopulate/onPopulate/postPopulate
   * on the field-type instance itself, passing the FormlyFieldConfig, so those
   * three names are reserved on any FieldType subclass.
   */
  protected onEntityCreated(value: number | number[]): void {
    this.fetchTagRecords(value).subscribe((results) => {
      if (results.length === 0) return
      const created = results.map((r) => r.id)
      if (this.props.isMultiSelect) {
        // append: a quick-add adds to the selection rather than replacing it
        // (the old mixin overwrote every prior choice)
        const current = this.selectedIds()
        this.formControl.setValue([
          ...current,
          ...created.filter((id) => !current.includes(id)),
        ])
      } else {
        this.formControl.setValue(created[0])
      }
      this.open.set(false)
    })
  }

  protected onTagClose(): void {
    this.resetField()
  }

  /** the current selection as ids, whether the field is single or multi */
  protected selectedIds(): number[] {
    const value = this.value()
    if (value === undefined) return []
    return Array.isArray(value) ? value : [value]
  }

  /**
   * Fetches each selected entity cache-first so its Linkable* fragment lands
   * in the cache — cvc-tag renders reactively from there — and records its
   * concrete typename.
   *
   * These go out as one id per request, in parallel, so a prepopulated form
   * issues one per selected entity: a heavy assertion revise measured 21. They
   * opt into batched transport (`BATCHED`), which collapses them into a single
   * HTTP request. It is opt-in rather than app-wide because a batch is bounded
   * by operation count rather than cost, and that bound only means something
   * while the operations in it are uniformly cheap — which these are, being one
   * entity and a handful of scalars each.
   */
  protected fetchTagRecords(
    value: number | number[]
  ): Observable<TResult[]> {
    const ids = Array.isArray(value) ? value : [value]
    if (ids.length === 0) return of([])
    return forkJoin(
      ids.map((id) =>
        this.select.tag.query
          .fetch({
            variables: this.select.tag.vars(id),
            fetchPolicy: 'cache-first',
            context: BATCHED,
          })
          .pipe(map((r) => this.select.tag.result(r.data)))
      )
    ).pipe(
      map((results) => results.filter((r): r is TResult => !!r)),
      map((results) => {
        this.rememberTypenames(results)
        if (results.length > 0) this.results.set(results)
        return results
      })
    )
  }

  private rememberTypenames(results: readonly TResult[]): void {
    const typename = this.select.typename
    if (typeof typename === 'string' || results.length === 0) return
    const known = untracked(this.typenames)
    const updated = new Map(known)
    for (const result of results) updated.set(result.id, typename(result))
    if (updated.size !== known.size) this.typenames.set(updated)
  }
}
