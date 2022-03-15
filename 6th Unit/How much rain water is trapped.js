
function rainWater(N, arr){
    let result = 0, leftMax = 0, rightMax = 0, low = 0, high=N-1;

    while(low <= high){
        if(arr[low] < arr[high]){
            if(arr[low] > leftMax){
                leftMax = arr[low]
            }else{
                result += leftMax - arr[low];
            }
            low++;
        }else{
            if(arr[high] > rightMax){
                rightMax = arr[high]
            }else{
                result += rightMax -arr[high];

            }
            high--;
        }
    }
    console.log(result)
}

function runProgram(input) {
  var input = input.trim().split('\n');

  let testCases = +input[0];
  let line = 1;

  for (let i = 0; i < testCases; i++) {
    let N = +input[line];
    line++;
    let arr = input[line].trim().split(' ').map(Number);
    line++;
    rainWater(N, arr);
  }
}
if (process.env.USERNAME === 'siddhesh') {
  runProgram(`2
5
3 2 0 4 6
7
7 0 3 6 2 3 5`);
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


// function rainWater(N, arr) {

//     // this method takes TC => O(N) & SC => O(N)
//     let leftArr = [];
//     let rightArr = [];

//     leftArr[0] = arr[0]
//     for(let i = 1; i < N; i++){
//         leftArr[i] = Math.max(arr[i], leftArr[i-1])
//     }

//     rightArr[N-1] = arr[N-1];

//     for(let i = N-2; i >= 0; i--){
//         rightArr[i] = Math.max(arr[i], rightArr[i+1]);
//     }

//     let res = 0;
//     for(let i = 0; i < N; i++){
//         res += Math.min(leftArr[i], rightArr[i]) - arr[i]
//     }

//     console.log(res);
// }