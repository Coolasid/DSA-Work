function mC(N, S, arr, dp){
  // console.log(N, S, arr, dp);

  for(let i = 1; i < N+1; i++){
    for(let j = 1; j < S+1; j++){

      if(arr[i-1] <= j){
        dp[i][j] = (dp[i-1][j] + dp[i][j-arr[i-1]])
      }else{
        dp[i][j] = dp[i-1][j]
      }

    }
  }
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let [N, S] = input[0].trim().split(" ").map(Number);
   
   let arr = input[1].trim().split(" ").map(Number);

  //  console.log(N, arr, S);

  let dp = [];

  for(let i = 0; i < N+1; i++){
    dp[i] = [];
    for(let j = 0; j < S+1; j++){
      dp[i][j] = 0;

    } 
  }

  
  for(let i = 0; i < N+1; i++){
    dp[i][0] = 1; 
  }
  
  // console.log(dp);

    mC(N, S, arr, dp)

    console.log(dp[N][S] );

  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3 9
2 3 5`);
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