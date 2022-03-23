let input = [1, 2, 3, 4, 8, 10, 10, 12, 29];
let K = 30;

function floor(arr, K) {
  let N = arr.length;
  let low = 0;
  let high = N - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == K) {
      return mid;
    }
    if (arr[mid] < K) {
      ans = mid;
      low = mid + 1;
    } else if (arr[mid] > K) {
      high = mid - 1;
    }
  }

  return ans;
}

console.log(floor(input, K));
