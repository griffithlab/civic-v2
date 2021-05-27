import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import {
  FormGroup,
} from '@angular/forms';

import {
  BehaviorSubject,
  Subject,
} from 'rxjs';

import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cvc-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.less']
})
export class CommentAddFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
