import { OverlayContainer } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { provideNoopAnimations } from '@angular/platform-browser/animations'
import { NzSelectComponent, NzSelectModule } from 'ng-zorro-antd/select'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

// Spike A (plan Phase 0, highest-risk assumption), RESOLVED 2026-08-14:
//
// nz-select's @ContentChildren(NzOptionComponent) binds at TEMPLATE
// DECLARATION, not DOM projection — <nz-option> elements re-projected through
// a wrapper component's <ng-content> are NEVER seen (contentChildren === 0,
// dropdown renders the empty state). The select chrome therefore CANNOT be a
// wrapping component; it must be an attribute directive applied to nz-select
// in the field template, with <nz-option> declared directly inside
// <nz-select> in that same template (the plan's designed fallback).
//
// The tests below characterize the DIRECT declaration shape every migrated
// field will use: dynamic @for over a signal, nzCustomContent option bodies
// with closure context, nzServerSearch, and nzCustomTemplate selected items.

@Component({
  standalone: true,
  imports: [NzSelectModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-select
      nzShowSearch
      nzServerSearch
      [formControl]="control"
      [nzCustomTemplate]="selectedTpl">
      @for (r of results(); track r.id) {
        <nz-option
          nzCustomContent
          [nzValue]="r.id"
          [nzLabel]="r.name">
          <span class="opt-custom">custom-{{ r.name }}</span>
        </nz-option>
      }
    </nz-select>
    <ng-template #selectedTpl let-selected>
      <span class="sel-custom">SEL:{{ selected.nzValue }}</span>
    </ng-template>
  `,
})
class TestHostComponent {
  control = new FormControl<number | undefined>(undefined)
  results = signal<{ id: number; name: string }[]>([])
}

// negative control: the wrapper/ng-content shape that does NOT work
@Component({
  selector: 'test-select-wrapper',
  standalone: true,
  imports: [NzSelectModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<nz-select [formControl]="control"><ng-content /></nz-select>`,
})
class WrapperComponent {
  control = new FormControl<number | undefined>(undefined)
}

@Component({
  standalone: true,
  imports: [WrapperComponent, NzSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <test-select-wrapper>
      <nz-option [nzValue]="1" nzLabel="Alpha" />
    </test-select-wrapper>
  `,
})
class ReprojectionHostComponent {}

describe('nz-select with dynamic template-declared nz-options (Spike A)', () => {
  let fixture: ComponentFixture<TestHostComponent>
  let host: TestHostComponent
  let overlay: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent, ReprojectionHostComponent],
      providers: [provideNoopAnimations()],
    })
    fixture = TestBed.createComponent(TestHostComponent)
    host = fixture.componentInstance
    fixture.detectChanges()
    overlay = TestBed.inject(OverlayContainer).getContainerElement()
  })

  afterEach(() => {
    TestBed.inject(OverlayContainer).ngOnDestroy()
  })

  function openDropdown() {
    const selectEl = fixture.nativeElement.querySelector(
      'nz-select'
    ) as HTMLElement
    selectEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    fixture.detectChanges()
  }

  async function settle() {
    await fixture.whenStable()
    fixture.detectChanges()
    await new Promise((r) => setTimeout(r, 0))
    fixture.detectChanges()
  }

  function renderedOptions(): string[] {
    return Array.from(overlay.querySelectorAll('.opt-custom')).map(
      (el) => el.textContent?.trim() ?? ''
    )
  }

  it('re-projected options through wrapper ng-content are NOT recognized (negative control)', async () => {
    const reFixture = TestBed.createComponent(ReprojectionHostComponent)
    reFixture.detectChanges()
    await reFixture.whenStable()
    reFixture.detectChanges()
    const select = reFixture.debugElement.query(
      (d) => d.componentInstance instanceof NzSelectComponent
    ).componentInstance as NzSelectComponent
    expect((select as any).listOfNzOptionComponent?.length).toBe(0)
  })

  it('renders template-declared @for options with custom content in the dropdown', async () => {
    host.results.set([
      { id: 1, name: 'Alpha' },
      { id: 2, name: 'Beta' },
    ])
    fixture.detectChanges()
    openDropdown()
    await settle()
    expect(renderedOptions()).toEqual(['custom-Alpha', 'custom-Beta'])
  })

  it('updates options when the results signal changes while open (OnPush, no manual CD)', async () => {
    host.results.set([{ id: 1, name: 'Alpha' }])
    fixture.detectChanges()
    openDropdown()
    await settle()
    expect(renderedOptions()).toEqual(['custom-Alpha'])

    host.results.set([
      { id: 3, name: 'Gamma' },
      { id: 4, name: 'Delta' },
    ])
    fixture.detectChanges()
    await settle()
    expect(renderedOptions()).toEqual(['custom-Gamma', 'custom-Delta'])
  })

  it('does not client-filter options under nzServerSearch when search text mismatches labels', async () => {
    host.results.set([
      { id: 1, name: 'Alpha' },
      { id: 2, name: 'Beta' },
    ])
    fixture.detectChanges()
    openDropdown()
    await settle()

    const searchInput = fixture.nativeElement.querySelector(
      'input'
    ) as HTMLInputElement
    expect(searchInput).toBeTruthy()
    searchInput.value = 'zzz-no-label-match'
    searchInput.dispatchEvent(new Event('input', { bubbles: true }))
    fixture.detectChanges()
    await settle()

    // server-search mode: option visibility is the server's business
    expect(renderedOptions()).toEqual(['custom-Alpha', 'custom-Beta'])
  })

  it('selecting an option sets the control to the bare nzValue and renders nzCustomTemplate', async () => {
    host.results.set([
      { id: 1, name: 'Alpha' },
      { id: 2, name: 'Beta' },
    ])
    fixture.detectChanges()
    openDropdown()
    await settle()

    const optionItems = overlay.querySelectorAll('nz-option-item')
    expect(optionItems.length).toBe(2)
    ;(optionItems[1] as HTMLElement).dispatchEvent(
      new MouseEvent('click', { bubbles: true })
    )
    fixture.detectChanges()
    await settle()

    expect(host.control.value).toBe(2)
    const sel = fixture.nativeElement.querySelector('.sel-custom')
    expect(sel?.textContent).toBe('SEL:2')
  })

  it('keeps rendering the selected item after the option list is replaced (post-search)', async () => {
    host.results.set([{ id: 2, name: 'Beta' }])
    fixture.detectChanges()
    openDropdown()
    await settle()
    ;(overlay.querySelector('nz-option-item') as HTMLElement).dispatchEvent(
      new MouseEvent('click', { bubbles: true })
    )
    fixture.detectChanges()
    await settle()

    // new "search results" no longer contain the selected id
    host.results.set([{ id: 9, name: 'Other' }])
    fixture.detectChanges()
    await settle()

    const sel = fixture.nativeElement.querySelector('.sel-custom')
    expect(sel?.textContent).toBe('SEL:2')
  })
})
