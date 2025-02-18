import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core'
import { Clipboard } from '@angular/cdk/clipboard'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal'

@Component({
  selector: 'cvc-network-error-alert',
  templateUrl: './network-error-alert.component.html',
  styleUrls: ['./network-error-alert.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcNetworkErrorAlertComponent {
  errors: NetworkErrorsService
  modalVisible: boolean = false
  modalContent!: string

  constructor(
    networkErrors: NetworkErrorsService,
    private modal: NzModalService,
    private clipboard: Clipboard
  ) {
    this.errors = networkErrors
  }

  showModal(
    title: string,
    backtrace: string[],
    tplFooter: TemplateRef<{}>,
    tplContent: TemplateRef<{}>
  ): void {
    this.modalContent = backtrace.join('\n')
    this.modal.create({
      nzTitle: title,
      nzFooter: tplFooter,
      nzContent: tplContent,
      nzWidth: 800,
      nzBodyStyle: {
        'max-height': '500px',
        overflow: 'hidden',
        'overflow-y': 'scroll',
      },
      nzClosable: true,
      nzOkDisabled: true,
      nzCancelDisabled: true,
      nzData: {
        backtrace: this.modalContent,
      },
    })
  }

  hideModal(ref: NzModalRef): void {
    ref.destroy()
  }

  onClose(): void {
    this.errors.clearErrors()
  }

  copyToClipboard(): void {
    this.clipboard.copy(this.modalContent)
  }
}
