import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ApolloCache } from '@apollo/client/core';
import { FieldWrapper } from '@ngx-formly/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'field-tag-wrapper',
  templateUrl: './field-tag.wrapper.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldTagWrapper extends FieldWrapper implements AfterViewInit {
  private cache: ApolloCache<any>;

  constructor(private apollo: Apollo) {
    super();
    this.cache = apollo.client.cache;
  }
  get errorState() {
    return this.showError ? 'error' : '';
  }

  ngAfterViewInit() {
    console.log(`field-tag afterViewInit.`);
  }
}
