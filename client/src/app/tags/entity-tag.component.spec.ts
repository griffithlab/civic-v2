import { Component, signal } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'
import { InMemoryCache } from '@apollo/client/cache'
import { provideSeededApollo } from '@app/testing/apollo-test.providers'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CvcTagComponent } from './entity-tag.component'
import {
  ENTITY_TAG_SPECS,
  EntityTagRef,
  TaggableTypename,
} from './entity-tag-specs'
import { CvcTagContext, CvcTagMode } from './entity-tag.types'
import { TAG_POPOVERS } from './tag-popovers'
import {
  LinkableDiseaseFragmentDoc,
  LinkableNccnGuidelineFragmentDoc,
  LinkableAcmgCodeFragmentDoc,
  LinkableVariantFragmentDoc,
} from './linkable.fragments.gql.generated'
import { Apollo } from 'apollo-angular'
import ICON_DATA from '@app/generated/civic.icons.data.json'
import { civicIcons } from '@app/icons-provider.module'
import { NzIconModule } from 'ng-zorro-antd/icon'

@Component({
  standalone: true,
  imports: [CvcTagComponent],
  template: `<cvc-tag
    [ref]="ref()"
    [context]="context()"
    [mode]="mode()"
    [emphasize]="emphasize()"
    (closed)="closeCount = closeCount + 1" />`,
})
class HostComponent {
  ref = signal<EntityTagRef>({ __typename: 'Disease', id: 7 })
  context = signal<CvcTagContext>('default')
  mode = signal<CvcTagMode>('default')
  emphasize = signal<string | undefined>(undefined)
  closeCount = 0
}

const seedDisease = (cache: InMemoryCache) =>
  cache.writeFragment({
    fragment: LinkableDiseaseFragmentDoc,
    data: {
      __typename: 'Disease',
      id: 7,
      name: 'Melanoma',
      link: '/diseases/7',
      deprecated: false,
    },
  })

