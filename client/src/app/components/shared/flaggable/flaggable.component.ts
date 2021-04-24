import { Component, Input, OnInit } from '@angular/core';
import { Flag, FlaggableEntities } from '@app/generated/civic.apollo';

export interface FlaggableSubject {
  id: number,
  entityType: FlaggableEntities,
  displayName: string,
  icon: string
}

@Component({
  selector: '[cvcFlaggable]',
  templateUrl: './flaggable.component.html',
  styleUrls: ['./flaggable.component.less']
})
export class FlaggableComponent implements OnInit {
  @Input() flags!: number;
  @Input() entity!: FlaggableSubject;

  constructor() { }

  ngOnInit(): void {
  }

}
