let N = 16;

function check(N) {
  if (N == 0) {
    return false;
  }

  let res = N & (N - 1);

  if (res == 0) {
    return true;
  }
  return false;
}

console.log(check(N));
