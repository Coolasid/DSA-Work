function Trib(N, dp){

    // console.log(N, dp);

    if(dp[N] != -1){
        return dp[N];
    }


    return dp[N] = Trib(N-1, dp) + Trib(N-2, dp)  + Trib(N-3, dp)
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];
   let line = 1;

   

   let dp = new Array(100).fill(-1);   

   dp[0] = 0
   dp[1] = 1;
   dp[2] = 1;

   for(let i = 0; i < testCases; i++){

    let N = +input[line];
    line++;
      console.log(  Trib(N, dp));

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
4`);
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