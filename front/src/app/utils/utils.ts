export function isEmpty(obj) {
  if (!obj) {
    return true;
  }
  let res = false;
  for (let k in obj) {
    res = true;
  }
  return res;
}  
