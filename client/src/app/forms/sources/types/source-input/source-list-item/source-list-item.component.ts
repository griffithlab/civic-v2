import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cvc-source-list-item',
  templateUrl: './source-list-item.component.html',
  styleUrls: ['./source-list-item.component.less']
})
export class SourceListItemComponent implements OnInit {
  @Input() source!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
