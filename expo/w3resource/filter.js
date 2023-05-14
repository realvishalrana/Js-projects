// let arr = ["a", "b", "c", "a", "b", "c"];

// function pull(arr, ...arg) {
//   let ans = arr;
//   for (let i = 0; i < arr.length; i++) {
//     ans = ans.filter((x) => {
//       return x !== arg[i];
//     });
//   }
//   return ans;
// }

// console.log(pull(["a", "b", "c", "a", "b", "c"], "a")); // ["b", "b"]

//aabbccc
//{a:2,b:2,c:3}

// var sortAlphabets = function (text) {
//   return text.split("").sort().join("");
// };
// let counter = 0;
// const x = sortAlphabets("dskjflasdjflksdfl");
// let ans = {};
// for (let i = 0; i < x.length; i++) {
//   let y = x.charAt(i);
//   if (x[i].includes(y)) {
//     counter++;
//   }
// }
// console.log(ans);

// var arr = [1, 23, 5, 23, 5235, 23, 523, 523, 5235];
// var str1 = "dskjflasdjflksdfl";
// var sortAlphabets = function (text) {
//   return text.split("").sort().join("");
// };
// var x = sortAlphabets(str1);
// console.log(x);
// var obj = {};
// for (let i = 0; i < x.length; i++) {
//   var num = x[i];
//   obj[num] = obj[num] ? obj[num] + 1 : 1;
// }

// let x = "hello world";
// let ans = {};
// for (let i = 0; i < x.length; i++) {
//   var ch = x[i];
//   if (!ans[ch]) {
//     ans[ch] = 0;
//   }
//   console.log(ans[ch]);
//   ans[ch]++;
// }

// console.log(ans);
// -----------------------------------------
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

//   for (i = 0; i < array.length; i++) {
//     if (uniqueArray.indexOf(array[i]) === -1) {
//       uniqueArray.push(array[i]);
//     }
//   }
//   return uniqueArray;
// }

// console.log(pull(["a", "b", "c", "a", "b", "c"], "a", "b")); // ["b", "c", "b", "c"]

const order = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];

let result = order.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});
console.log(result);
