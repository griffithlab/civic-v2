import { ErrorHandler, Injectable } from '@angular/core'
import { environment } from 'environments/environment'

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    if (environment.production) {
      const chunkFailedMessage = /Loading chunk [\d]+ failed/
      if (chunkFailedMessage.test(error.message)) {
        if (
          confirm(
            'There is an updated version of CiVIC available. Click OK to reload.'
          )
        ) {
          window.location.reload()
        }
      }
    } else {
      console.error(error)
    }
  }
}
