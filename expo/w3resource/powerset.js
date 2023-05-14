//https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-9.php

// question;

const powerset = (arr) =>
  arr.reduce((a, v) => a.concat(a.map((r) => r.concat(v))), [[]]);

console.log(powerset([1, 2]));
