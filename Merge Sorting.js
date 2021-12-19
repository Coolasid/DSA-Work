function merge(arr, low, high, mid) {
  var left = [];
  var right = [];


  for (var i = low; i <= mid; i++) {
    left.push(arr[i]);
  }

  for (var i = mid + 1; i <= high; i++) {
    right.push(arr[i]);
  }



  var I = 0;
  var J = 0;
  var K = low;

  while (I < left.length && J < right.length) {
    if (left[I] <= right[J]) {
      arr[K] = left[I];
      I++;
    } else {
      arr[K] = right[J];
      J++;
    }
    K++;
  }

  while (I < left.length) {
    arr[K] = left[I];
    I++;
    K++;
  }

  while (J < right.length) {
    arr[K] = right[J];
    J++;
    K++;
  }
  //    console.log(arr);
}


function mergeSort(arr, low, high) {

  // return high

  if (low >= high) {
    return;
  }

  var mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, high, mid);



}



function runProgram(input) {
  var input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);

  var low = 0;
  var high = N - 1;

  mergeSort(arr, low, high);
  console.log(arr.join(" "));

}
if (process.env.USERNAME === "siddhesh") {
  runProgram(`5
3 5 0 9 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}