function destroyer(arr) {
  let values = [];

  for (let i = 1; i < arguments.length; i++) {
    values.push(arguments[i]);
  }

  let arr2 = arr.filter(function (currentValue) {
    return values.indexOf(currentValue) === -1;
  });

  return arr2;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//op [1,1]
