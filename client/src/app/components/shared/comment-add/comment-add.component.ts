import {
  Component,
  OnInit,
  Input,
  Output,
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

export interface NewComment {
  body: string;
  organizationId?: number
}

@Component({
  selector: 'cvc-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.less']
})
export class CommentAddComponent implements OnInit {
  @Output() commentSubmitted = new EventEmitter<NewComment>();

  addCommentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addCommentForm = this.fb.group({
      body: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  submitComment(value: NewComment): void {
    for (const key in this.addCommentForm.controls) {
      this.addCommentForm.controls[key].markAsDirty();
      this.addCommentForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    this.commentSubmitted.emit(value);
  }

}
