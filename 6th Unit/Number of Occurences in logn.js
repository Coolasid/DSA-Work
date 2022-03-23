function numberOcc(N, K, arr) {
  let lowerBound = (N, K, arr) => {
    let low = 0;
    let high = N - 1;
    let ans = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] == K) {
        ans = mid;
        high = mid - 1;
      }

      if (arr[mid] > K) {
        high = mid - 1;
      } else if (arr[mid] < K) {
        low = mid + 1;
      }
    }

    return ans;
  };

  let upperBound = (N, K, arr) =>{
      let low = 0;
      let high = N - 1;
      let ans = -1;

      while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] == K) {
          ans = mid;
          low = mid + 1;
        }

        if (arr[mid] > K) {
          high = mid - 1;
        } else if (arr[mid] < K) {
          low = mid + 1;
        }
      }

      return ans;
  }

  if(upperBound(N, K, arr) == -1 && lowerBound(N, K, arr) == -1){
      return 0;
  }

  return upperBound(N, K, arr) - lowerBound(N, K, arr) + 1;
}

function runProgram(input) {
  var input = input.trim().split('\n');
  let [N, K] = input[0].trim().split(' ').map(Number);

  let arr = input[1].trim().split(' ').map(Number);

  console.log(numberOcc(N, K, arr));
}
if (process.env.USERNAME === 'siddhesh') {
  runProgram(`6 3
2 3 3 3 6 9`);
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
