import {
  Component,
  Input,
  OnInit,
  ContentChild,
  TemplateRef,
} from '@angular/core';

export interface LinkableEntity {
  id: number;
  displayName: string;
}

@Component({
  selector: 'cvc-section-navigation',
  templateUrl: './section-navigation.component.html',
  styleUrls: ['./section-navigation.component.less'],
})
export class SectionNavigationComponent implements OnInit {
  @Input() entity?: LinkableEntity;
  @Input() relationsTpl?: TemplateRef<any>;

  getRouteLabel: (label: string) => string;

  constructor() {
    this.getRouteLabel = (label) => label;
  }

  ngOnInit(): void {
    if (!this.entity) {
      throw new Error(
        'cvc-section-navigation input relationsTpl requires valid LinkableEntity, none provided.'
      );
    }

    this.getRouteLabel = (label: string): string => {
      if (label !== 'GENERATE') { return label; }
      return this.entity?.displayName === undefined ? 'NAME UNDEFINED' : this.entity.displayName;
    }
  }
}
