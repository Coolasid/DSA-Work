let input = [11, 12, 1, 2, 3, 5, 6, 8];

function NoTimeRotated(arr) {
  let N = arr.length;
  let low = 0;
  let high = N - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let prev = (mid - 1) % N;
    let next = (mid + 1) % N;

    if (arr[mid] < arr[prev] && arr[mid] < arr[next]) {
      return mid;
    }

    if (arr[low] <= arr[mid]) {
      //LHS is sorted
      low = mid;
    } else if (arr[mid] <= arr[high]) {
      //RHS is sorted
      high = mid;
    }
  }
}

console.log(NoTimeRotated(input));
