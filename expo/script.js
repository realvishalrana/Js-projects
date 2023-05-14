// import { x } from "./common.js";
// import lkdsjfa from "./common.js";

function checkIsDivisible(x) {
  for (let i = 2; i <= 10; i++) {
    if (x % i !== 0) {
      return false;
    }
  }
  return true;
}
let number = 10;
while (!checkIsDivisible(number)) {
  number++;
}

var gcd = function (a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
const n1 = 2;
const n2 = 10;
const LCM = (n1 * n2) / gcd(n1, n2);
console.log(LCM);
