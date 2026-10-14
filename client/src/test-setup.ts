// Shims for browser APIs that jsdom does not implement, used by
// ng-zorro-antd / @angular/cdk / vscroll at component init time.

if (typeof window !== 'undefined') {
  if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string): MediaQueryList =>
        ({
          matches: false,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        }) as unknown as MediaQueryList,
    })
  }

  if (!('ResizeObserver' in window)) {
    class ResizeObserverShim {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    ;(window as any).ResizeObserver = ResizeObserverShim
  }

  if (!('IntersectionObserver' in window)) {
    class IntersectionObserverShim {
      root = null
      rootMargin = ''
      thresholds = []
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return []
      }
    }
    ;(window as any).IntersectionObserver = IntersectionObserverShim
  }

  if (!window.requestAnimationFrame) {
    ;(window as any).requestAnimationFrame = (cb: FrameRequestCallback) =>
      setTimeout(() => cb(performance.now()), 0)
    ;(window as any).cancelAnimationFrame = (id: number) => clearTimeout(id)
  }

  if (!window.scrollTo) {
    ;(window as any).scrollTo = () => {}
  }
  if (!Element.prototype.scrollTo) {
    ;(Element.prototype as any).scrollTo = () => {}
  }
  if (!Element.prototype.scrollIntoView) {
    ;(Element.prototype as any).scrollIntoView = () => {}
  }
}
