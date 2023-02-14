import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { EntityFieldSubjectMap } from '@app/forms2/states/base.state'
import { CvcFieldGridWrapperConfig } from '@app/forms2/wrappers/field-grid/field-grid.wrapper'
import { MolecularProfile } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { Maybe } from 'graphql/jsutils/Maybe'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject, Subject } from 'rxjs'
import { CvcVariantSelectFieldOption } from '../../variant-select/variant-select.type'

type MpFinderModel = {
  geneId?: number
  variantId?: number
}

type MpFinderState = {
  formLayout: NzFormLayoutType
  fields: EntityFieldSubjectMap
}

@Component({
  selector: 'cvc-mp-finder',
  templateUrl: './mp-finder.component.html',
  styleUrls: ['./mp-finder.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MpFinderComponent implements AfterViewInit {
  @Output() onSelect = new EventEmitter<MolecularProfile>()

  modelChange$: Subject<MpFinderModel>
  model: MpFinderModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  layout: NzFormLayoutType = 'horizontal'

  finderState: MpFinderState = {
    formLayout: this.layout,
    fields: {
      geneId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantMolecularProfile$: new BehaviorSubject<Maybe<MolecularProfile>>(
        undefined
      ),
    },
  }
  options: FormlyFormOptions
  constructor() {
    this.form = new UntypedFormGroup({})
    this.model = { geneId: undefined, variantId: undefined }
    this.options = { formState: this.finderState }
    this.modelChange$ = new Subject<MpFinderModel>()

    this.config = [
      {
        wrappers: ['field-grid'],
        props: <CvcFieldGridWrapperConfig>{
          grid: {
            cols: 2,
          },
        },
        fieldGroup: [
          {
            key: 'geneId',
            type: 'gene-select',
            props: {
              hideLabel: true,
              layout: {
                showExtra: false,
              },
            },
            resetOnHide: false,
          },
          <CvcVariantSelectFieldOption>{
            key: 'variantId',
            type: 'variant-select',
            props: {
              requireGene: true,
              layout: {
                showExtra: false,
              },
              hideLabel: true,
            },
            resetOnHide: false,
          },
        ],
      },
    ]
  }

  ngAfterViewInit(): void {
    const mp$ = this.finderState.fields.variantMolecularProfile$
    if (!mp$) return
    mp$.pipe(untilDestroyed(this)).subscribe((mp: MolecularProfile) => {
      this.onSelect.next(mp)
    })
  }
}
