import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-phenotypes',
  templateUrl: './phenotypes.component.html',
  styleUrls: ['./phenotypes.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PhenotypesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
