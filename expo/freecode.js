const obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.entries(obj));
// let users = [
//   { firstName: "Susan", lastName: "Steward" },
//   { firstName: "Daniel", lastName: "Longbottom" },
//   { firstName: "Jacob", lastName: "Black" },
// ];

// let x = users.map((x) => {
//   return x.firstName;
// });

// console.log(x);

const employees = [
  { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
  { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
  { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
  { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];
Object.entries(obj).forEach(function ([key, value]) {});
// const calcAmt = (obj) => {
//   newObj = {};
//   newObj.name = obj.name;
//   newObj.netEarning = obj.salary + obj.bonus - obj.tax;
//   return newObj;
// };

// let newArr = employees.map(calcAmt);
// console.log(newArr);

// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// person.firstName = "devid";
// person.age = 42;
// // console.log(person["firstName"]);
// // console.log(person["lastName"]);
// // console.log(person.firstName);
// // console.log(person["age"]);

// for (let k in person) {
//   console.log(Object.keys(k));
// }

var personsArray = [
  {
    id: 1,
    firstName: "Malcom",
    lastName: "Reynolds",
  },
  {
    id: 2,
    firstName: "Kaylee",
    lastName: "Frye",
  },
  {
    id: 3,
    firstName: "Jayne",
    lastName: "Cobb",
  },
];

// Returns a new array of objects made up of full names.
var reformatPersons = function (persons) {
  return persons.map(function (person) {
    // create a new object to store full name.
    var newObj = {};
    newObj.fullName = person.firstName + " " + person.lastName;

    // return our new object.
    return newObj;
  });
};
var fullNameArray = reformatPersons(personsArray);
console.log(fullNameArray);
