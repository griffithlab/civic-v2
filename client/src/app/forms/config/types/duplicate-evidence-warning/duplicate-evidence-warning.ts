import {Component, OnInit } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cvc-duplicate-evidence-warning',
  templateUrl: './duplicate-evidence-warning.html',
  styleUrls: ['./duplicate-evidence-warning.less'],
})
export class DuplicateEvidenceWarningComponent extends FieldType implements OnInit {
  paramsFilled: boolean = false
  matchingEvidenceExists$ =  new BehaviorSubject<boolean>(false)

  constructor() {
    super();
    this.defaultOptions = {
      ...this.defaultOptions,
      expressionProperties: {
        'templateOptions.evidenceParams': (model: any, formState: any, ffc?: FormlyFieldConfig) => {
          let mainModel = ffc?.parent?.model
          let evidenceParams: any = {}
          if(mainModel) {
            if(mainModel.variant && mainModel.variant[0]) {
              evidenceParams.variantId = mainModel.variant[0].id
            }
            if(mainModel.source && mainModel.source[0]) {
              evidenceParams.sourceId = mainModel.source[0].id
            }
            if (evidenceParams.sourceId && evidenceParams.variantId) {
              this.paramsFilled = true;
              return evidenceParams;
            }
          }
          this.paramsFilled = false;
          return undefined;
        }
      },
      hideExpression: (_) => { return !this.paramsFilled}
    }

  }

  ngOnInit(): void {
    
  }
  
  initalCountLoaded(count: number) {
    if (count > 0) {
      this.matchingEvidenceExists$.next(true);
    }
  }
}

export const DuplicateEvidenceWarningType: TypeOption = {
  name: 'duplicate-evidence-warning',
  component: DuplicateEvidenceWarningComponent,
}
