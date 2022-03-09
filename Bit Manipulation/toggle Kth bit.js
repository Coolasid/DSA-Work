let N = 27;
let K = 2;

function set(N, K) {
  let i = 1;
  i = i << K;

  let res = N ^ i;

  return res;
}

console.log(set(N, K));


function getAge() {
//   'use strict';
  age = 21;
  console.log(age);
}

getAge();
