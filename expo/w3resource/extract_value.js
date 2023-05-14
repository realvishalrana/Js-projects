// console.log(extract(['a', 'b', 'c', 'd', 'e', 'f'], [1,3])) // ["b", "d"]

// question

let arra2 = [1, 6, 7, 4];

function getIndex(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr;
}

console.log(getIndex(arra2, 4));
