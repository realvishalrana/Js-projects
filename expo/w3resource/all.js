// ------------------------------------------------------------------------------------------
//2
// const pull = (arr, ...target) => {
//   let result = arr;
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     result = result.filter((x) => {
//       return x !== target[i];
//     });
//   }

//   return getUnique(result);
// };

// function getUnique(array) {
//   var uniqueArray = [];

//   // Loop through array values
//   for (i = 0; i < array.length; i++) {
//     if (uniqueArray.indexOf(array[i]) === -1) {
//       uniqueArray.push(array[i]);
//     }
//   }
//   return uniqueArray;
// }

// console.log(pull(["a", "b", "c", "a", "b", "c"], "a", "b")); // ["b", "c", "b", "c"]

// ------------------------------------------------------------------------------------------
// 1
// let obj1 = {
//   name: "John",
//   degree: "CS",
//   age: 32,
// };

// let obj2 = {
//   name: "John",
//   degree: "CS",
// };

// function cmp(obj1, obj2) {
//   for (key in obj2) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(cmp(obj1, obj2));
