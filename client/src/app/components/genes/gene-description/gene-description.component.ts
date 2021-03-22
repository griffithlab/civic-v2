import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cvc-gene-description',
  templateUrl: './gene-description.component.html',
  styleUrls: ['./gene-description.component.less']
})
export class GeneDescriptionComponent implements OnInit {
  @Input() description!: string;
  @Input() sources!: any;
  @Input() name: any;

  constructor() { }

  ngOnInit(): void {
  }

}
