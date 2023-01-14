import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppLoadErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if (chunkFailedMessage.test(error.message)) {
      if (
        confirm(
          'There is an updated version of CiVIC available. Click OK to reload.'
        )
      ) {
        window.location.reload();
      }
    }
  }
}
