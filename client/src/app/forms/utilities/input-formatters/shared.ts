import { Maybe, NullableStringInput } from '@app/generated/civic.apollo'

export function toNullableString(str: Maybe<string>): NullableStringInput {
  let nStr: NullableStringInput = { value: undefined, unset: undefined }
  if (str && str.trim().length > 0) {
    nStr.value = str.trim()
  } else {
    nStr.unset = true
  }
  return nStr
}

export function toNullableInput<T>(x: Maybe<T>): {
  value: Maybe<T>
  unset: Maybe<boolean>
} {
  let nullable: { value: Maybe<T>; unset: Maybe<boolean> } = {
    value: undefined,
    unset: undefined,
  }
  if (x !== undefined) {
    nullable.value = x
  } else {
    nullable.unset = true
  }
  return nullable
}

export function toNumOrUndefined(x: string | undefined): number | undefined {
  return x ? +x : undefined
}
