import { Component } from '@angular/core';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';

@Component({
  selector: 'cvc-network-error-alert',
  templateUrl: './network-error-alert.component.html',
  styleUrls: ['./network-error-alert.component.less']
})
export class CvcNetworkErrorAlertComponent {
  errors: NetworkErrorsService;

  constructor(networkErrors: NetworkErrorsService) {
    this.errors = networkErrors;
  }
}
