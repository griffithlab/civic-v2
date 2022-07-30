import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { EvidenceTableUserFilters } from '@app/components/evidence/evidence-table/evidence-table.component';
import { FormEvidence } from '@app/forms/forms.interfaces';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'cvc-with-evidence-manager-wrapper',
  templateUrl: './with-evidence-manager.wrapper.html',
  styleUrls: ['./with-evidence-manager.wrapper.less'],
})
export class WithEvidenceManagerWrapper extends FieldWrapper {

  managerVisible = false
  alreadySelected: FormEvidence[] = []
  private managerSelectedEids: FormEvidence[] = []

  evidenceGridFilters: EvidenceTableUserFilters  = {
      eidInput: undefined,
      diseaseNameInput: undefined,
      drugNameInput: undefined,
      descriptionInput: undefined,
      evidenceLevelInput: undefined,
      evidenceTypeInput: undefined,
      evidenceDirectionInput: undefined,
      clinicalSignificanceInput: undefined,
      variantOriginInput: undefined,
      evidenceRatingInput: undefined,
      molecularProfileNameInput: undefined,
      geneSymbolInput: undefined,
  }

  handleOpen() {
    if(this.field.parent?.model) {
      const parentModel = this.field.parent?.model
      if (parentModel.gene?.length == 1 && parentModel.gene[0]) {
        this.evidenceGridFilters.geneSymbolInput = parentModel.gene[0].name
      } else {
        this.evidenceGridFilters.geneSymbolInput = undefined
      }
      if (parentModel.molecularProfile.length == 1 && parentModel.molecularProfile[0]) {
        this.evidenceGridFilters.molecularProfileNameInput = parentModel.molecularProfile[0].name
      } else  {
        this.evidenceGridFilters.molecularProfileNameInput = undefined
      }
      if (parentModel.evidenceType) {
        this.evidenceGridFilters.evidenceTypeInput = parentModel.evidenceType
      } else {
        this.evidenceGridFilters.evidenceTypeInput = undefined
      }
      if (parentModel.disease.length == 1 && parentModel.disease[0]) {
        this.evidenceGridFilters.diseaseNameInput = parentModel.disease[0].name
      } else {
        this.evidenceGridFilters.diseaseNameInput = undefined
      }
    }
    if(this.model) {
      this.alreadySelected = this.model.filter((eid: any) => eid)
    }
    this.managerVisible = true
  }

  handleCancel() {
    this.managerVisible = false
  }

  handleOk() {
    this.managerVisible = false
    const eids = this.managerSelectedEids

    while(this.formControl.value.length < eids.length) {
      this.to.add(eids[0]);
    }
    while(this.formControl.value.length > eids.length) {
      this.to.remove(this.formControl.value.length - 1);
    }

    eids.forEach((eid, i) => {
      let control = this.field.formControl as FormArray
      control.controls[i].setValue(eid)
    })

    if(this.to.eidCallback) {
      this.to.eidCallback(eids)
    }
  }

  onEidSelectionChange(eids: FormEvidence[]) {
    this.managerSelectedEids = eids

  }
}
