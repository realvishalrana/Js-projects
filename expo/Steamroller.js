function steamrollArray(arr) {
  const newArr = [];

  const getFlattenArr = (arg) => {
    arg.forEach((dt) => {
      if (Array.isArray(dt)) {
        getFlattenArr(dt);
      } else {
        newArr.push(dt);
      }
    });
  };

  getFlattenArr(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
