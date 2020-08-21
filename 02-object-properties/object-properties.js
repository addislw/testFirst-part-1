/* eslint-disable no-unused-vars */
function setPropsOnObj(obj) {
  obj.x = 7;
  obj['y'] = 8;
  obj.onePlus = (x) => {
    return x + 1;
  };
}

function setPropsOnArr(arr) {
  arr['hello'] = () => {
    return 'Hello!';
  };
  arr['full'] = 'stack';
  arr[0] = 5;
  arr['twoTimes'] = (x) => {
    return x * 2;
  };
}

function setPropsOnFunc(func) {
  func.year = '20??';
  func['divideByTwo'] = (x) => {
    return x / 2;
  };
}
/*
function shallowCopy(one, two) {
  if (Array.isArray(one)) return [...one, ...two];
  return { ...one, ...two };
}
*/
function shallowCopy(obj1, obj2) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    let newArr = [...obj1, ...obj2];
    return newArr;
  } else {
    let newObj = { ...obj1, ...obj2 };
    return newObj;
  }
}
