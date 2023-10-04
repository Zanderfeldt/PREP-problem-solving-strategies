// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!arr1[i]) {
      return obj;
    } else if (!arr2[i]) {
      obj[arr1[i]] = null;
    } else {
      obj[arr1[i]] = arr2[i];
    } 
  }
  return obj;
}


//Colt's version w/ reduce
function twoArrayObject2(keys, values) {
  return keys.reduce((obj, cur, idx) => {
    obj[cur] = idx < values.length ? values[idx] : null;
    return obj;
  }, {});
}

module.exports = twoArrayObject;