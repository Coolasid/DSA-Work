function quickSort(arr, low, high) {
  if (low >= high) {
    return;
  }

  let pivot = partition(arr, low, high);
  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
}

function partition(arr, low, high) {
  let pivot = low;
  i = low;
  j = high;

  while (i < j) {
    while (arr[i] <= arr[pivot] && i < high) {
      i++;
    }

    while (arr[j] > arr[pivot] && j > low) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[pivot], arr[j]] = [arr[j], arr[pivot]];
  return j;
}

function runProgram(input) {
  var input = input.trim().split('\n');
  let N = +input[0];
  let arr = input[1].trim().split(' ').map(Number);

  quickSort(arr, 0, N - 1);
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
