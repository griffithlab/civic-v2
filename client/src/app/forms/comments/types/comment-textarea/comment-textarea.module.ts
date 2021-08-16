import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentTextareaComponent, CommentTextareaType } from './comment-textarea.type';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';

const formlyConfig = {
  types: [CommentTextareaType]
}

@NgModule({
  declarations: [CommentTextareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzFormModule,
    NzInputModule,
  ],
  exports: [CommentTextareaComponent]
})
export class CommentTextareaModule { }