describe('CvcTagComponent', () => {
  let fixture: ComponentFixture<HostComponent>
  let host: HostComponent

  function setup(seed?: Parameters<typeof provideSeededApollo>[0]) {
    TestBed.configureTestingModule({
      imports: [HostComponent, NzIconModule.forRoot(civicIcons)],
      providers: [provideSeededApollo(seed), provideRouter([])],
    })
    fixture = TestBed.createComponent(HostComponent)
    host = fixture.componentInstance
    fixture.detectChanges()
  }

  async function settle() {
    // NOTE: fixture.whenStable() never resolves in this setup (a zone
    // macrotask stays pending); the cache-driven data flow only needs a
    // macrotask flush + CD passes.
    fixture.detectChanges()
    await new Promise((r) => setTimeout(r, 10))
    fixture.detectChanges()
    await new Promise((r) => setTimeout(r, 0))
    fixture.detectChanges()
  }

  const text = () => fixture.nativeElement.textContent as string
  const tagHost = () =>
    fixture.nativeElement.querySelector('cvc-tag') as HTMLElement

  afterEach(() => vi.restoreAllMocks())

  it('renders name and detail link for a seeded entity', async () => {
    setup(seedDisease)
    await settle()
    expect(text()).toContain('Melanoma')
    const link = fixture.nativeElement.querySelector('a.tag-label')
    expect(link?.getAttribute('href')).toBe('/diseases/7')
  })

  it('renders a neutral #id skeleton on cache miss (no CACHE-MISS text)', async () => {
    setup()
    await settle()
    expect(text()).toContain('#7')
    expect(text()).not.toContain('CACHE-MISS')
    expect(
      fixture.nativeElement.querySelector('.tag-skeleton')
    ).toBeTruthy()
  })

  it('updates reactively when the entity is written to the cache after render', async () => {
    setup()
    await settle()
    expect(text()).toContain('#7')
    TestBed.inject(Apollo).client.writeFragment({
      fragment: LinkableDiseaseFragmentDoc,
      data: {
        __typename: 'Disease',
        id: 7,
        name: 'Melanoma',
        link: '/diseases/7',
        deprecated: false,
      },
    })
    await settle()
    expect(text()).toContain('Melanoma')
  })

  it('resolves polymorphic variant refs through the shared interface fragment', async () => {
    setup((cache) =>
      cache.writeFragment({
        fragment: LinkableVariantFragmentDoc,
        data: {
          __typename: 'GeneVariant',
          id: 12,
          name: 'V600E',
          link: '/variants/12',
          flagged: true,
          deprecated: false,
        },
      })
    )
    host.ref.set({ __typename: 'GeneVariant', id: 12 })
    fixture.detectChanges()
    await settle()
    expect(text()).toContain('V600E')
    expect(tagHost().classList.contains('flagged')).toBe(true)
  })

  it('applies deprecated host class', async () => {
    setup((cache) =>
      cache.writeFragment({
        fragment: LinkableDiseaseFragmentDoc,
        data: {
          __typename: 'Disease',
          id: 7,
          name: 'Old Disease',
          link: '/diseases/7',
          deprecated: true,
        },
      })
    )
    await settle()
    expect(tagHost().classList.contains('deprecated')).toBe(true)
  })

  it('suppresses the link in select contexts and for unlinked specs', async () => {
    setup((cache) => {
      seedDisease(cache)
      cache.writeFragment({
        fragment: LinkableNccnGuidelineFragmentDoc,
        data: { __typename: 'NccnGuideline', id: 3, name: 'NCCN v2' },
      })
    })
    host.context.set('select-item')
    fixture.detectChanges()
    await settle()
    expect(fixture.nativeElement.querySelector('a.tag-label')).toBeNull()

    host.context.set('default')
    host.ref.set({ __typename: 'NccnGuideline', id: 3 })
    fixture.detectChanges()
    await settle()
    expect(text()).toContain('NCCN v2')
    expect(fixture.nativeElement.querySelector('a.tag-label')).toBeNull()
  })

  it('exposes the schema tooltip for AcmgCode', async () => {
    setup((cache) =>
      cache.writeFragment({
        fragment: LinkableAcmgCodeFragmentDoc,
        data: {
          __typename: 'AcmgCode',
          id: 5,
          name: 'PS1',
          tooltip: 'Pathogenic Strong 1',
        },
      })
    )
    host.ref.set({ __typename: 'AcmgCode', id: 5 })
    fixture.detectChanges()
    await settle()
    const label = fixture.nativeElement.querySelector('span.tag-label')
    expect(label?.getAttribute('ng-reflect-nz-tooltip-title') ?? '').not.toBe(
      undefined
    )
    expect(text()).toContain('PS1')
  })

  it('emphasizes typeahead matches without innerHTML', async () => {
    setup(seedDisease)
    host.emphasize.set('lano')
    fixture.detectChanges()
    await settle()
    const match = fixture.nativeElement.querySelector('.typeahead-match')
    expect(match?.textContent).toBe('lano')
  })

  it('lazy-loads the popover component on first open only', async () => {
    setup(seedDisease)
    await settle()
    @Component({ standalone: true, template: 'popover!' })
    class DummyPopover {}
    const loadSpy = vi
      .spyOn(TAG_POPOVERS.Disease!, 'load')
      .mockResolvedValue(DummyPopover)

    const tag = fixture.debugElement.children[0].componentInstance as any
    tag.onPopoverVisible(true)
    tag.onPopoverVisible(false)
    tag.onPopoverVisible(true)
    await settle()
    expect(loadSpy).toHaveBeenCalledTimes(1)
    expect(tag.popoverComponent()).toBeTruthy()
  })

  it('emits closed when the tag close icon is clicked', async () => {
    setup(seedDisease)
    host.mode.set('closeable')
    fixture.detectChanges()
    await settle()
    const closeIcon = fixture.nativeElement.querySelector(
      '.ant-tag-close-icon'
    ) as HTMLElement
    expect(closeIcon).toBeTruthy()
    closeIcon.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    fixture.detectChanges()
    expect(host.closeCount).toBe(1)
  })

  it('round-trips the checked model in checkable mode', async () => {
    setup(seedDisease)
    host.mode.set('checkable')
    fixture.detectChanges()
    await settle()
    const tag = fixture.debugElement.children[0].componentInstance as any
    expect(tag.checked()).toBe(false)
    const tagEl = fixture.nativeElement.querySelector(
      'nz-tag'
    ) as HTMLElement
    tagEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    fixture.detectChanges()
    expect(tag.checked()).toBe(true)
  })
})

describe('ENTITY_TAG_SPECS registry invariants', () => {
  const typenames = Object.keys(ENTITY_TAG_SPECS) as TaggableTypename[]
  const iconNames = new Set(
    (ICON_DATA as { icons: { name: string }[] }).icons.map(
      (icon) => `civic-${icon.name}`
    )
  )

  it('every spec wraps a single fragment definition', () => {
    for (const typename of typenames) {
      const doc = ENTITY_TAG_SPECS[typename].fragment as any
      const fragments = doc.definitions.filter(
        (d: any) => d.kind === 'FragmentDefinition'
      )
      expect(fragments.length, typename).toBe(1)
    }
  })

  it('every declared icon is a registered civic icon', () => {
    for (const typename of typenames) {
      const icon = ENTITY_TAG_SPECS[typename].icon
      if (icon) {
        expect(iconNames.has(icon), `${typename}: ${icon}`).toBe(true)
      }
    }
  })

  it('every popover key is a taggable typename', () => {
    for (const key of Object.keys(TAG_POPOVERS)) {
      expect(typenames).toContain(key)
    }
  })
})
