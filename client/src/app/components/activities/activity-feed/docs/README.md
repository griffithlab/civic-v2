# Activity Feed — Developer Documentation (Outline)

> Status: outline. Each section below lists the topics the finished docs should
> cover, with key facts noted inline so the outline is useful on its own.

## 1. Overview

- Purpose: paginated, filterable feed of curation activities (ActivityInterface
  implementors), used in four scopes: unscoped (welcome page "Live Activity
  Feed", curation Activity page), subject-scoped (entity detail "Activity"
  tabs), organization-scoped, and user-scoped (`ActivityFeedScope` in
  `activity-feed.types.ts`).
- Feature summary: infinite virtual scroll, 30s polling (`feedPollInterval`),
  filter/settings panels, expandable per-activity detail views with revision
  diffs.
- Screenshot(s) of the feed collapsed & expanded.

## 2. Component architecture

- Component tree diagram:
  - `activity-feed` — container; query orchestration + virtual scroller
    - `feed-counts` — loaded/total counts display
    - `feed-filters` (+ `org-filter-select`, `user-filter-select`) — filter
      controls populated from connection metadata
    - `feed-settings` — gear popover (automated events, organization display)
    - `feed-item` — one collapsed feed row (user/org tags, verbiage, subject)
    - `feed-item-details` — lazy detail loader + polymorphic dispatch
      - one `*-activity` component per activity type (20 at present)
      - `shared/activity-revision` — renders a single revision's diff
        - `cvc-moderated-entity-tag` (`components/revisions/moderated-entity-tag`)
          — entity tag dispatch for object-field diff values
- Naming/file conventions for per-activity-type components
  (`<type>/<type>-activity.component.{ts,html,less}` + `.query.gql`).
- Modern Angular idioms used here vs. older module-based components elsewhere:
  standalone components, `input()`/`computed()`/signals, `@let`/`@if`/`@switch`
  control flow, OnPush throughout.

## 3. GraphQL data design

- `activity-feed.query.gql` anatomy:
  - `ActivityFeed` query and its variable groups (pagination cursors, scope,
    filters, sort).
  - Boolean-variable fragment gating: `$showFilters` (connection metadata),
    `$includeConnection`/`$includePageInfo`, and `$requestDetails` — the same
    query serves both the cheap list view and the full detail view.
  - Fragment layering: `ActivityFeedItemBase` (row rendering) →
    `ActivityFeedItem` (adds per-type `...<Type>ActivityDetail` fragments,
    each defined next to its detail component in its `.query.gql`).
- Lazy detail loading: `feed-item-details` re-runs the query for a single
  activity id with `requestDetails: true` when a row is expanded; skeleton
  shown while loading.
- Revision diff data:
  - `RevisionActivityDetail` fragment → `linkoutData { ...revisionLinkoutData }`.
  - NOTE: `revisionLinkoutData` is *defined* in
    `components/revisions/revisions-list-and-filter/revisions-list-and-filter.query.gql`
    and shared by the feed and the revisions table — a hidden cross-component
    dependency; document it (or relocate the fragment to a shared .gql).
- Server side (Rails):
  - `Types::Revisions::LinkoutData.from_revision` — the `_id`/`_ids` field-name
    heuristic that decides scalar vs. object diff, and the `non_object_fields`
    exclusion list (e.g. `ncit_id`).
  - `ModeratedObjectField` shape; `entity_type` is the server model class name,
    including STI namespaces (`Features::Gene`, `Variants::GeneVariant`);
    deleted records come back as stubs (`deleted: true`, no displayName).
  - `ScalarFieldDiff` left/right are Diffy-generated HTML (rendered with
    `sanitizeHtml`).
- Codegen: fragments land in `src/app/generated/civic.apollo.ts`; server schema
  dumps must be run manually before client codegen picks up schema changes.

## 4. Revision diffs & entity tags

- `activity-revision` component: title row, Details toggle (`showDiffs`),
  `nz-descriptions` columns — Current / Added / Removed / Kept / Suggested for
  `ObjectFieldDiff`, Current / Suggested for `ScalarFieldDiff`. Column
  membership is precomputed server-side (set arithmetic in
  `LinkoutData.from_revision`), not diffed client-side.
