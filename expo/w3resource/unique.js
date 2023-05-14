// function filter_Non_Unique(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function filter_Non_Unique(arr) {
//   var unique = [];
//   arr.forEach((element) => {
//     if (!unique.includes(element)) {
//       unique.push(element);
//     }
//   });
//   return unique;
// }

// console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
var a = ["a", 1, "a", 2, "1"];
var unique = a.filter(onlyUnique);

// console.log(unique); // ['a', 1, 2, '1']
