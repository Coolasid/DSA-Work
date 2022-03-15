function binaryRep(N){
    let B = N ^ N;

    return B
}

function runProgram(input) {
   var input = input.trim().split("\n")

   let testCases = +input[0];
    let line = 1;
   for(let i = 0; i < testCases; i++){
        let N = +input[line];
        line++
        console.log(binaryRep(N))
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
7
128`);
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


  // function binaryRep(N){
//     // console.log(N);

//     if(N == 1 || N == 0){
//         return N;
//     }

//     let r = N % 2;

//     return  binaryRep(Math.floor(N/2)) + "" + r
// }
