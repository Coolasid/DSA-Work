function signalC(N, arr){

    // console.log(N, arr);
    let stack = [];
    

    let span = [];
    stack.push(0)
    span[0] = 1;

    for(let i = 1; i < N; i++){
        while( stack.length > 0 && arr[stack[stack.length-1]] <= arr[i]){
            stack.pop()
        }
        span[i] = stack.length == 0 ? i+1 : i-stack[stack.length-1]
        stack.push(i)
    }
    console.log(span.join(" ")); 
}


function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];
    let line = 1
   for(let i = 0; i < testCases; i++){

    let N = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number)
    line++;

    signalC(N, arr)

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
7
100 80 60 70 60 75 85
5
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
      process.exit(0) ;
    });
  }



//   function signalC(N, arr) {
//     // console.log(N, arr);
//     let span = [];
//     span[0] = 1;
//     for (let i = 1; i < N; i++) {
//       let c = 1;
//       for (let j = i - 1; j >= 0; j--) {
//         if (arr[i] >= arr[j]) {
//           c++;
//         } else {
//           break;
//         }
//       }
//       span.push(c);
//     }

//     console.log(span.join(' '));
//   }
