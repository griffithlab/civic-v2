import { Component } from '@angular/core';

@Component({
  selector: 'cvc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {

  isCollapsed = false;
  title = 'main'
  constructor() {
  }


}
