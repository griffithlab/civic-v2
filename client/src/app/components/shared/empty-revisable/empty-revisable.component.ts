import { Component, Input, OnInit } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-empty-revisable',
  templateUrl: './empty-revisable.component.html',
  styleUrls: ['./empty-revisable.component.less'],
})
export class CvcEmptyRevisableComponent implements OnInit {
  @Input() notification: Maybe<string>

  constructor() {}

  ngOnInit(): void {}
}
