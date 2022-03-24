import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

interface FormModel {
  fields: {
    id: number,
  }
}

@Component({
  selector: 'cvc-source-submit',
  templateUrl: './source-submit.form.html',
  styleUrls: ['./source-submit.form.less']
})
export class SourceSubmitForm implements OnInit {
  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { };

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  constructor() {
    this.formFields = [

    ]
  }

  submitSourceSuggestion = (model: FormModel) => {
    console.log(model);
  }
  ngOnInit(): void {
  }

}
