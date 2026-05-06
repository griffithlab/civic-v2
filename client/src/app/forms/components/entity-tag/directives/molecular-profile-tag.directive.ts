import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core'

@Directive({
  selector: '[cvcMolecularProfileTag]',
  standalone: true,
})
export class CvcMolecularProfileTag implements OnChanges {
  @Input() cvcMolecularProfileId?: number
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcMolecularProfileId) {
      console.log(
        'mp tag directive cvcMolecularProfileId:' +
          changes.cvcMolecularProfileId.currentValue
      )
    }
  }
}
