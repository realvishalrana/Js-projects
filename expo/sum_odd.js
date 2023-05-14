// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
function sumFibs(num) {
  let a = 1;
  let b = 1;
  let result = a;
  var temp;
  while (b <= num) {
    if (b % 2 !== 0) {
      result += b;
    }
    temp = b;
    b = a + b;
    a = temp;
  }
  return result;
}

// test here
sumFibs(4);
