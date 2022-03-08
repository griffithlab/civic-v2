import { Component, OnInit } from '@angular/core';
import { SourceSource } from '@app/generated/civic.apollo';

interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
}

interface FormDisease {
  id?: number;
  doid?: number;
  displayName?: string;
}

interface FormDrug {
  id?: number;
  ncitId?: string;
  name?: string;
}

interface FormPhenotype {
  id: number;
  hpoId?: string;
  name?: string;
}

interface FormGene {
  id: number;
  name?: string;
}

interface FormVariant {
  id?: number;
  name: string;
}
@Component({
  selector: 'cvc-assertion-submit-form',
  templateUrl: './assertion-submit.form.html',
  styleUrls: ['./assertion-submit.form.less']
})
export class AssertionSubmitForm implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
