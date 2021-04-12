import {
  Component,
  OnInit,
  Input,
  EventEmitter
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import {
  Observable,
  Observer,
} from 'rxjs';

import {
  Gene,
  AddCommentInput,
  CommentableInput,
  CommentableEntities,
} from '@app/generated/civic.apollo';

import { CommentAddService } from './comment-add.service';

// a union type to specify `entity` @Inputs, update as more commentable entities are added.
export type CommentableEntity =
  Gene;

@Component({
  selector: 'cvc-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.less']
})
export class CommentAddComponent implements OnInit {
  @Input() subject!: CommentableInput;

  addCommentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private commentAddService: CommentAddService) {
    this.addCommentForm = this.fb.group({
      body: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  submitComment(value: { body: string}): void {
    for (const key in this.addCommentForm.controls) {
      this.addCommentForm.controls[key].markAsDirty();
      this.addCommentForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    // const newCommentInput = <AddCommentInput>{
    //   body: value.body,
    //   organizationId: 1,
    //   subject: { }

    // }
    // this.commentAddService.addComment
  }

}
