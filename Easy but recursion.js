var sum = 0;

function easyRec(N, arr,curr){
    // return arr,N
    
    if(curr == N){
        return 0;
    }

  return arr[curr] + easyRec(N,arr,curr+1);
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0]

   var line = 1;
   for(var i = 0; i < testCases; i++){
       var curr = 0;
       var N = +input[line];
       line++;
       var arr = input[line].split(" ").map(Number);
       line++;

       console.log(easyRec(N,arr,curr));
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`);
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