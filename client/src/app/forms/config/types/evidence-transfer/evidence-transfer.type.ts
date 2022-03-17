import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';


type FormEvidence = {
  id: number,
  name: string 
}

@Component({
  selector: 'cvc-evidence-transfer',
  templateUrl: './evidence-transfer.type.html',
  styleUrls: ['./evidence-transfer.type.less']
})
export class EvidenceTransferType extends FieldType implements OnInit {
  formControl!: FormControl;

  constructor() {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Manage evidence items',
        options: []
      }
    }
  }

  ngOnInit(): void {


  }

}