- `cvc-moderated-entity-tag`:
  - Input: any object satisfying `LinkableModeratedObject` (i.e. anything
    fetched via `revisionLinkoutData`).
  - Dispatch table `ENTITY_TYPE_TAGS` keyed on the leading namespace segment of
    `entityType`; renders the matching typed tag component
    (`cvc-disease-tag`, `cvc-feature-tag`, `cvc-feature-variant-tag`, …).
  - Fallbacks: deleted stub → red "Deleted <Type> <id>" tag; unmapped type
    (aliases, ACMG/ClinGen codes, NCCN guidelines, HGVS, ClinVar) → plain
    `nz-tag` with `displayName`.
  - `known_partner_gene_ids` special case: diff objects are `Features::Gene`
    records whose id ≠ their wrapping Feature's id; the tag uses
    `feature?.id ?? id` so links/popovers hit the right Feature.
  - Popovers: typed tags default `enablePopover`; each opens a per-entity
    popover component (`cvc-*-popover`) that fetches its own summary by id —
    no extra data is required from the feed query.
- How to support a new revisable entity type: add fragment fields if needed,
  add an `ENTITY_TYPE_TAGS` entry, confirm a typed tag + popover component
  exists.
- Relationship to the legacy pattern: `revision-list.component.html` (entity
  Revise tab) still uses a ~20-case `ngSwitch` on `fieldName` with inline
  per-field templates; candidate refactor to `cvc-moderated-entity-tag`.

## 5. Scrolling, state & performance

- Virtual scroll via `vscroll` (`Datasource`/`Adapter`), configured in
  `configureDatasource`/`configureAdapter`; `SizeStrategy`, dev settings in
  `activity-feed.config.ts`.
- `feed-scroll-service/feed-scroll.service.ts` — `ScrollerStateService`
  (scroll events, toggled item tracking, viewport sizing) provided via
  `FEED_SCROLL_SERVICE_TOKEN`; `configureScrollerRoutines` custom routines.
- `feed-scroll-service/signal-state.service.ts` — small generic signal store
  (`select`/`set`/`setState`) underpinning scroller state.
- RxJS query orchestration in `CvcActivityFeed`: `onSettingChange$`,
  `onFilterChange$`, `poll$`, `fetchMore$`, `refreshChange$` → `result$`;
  cursor pagination + refetch vs. fetchMore semantics; `queryParamsToQueryVariables`
  in `activity-feed.functions.ts`.
- Polling interaction with the virtual scroller (new-item counts, `zeroRows`,
  `refetchLoading`).

## 6. Adding a new activity type — checklist

1. Server: add the activity class / GraphQL type.
2. Dump schema, run client codegen.
3. Create `feed-item-details/<name>/` component + `.query.gql` detail fragment.
4. Add the fragment to `ActivityFeedItem` in `activity-feed.query.gql`
   (gated by `$requestDetails`).
5. Add a `@case` to `feed-item-details.component.html` dispatch.
6. The `@default` case renders raw JSON — treat as a dev affordance signalling
   an unhandled type, not a production state.

## 7. Known caveats, cleanup candidates & commenting opportunities

Latent issues spotted while researching (not fixed on this branch unless noted):

- `revisionLinkoutData` fragment location (see §3) — cross-component
  dependency.
- `revision-list.component.html` passes `item.status` to `cvc-evidence-tag`,
  but `ModeratedObjectField` has no `status` field — always undefined, so
  evidence tags in the Revise tab never get status styling. (Server could
  expose status on `ModeratedObjectField` if wanted.)
- `forms/components/entity-tag-popover`: `ENTITY_TAG_TYPES_WITH_POPOVER`
  contains `'Gene'` but the popover template switches on `'Feature'` (no
  `'Gene'` case) — a `'Gene'` typename passes `hasPopover()` yet renders an
  empty popover, and `'Feature'` renders but fails the check. (Forms path
  only; the feed uses the typed tags instead.)
- `revision-list.component.ts` `untypedRevisons` — typo, and it erases types
  that would have caught the `item.status` issue above.
- `activity-revision.component.ts` carries some unused imports (`JsonPipe`,
  `LinkoutData`, `Revision`, `ModeratedFieldDiff`, `TypeGuard`).

Areas that would benefit from better comments:

- `activity-feed.component.ts`: block comment mapping the observable graph
  (settings/filters/poll/fetchMore/refresh → result$) and the vscroll
  datasource/adapter lifecycle.
- `feed-scroll.service.ts` / `signal-state.service.ts`: file-level headers
  explaining roles and the injection-token pattern.
- `activity-feed.query.gql`: `#` comments on the fragment layering and the
  boolean-variable gating strategy.
- `activity-revision.component.ts`: note that diff columns are precomputed
  server-side (see §4) — the existing type-narrowing NOTE is a good model.
- Server `linkout_data.rb`: the `_id`/`_ids` heuristic, `non_object_fields`,
  and deleted-stub semantics.
