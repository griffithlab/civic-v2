import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertionHomePage } from './assertion-home.page';



@NgModule({
  declarations: [AssertionHomePage],
  imports: [
    CommonModule
  ],
  exports: [AssertionHomePage]
})
export class AssertionHomeModule { }
