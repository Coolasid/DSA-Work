function mergeSort(N, arr, low, high) {
  if (low >= high) {
    return;
  }

  let mid = Math.floor((low + high) / 2);

  mergeSort(N, arr, low, mid);
  mergeSort(N, arr, mid + 1, high);
  merge(arr, low, high, mid);
}

function merge(arr, low, high, mid) {
  let left = [];
  let right = [];

  for (let i = low; i <= mid; i++) {
    left.push(arr[i]);
  }

  for (let i = mid + 1; i <= high; i++) {
    right.push(arr[i]);
  }

  let i = 0;
  let j = 0;
  let K = low;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[K] = left[i];
      i++;
    } else {
      arr[K] = right[j];
      j++;
    }
    K++;
  }

  while (i < left.length) {
    arr[K] = left[i];
    i++;
    K++;
  }
  while (j < right.length) {
    arr[K] = right[j];
    j++;
    K++;
  }
}

function runProgram(input) {
  var input = input.trim().split('\n');
  let N = +input[0];
  let arr = input[1].trim().split(' ').map(Number);
  let low = 0;
  let high = N - 1;

  mergeSort(N, arr, low, high);
  console.log(arr);
}
if (process.env.USERNAME === 'siddhesh') {
  runProgram(`14
4 5 3 7 1 5 86 25 2 4 57 5 3 0`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
