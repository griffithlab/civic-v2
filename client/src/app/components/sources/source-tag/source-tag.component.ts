import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cvc-source-tag',
  templateUrl: './source-tag.component.html',
  styleUrls: ['./source-tag.component.less']
})
export class SourceTagComponent implements OnInit {
  @Input() source!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
