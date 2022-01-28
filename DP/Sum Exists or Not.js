function runProgram(input) {
   var input = input.trim().split("\n");

   let N = +input[0];

   let M = +input[2];

   let arr = input[1].trim().split(" ").map(Number);

   let dp = [];

   for(let i = 0; i < M+1; i++){

    dp[i] = [];

    for(let j = 0; j < N+1; j++){
        dp[i][j] = -1;
    }

   }

   for(let i = 0; i < M+1; i++){
    for(let j = 0; j < N+1; j++){
        if(i == 0){
            dp[i][j] = false;
        }
        if(j == 0){
            dp[i][j]  = true
        }
    }

   }

   console.log(dp);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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