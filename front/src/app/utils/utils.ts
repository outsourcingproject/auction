export function isEmpty(obj) {
  for (let k in obj) {
    return false;
  }
  return true;
}
