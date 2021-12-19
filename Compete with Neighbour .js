function compN(N, arr){
    var count = 0;
    for(var i = 1; i < N; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            count++;
        }
    }

    console.log(count);
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
   
   compN(N,arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`8
1 2 3 4 2 1 6 5`);
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