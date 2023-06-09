function dropElements(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(func(arr[i])+" " + arr.slice(i))
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }

  return result;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
