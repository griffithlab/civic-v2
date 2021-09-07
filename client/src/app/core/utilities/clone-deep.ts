// export function cloneDeep(obj: any) {
//   Object.assign(
//     {},
//     obj,
//     JSON.parse(JSON.stringify(obj)));
// }
export function cloneDeep(obj: any) {
  if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
    return obj;
  let clone;
  if (obj instanceof Date)
    clone = new Date(obj);
  else
    clone = obj.constructor();

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj['isActiveClone'] = null;
      clone[key] = cloneDeep(obj[key]);
      delete obj['isActiveClone'];
    }
  }
  return clone;
}
