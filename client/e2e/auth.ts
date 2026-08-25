import path from 'node:path'

/**
 * A signed-in session captured by `yarn e2e:auth`, which opens a browser and
 * waits for a human to log in. Gitignored, and never generated automatically:
 * nothing here should ever type a credential.
 *
 * Specs that need a logged-in user opt in with
 * `test.use({ storageState: STORAGE_STATE })`. Specs against the dev test pages
 * do not — those routes are unauthenticated, which is what keeps this harness
 * runnable on a fresh checkout.
 */
export const STORAGE_STATE = path.resolve(__dirname, '.auth/dev-user.json')
