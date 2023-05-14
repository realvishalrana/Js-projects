let obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };

let renameKey = (keyObj, obj) => {
  let result = {};
  for (let key in obj) {
    result[keyObj[key] | key] = obj[key];
  }
  return result;
};
console.log(renameKey({ name: "firstName", job: "Actor" }, obj)); //{firstName: "Bobo", Actor: "Programmer", shoeSize: 100}
