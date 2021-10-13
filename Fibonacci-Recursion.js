function fibo(N){
      if( N == 0 || N == 1){
          return N;
      }

      return fibo(N-1) + fibo(N-2);
}


function runProgram(input) {
   var N = +input.trim();

   console.log(fibo(N))

   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4`);
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