import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PhenotypeTypeaheadGQL, PhenotypeTypeaheadQuery, PhenotypeTypeaheadQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'cvc-tag-input-type',
  templateUrl: './tag-input.type.html',
  styleUrls: ['./tag-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagInputType extends FieldType implements OnInit{
  formControl!: FormControl;

  tagVisible: boolean = false

  private destroy$ = new Subject();

  defaultOptions = {
    templateOptions: {
      placeholder: 'Enter value',
    },
  };

  constructor(
  ) {
    super();
  }

  handleInputConfirm() {
    this.tagVisible = true
  }

  ngOnInit() {
    if (this.formControl.value) {
      this.tagVisible = true
    }
  }

}

export const TagInputTypeOption: TypeOption = {
  name: 'tag-input',
  component: TagInputType,
};
