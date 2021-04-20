import { Component, Input, OnInit } from '@angular/core';
import { Flag } from '@app/generated/civic.apollo';



@Component({
  selector: '[cvcFlaggable]',
  templateUrl: './flaggable.component.html',
  styleUrls: ['./flaggable.component.less']
})
export class FlaggableComponent implements OnInit {
  @Input() flags!: Flag[];

  constructor() { }

  ngOnInit(): void {
  }

}
