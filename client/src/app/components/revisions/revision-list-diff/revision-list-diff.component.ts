import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  OnInit,
} from '@angular/core'
import { ObjectFieldDiff } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-revision-list-diff',
  templateUrl: './revision-list-diff.component.html',
  styleUrls: ['./revision-list-diff.component.less'],
  standalone: false,
})
export class RevisionListDiffComponent implements OnInit {
  @Input() diffObject!: ObjectFieldDiff
  @Input() entityType!: string

  //Must pass in an <ng-template #itemTemplate> as a child element
  @ContentChild('itemTemplate') itemTemplateRef?: TemplateRef<any>
  constructor() {}

  ngOnInit(): void {
    if (this.diffObject === undefined) {
      throw new Error('Must specify a diffObject.')
    }
    if (this.entityType === undefined) {
      throw new Error('Must specify an entityType.')
    }
  }
}
