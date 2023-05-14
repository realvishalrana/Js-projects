// program to extract value as an array from an array of objects
function filter_Non_Unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

// const objArray = [
//   { a: 1, b: 2, id: 3 },
//   { a: 4, b: 5, id: 4 },
//   { a: 8, b: 9, id: 3 },
// ];

// passing an array of objects and property 'a' to extract
const result = filter_Non_Unique(["a", 1, "a", 2]);
console.log(result);

// console.log(
//   filter_Non_UniqueBy(
//     { id: 0, value: "a" },
//     { id: 1, value: "b" },
//     { id: 2, value: "c" },
//     { id: 1, value: "d" },
//     { id: 0, value: "e" }
//   )
// );
