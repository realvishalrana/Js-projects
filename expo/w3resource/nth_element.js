// function every_nth(arg, index) {
//   return arg.filter((x) => x % index === 0);
// }

// console.log(every_nth([1, 2, 3, 4, 5, 6], 3));

// const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
// console.log(every_nth([1, 2, 3232, 4, 5, 6], 2));

const arr = [
  { id: 1, name: "Tom" },
  { id: 1, name: "Tom" },
  { id: 2, name: "Nick" },
  { id: 2, name: "Nick" },
];

const uniqueIds = [];

const uniqu = arr.filter((element) => {
  const isDuplicate = uniqueIds.includes(element.id);
  if (!isDuplicate) {
    uniqueIds.push(element.id);
    return true;
  }
  return false;
});
