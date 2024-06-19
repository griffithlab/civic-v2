import { UntypedFormControl } from '@angular/forms'
import { ActivatedRoute, Params } from '@angular/router'
import { Maybe } from '@app/generated/civic.apollo'
import { FormlyExtension, FormlyFieldConfig } from '@ngx-formly/core'
import { distinctUntilKeyChanged, Subscription } from 'rxjs'

export interface ObserveQueryParamProps {
  // if false, field will not observe query parameters
  // if true, field will watch query params for field.key values
  // if string, field will watch query params for paramKey value
  paramKey: boolean | string
}

export const defaultObserveQueryParamProps = {
  paramKey: true,
}

export class ObserveQueryParamExtension implements FormlyExtension {
  paramKey: Maybe<string | number>
  fieldParam: Maybe<string | number>

  constructor(private route: ActivatedRoute) {}
  postPopulate(field: FormlyFieldConfig) {
    // only primitive values will be observed for now, so skip
    // observing params for fieldGroups, fieldArrays
    if (field.fieldGroup || field.fieldArray) return

    // merge field props, end if field config has has paramKey set to false
    const props = field.props || { ...defaultObserveQueryParamProps }
    if (props.paramKey === false) return

    // end if no paramKey
    this.paramKey = this.getParamKey(field)
    if (!this.paramKey) return

    // subscribe to route queryParams
    const routeSub = this.getRouteSub(this.route, field)
    // save any existing onDestroy fn to call later
    const preservedOnDestroy = field.hooks?.onDestroy
    // setup onDestroy hook to unsub from routeSub and call preservedOnDestroy
    if (routeSub && preservedOnDestroy) {
      field.hooks = {
        ...field.hooks,
        onDestroy: (field) => {
          routeSub.unsubscribe()
          preservedOnDestroy(field)
        },
      }
    }
  }

  getParamKey(field: FormlyFieldConfig): Maybe<string | number> {
    // assert props existence bc this fn only called if it exists
    const props = field!.props!
    // get queryParam from props, or use field's key if it is a string
    if (typeof props.paramKey === 'string') {
      return props.paramKey
    } else if (field.key) {
      if (typeof field.key === 'string') {
        return field.key
      } else {
        console.warn(
          `observe-query-param cannot use field key ${JSON.stringify(
            field.key
          )} of type ${typeof field.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`
        )
      }
    }
    return
  }

  getRouteSub(route: ActivatedRoute, field: FormlyFieldConfig): Subscription {
    const sub = route.queryParams
      .pipe(distinctUntilKeyChanged(this.paramKey!))
      .subscribe((params: Params) => {
        // getRouteSub isn't called unless fieldGroup, fieldArray check passed,
        // hence this field's control is a FormControl
        // (and not a FieldArray, FieldGroup or FieldRecord)
        // so it can be confidently cast as such here
        const ctrl = field.formControl as UntypedFormControl
        // set param value, end if undefined
        const paramValue = params[this.paramKey!]
        if (!paramValue) {
          //sub.unsubscribe()
          return
        }

        // parse param
        let fieldValue: Maybe<number | string | boolean | string[] | number[]> =
          undefined
        try {
          fieldValue = JSON.parse(paramValue)
        } catch (error) {
          console.warn(
            `observe-query-param failed to parse query param ${this.paramKey} for field ${field.id}: ${error}`
          )
          console.warn(
            `Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted.`
          )
          //sub.unsubscribe()
          return
        }
        if (!fieldValue) return
        // ensure provided value is not an object, end if it is
        if (
          Object.keys(fieldValue).length > 0 &&
          fieldValue.constructor === Object
        ) {
          console.warn(
            `observe-query-param may only set primitive types or arrays of primitive types, param ${
              this.paramKey
            } is an object: ${JSON.stringify(fieldValue)}`
          )
          //sub.unsubscribe()
          return
        }
        ctrl.setValue(fieldValue)
      })

    return sub
  }
}
