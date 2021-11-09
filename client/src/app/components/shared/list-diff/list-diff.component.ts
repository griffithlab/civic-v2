import { Component, Input, ContentChild, TemplateRef, OnInit} from '@angular/core';
import { ObjectFieldDiff } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-list-diff',
  templateUrl: './list-diff.component.html',
  styleUrls: ['./list-diff.component.less']
})
export class ListDiffComponent implements OnInit{
    @Input() diffObject!: ObjectFieldDiff
    @Input() entityType!: string

    //Must pass in an <ng-template #itemTemplate> as a child element
    @ContentChild('itemTemplate') itemTemplateRef?: TemplateRef<any>
  constructor() { }

  ngOnInit(): void {
    if (this.diffObject === undefined) {
      throw new Error("Must specify a diffObject.")
    }
    if (this.entityType === undefined) {
      throw new Error("Must specify an entityType.")
    }
  }
}
