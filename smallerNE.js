function smallerNE(N, arr){
   var stack = [];
   var ans = [];

   for( var i = 0; i < N; i++){
       while( stack.length > 0 && stack.peek )
   }
}



function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var arr = input[1].split(" ").map(Number);

   smallerNE(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`8
39 27 11 4 24 32 32 1`);
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