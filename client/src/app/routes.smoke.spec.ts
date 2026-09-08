import { describe, it, expect, beforeEach } from 'vitest'
import { TestBed } from '@angular/core/testing'
import { RouterTestingHarness } from '@angular/router/testing'
import { AppModule } from './app.module'
import { smokeTestProviders } from './testing/smoke-test.providers'

// Bare-minimum route smoke: each representative lazy route must resolve
// and render its routed component shell without throwing. GraphQL
// queries remain pending (see provideTestApollo); components display
// their loading states, which is all these tests assert on.
const SMOKE_ROUTES = [
  '/welcome',
  '/diseases',
  '/genes',
  '/evidence',
  '/variants',
]

describe('Route smoke tests', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: smokeTestProviders(),
    }).compileComponents()
  })

  for (const path of SMOKE_ROUTES) {
    it(`renders ${path}`, async () => {
      const harness = await RouterTestingHarness.create()
      const component = await harness.navigateByUrl(path)
      expect(component).toBeTruthy()
      expect(harness.routeNativeElement?.innerHTML.length).toBeGreaterThan(0)
    })
  }
})
