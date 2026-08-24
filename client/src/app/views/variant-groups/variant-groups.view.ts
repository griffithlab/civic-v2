import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-variant-groups',
  templateUrl: './variant-groups.view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VariantGroupsView implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
