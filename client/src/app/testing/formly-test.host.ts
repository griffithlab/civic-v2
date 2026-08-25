import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core'

/**
 * Minimal formly form for mounting a single field type by its registered
 * string name — the same path the real forms take, so type registration and
 * defaultOptions are exercised too.
 */
@Component({
  standalone: true,
  imports: [ReactiveFormsModule, FormlyModule],
  template: `<form [formGroup]="form">
    <formly-form
      [form]="form"
      [fields]="fields"
      [model]="model"
      [options]="options" />
  </form>`,
})
export class FormlyTestHostComponent {
  form = new FormGroup({})
  fields: FormlyFieldConfig[] = []
  model: Record<string, any> = {}
  options: FormlyFormOptions = {}
}

export interface FieldTestHostConfig {
  field: FormlyFieldConfig
  model?: Record<string, any>
  /** becomes `options.formState`, where fields find their state subjects */
  formState?: any
  imports?: any[]
  providers?: any[]
}

/**
 * Configures a TestBed around one field and returns its fixture. FormlyModule
 * is provided with forRoot here (test root injector only — never do this in a
 * lazy app injector, it breaks FieldArrayType.onPopulate).
 */
export function createFieldTestHost(config: FieldTestHostConfig) {
  TestBed.configureTestingModule({
    imports: [
      FormlyTestHostComponent,
      FormlyModule.forRoot(),
      ...(config.imports ?? []),
    ],
    providers: config.providers ?? [],
  })

  const fixture = TestBed.createComponent(FormlyTestHostComponent)
  const host = fixture.componentInstance
  host.model = config.model ?? {}
  host.fields = [config.field]
  if (config.formState) host.options = { formState: config.formState }
  fixture.detectChanges()
  return fixture
}
