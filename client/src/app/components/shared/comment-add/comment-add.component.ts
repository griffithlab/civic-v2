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
} from '@app/generated/civic.apollo';


import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';
import { CommentAddService } from './comment-add.service';

@Component({
  selector: 'cvc-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.less']
})
export class CommentAddComponent implements OnInit {
  @Input() subject!: CommentableInput;
  viewer$!: Observable<Viewer | null>;
  addCommentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private viewerService: ViewerService,
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

    const newCommentInput = <AddCommentInput>{
      body: value.body,
      subject: this.subject
    };

    this.commentAddService.addComment(newCommentInput)
      .subscribe(({ data }) => {
        console.log('got data', data);
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

}
