import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { create, CyclePlugin } from 'rxjs-spy'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
} else {
  // enable RXjs Spy on non production builds only
  const spy = create()
  // deactivate CyclePlugin, which spams console w/
  // an alert about a next cycle in table-scroll.directive.
  // Re-activate to troubleshoot if a 'call stack exceeded' error occurs.
  spy.unplug(spy.find(CyclePlugin) as CyclePlugin)
  // we call show for two purposes: first is to log to
  // the console an empty snapshot so we can see that
  // everything is working as expected, then to suppress
  // unused variable usage (a convention)
  spy.show()
  // log everything, provide tag name to focus log on a single observable
  spy.log()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
