//QUESTION

// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-15.php

function max_min(arr) {
  min = arr[0];
  max = arr[0];

  for (let x of arr) {
    if (arr[x] < min) {
      min = arr[x];
      console.log(min);
    }

    if (arr[x] > max) {
      max = arr[x];
      console.log(max);
    }
  }
}
max_min([3, 52, 5233, 2]);
