function searchInSortedRotedArr(N, K, arr) {
  let binaryS = (arr, K, low, high) => {
    let 
      N = arr.length;
      

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] == K) {
        return mid;
      }

      if (arr[mid] < K) {
        low = mid + 1;
      } else if (arr[mid] > K) {
        high = mid - 1;
      }
    }
    return -1;
  };

  let minInSortRotatedArr = (arr) => {
    let low = 0,
      N = arr.length,
      high = N - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      let prev = (mid - 1) % N;
      let next = (mid + 1) % N;

      if (arr[mid] < arr[prev] && arr[mid] < arr[next]) {
        return mid;
      }

      if (arr[low] <= arr[mid]) {
        low = mid;
      } else if (arr[mid] <= arr[high]) {
        high = mid;
      }
    }
  };

  let minIndexInArr = minInSortRotatedArr(arr);

//   console.log(minElementInArr);


  let LHS = binaryS(arr, K, 0, minIndexInArr-1)
  let RHS = binaryS(arr, K, minIndexInArr, N-1);

//   console.log(LHS, RHS);

  if(LHS == -1 && RHS == -1){
      return -1;
  }else if(LHS != -1 ){
      return LHS
  }else if( RHS != -1){
      return RHS;
  }


}

function runProgram(input) {
  var input = input.trim().split('\n');

  let [N, K] = input[0].trim().split(' ').map(Number);
  let arr = input[1].trim().split(' ').map(Number);

  console.log(searchInSortedRotedArr(N, K, arr));
}
if (process.env.USERNAME === 'siddhesh') {
  runProgram(`5 1
3 4 5 1 2`);
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
