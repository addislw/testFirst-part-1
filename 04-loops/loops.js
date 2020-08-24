/* eslint-disable no-unused-vars */
const repeat = (str, num) => {
  newStr = '';
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
};

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length > 0) {
    let tot = 0;
    for (let i = 0; i < arr.length; i++) {
      tot += arr[i];
    }
    return tot;
  }
}

const join = (arr, delim) => {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (delim !== undefined && i < arr.length - 1) {
      str += delim;
    }
  }
  return str;
};

function gridGenerator(n) {
  retStr = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) {
        retStr += '#';
      } else {
        retStr += ' ';
      }
    }
    retStr += '\n';
  }
  return retStr;
}

const paramify = (obj) => {
  let arr = [];
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(`${prop}=${obj[prop]}`);
    }
  }
  newStr = arr.sort().join('&');
  return newStr;
};

function paramifyObjectKeys(obj) {
  let arr = [];
  for (prop in obj) {
    if (Object.keys(obj)) {
      arr.push(`${prop}=${obj[prop]}`);
    }
  }
  newStr = arr.sort().join('&');
  return newStr;
}

const sort = (numArr) => {
  return numArr;
};
