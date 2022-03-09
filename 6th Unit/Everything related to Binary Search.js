function bS(N, arr, K){

    // console.log(N, arr, K);

    function upperBound(arr, N, K){

    }

    function lowerBound(arr, N, K){

    }

    

}

function runProgram(input) {
   var input = input.trim().split('\n');

   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
   let K = +input[2]
    
   bS(N, arr, K)

  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`6
1 1 1 2 2 2	
1`);
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