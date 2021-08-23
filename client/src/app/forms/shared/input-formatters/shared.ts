import { Maybe, NullableStringInput } from "@app/generated/civic.apollo";

export function toNullableString(str: Maybe<string>): NullableStringInput {
  let nStr: NullableStringInput = { value: undefined, unset: undefined };
  if (str && str.trim().length > 0) {
    nStr.value = str;
  } else {
    nStr.unset = true;
  }
  return nStr;
}
