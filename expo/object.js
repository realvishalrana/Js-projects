// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property
// https://flexiple.com/loop-through-object-javascript/
// https://www.geeksforgeeks.org/find-the-length-of-a-javascript-object/#:~:text=Method%201%3A%20Using%20the%20Object.&text=keys()%20method%20is%20used,the%20length%20of%20the%20object.
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

Object.values(users).forEach((val) => console.log(val));

// for (const key in users) {

//     console.log(`${key}: ${users[key]}`);
// }

// var key,count =0;
// function a(){

//     for (key in users) {
//     if (users.hasOwnProperty(key))
//         // If the key is found, add it to the total length

//         count++;
// }
//     return console.log(count);
// }

// a();
// function isEveryoneHere(userObj) {
//     for(let i=0; i<userObj.)

//   );}

// console.log(isEveryoneHere(users));
