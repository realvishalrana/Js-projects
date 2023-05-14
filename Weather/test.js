const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { lowercaseString };

// // function abc() {
// //   setTimeout(function () {
// //     console.log(i);
// //   }, 1000);
// //   var i = 1;
// // }
// // abc();

// // function outer() {
// //   return function inner() {
// //     console.log(a);
// //   };
// //   console.log("yo");
// //   var a = 1;
// //   // return inner;
// // }
// // const test = outer();
// // test();

// // const users = [
// //   { fname: "one", age: 25 },
// //   { fname: "two", age: 20 },
// //   { fname: "three", age: 25 },
// //   { fname: "one1", age: 19 },
// //   { fname: "one2", age: 20 },
// // ];

// // // {19: 1, 20: 2, 25: 2}

// const result = users.reduce((acc, user) => {
//   // console.log(acc);
//   if (user.age in acc) {
//     acc[user.age] += 1;
//   } else {
//     acc[user.age] = 1;
//   }
//   // console.log(acc);
//   return acc;
// }, {});

// export default result;

// // console.log(result);
