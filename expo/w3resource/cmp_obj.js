let obj1 = {
  name: "John",
  degree: "CS",
};

let obj2 = {
  name: "John",
  degree: "CS",
  age: 32,
};

const cmpObj = (obj1, obj2) => {
  const valueObj1 = Object.values(obj1).sort();
  const valueObj2 = Object.values(obj2).sort();

  return valueObj1.every((e) => valueObj2.includes(e));
};

console.log(cmpObj(obj1, obj2));

// console.log(
//   cmpObj({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
// );
// function check(obj1, obj2) {
//   for (key in obj2) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(check(obj1, obj2));
