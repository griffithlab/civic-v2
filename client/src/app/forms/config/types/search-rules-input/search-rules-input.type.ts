import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-search-rules-type',
  templateUrl: './search-rules-input.type.html',
  styleUrls: ['./search-rules-input.type.less'],
})
export class SearchRulesType extends FieldArrayType implements OnInit {

  get errorState() {
    return this.showError ? 'error' : '';
    return ''
  }

  addField(e: MouseEvent): void {
    if (e) { e.preventDefault(); } // prevent form submit
    this.add();
  }

  ngOnInit() {
    this.to.add = this.add.bind(this);
    this.to.remove = this.remove.bind(this);
  }
}

export const SearchRulesTypeOption = {
  name: 'search-rules',
  component: SearchRulesType,
}
