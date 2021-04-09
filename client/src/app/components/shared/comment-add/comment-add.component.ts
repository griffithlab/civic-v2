import {
  Component,
  OnInit,
  Input,
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

@Component({
  selector: 'cvc-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.less']
})
export class CommentAddComponent implements OnInit {
  @Input() addFunction!: (args: any) => void;

  addCommentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addCommentForm = this.fb.group({
      comment: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  addComment(value: { comments: string }): void {
    for (const key in this.addCommentForm.controls) {
      this.addCommentForm.controls[key].markAsDirty();
      this.addCommentForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }

}
