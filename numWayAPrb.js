function NumWays(N){
        // console.log(N);

        for( var i = 0; i <= N; i++){
            
        }
}


function runProgram(input) {
   var N = +input.trim();

    NumWays(N);
   
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