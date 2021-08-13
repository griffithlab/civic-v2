import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormGroup } from '@angular/forms';
import {
  Organization,
  ResolveFlagGQL,
  ResolveFlagInput,
  Maybe,
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'cvc-flag-resolve',
  templateUrl: './flag-resolve.component.html',
  styleUrls: ['./flag-resolve.component.less'],
})
export class CvcFlagResolveComponent implements OnInit {
  @Input() flagId!: number;
  @Input() flagResolvedCallback?: () => void;

  formModel!: ResolveFlagInput;
  formFields: FormlyFieldConfig[];
  selectedOrg: Maybe<Organization>;
  formGroup = new FormGroup({});
  formOptions: FormlyFormOptions = {};

  errorMessages: Maybe<string[]>

  constructor(private gql: ResolveFlagGQL, private modal: NzModalRef) {
    this.formFields = [
      {
        key: 'comment',
        type: 'comment-textarea',
        templateOptions: {
          required: true,
          minLength: 10,
        },
      },
    ];
  }

  ngOnInit() {
    if (this.flagId === undefined) {
      throw new Error('Must pass a Flag ID in to resolve component.');
    }

    this.formModel = {
      id: this.flagId,
      comment: '',
    };
  }

  onOrgSelected(org: Organization) {
    this.formModel.organizationId = org.id;
  }

  resolveFlag(input: ResolveFlagInput) {
    this.gql.mutate(
      { input: input },
      {errorPolicy: 'all'}
     ).subscribe(({ data, errors }) => {
        if(errors) {
          this.errorMessages = errors.map(e => e.message)
          return;
        }
        if (this.flagResolvedCallback) {
          this.flagResolvedCallback();
        }
        this.closeModal();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeModal() {
    this.modal.destroy();
  }
}
