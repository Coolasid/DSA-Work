function diagonalSum(N, arr){


    // console.log(N, arr);

    let mat = new Array(N);

    for(let i = 0; i < N; i++){
        mat[i] = new Array(N).fill(0);

    }

    // console.log(mat);

    let left = 0
    let right = N-1;
    let up = 0;
    let down = N-1;


    // while( )




}

function runProgram(input) {
   var input = input.trim().split("\n");
   
   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){

    let N = +input[line]
    line++;

    let arr = input[line].trim().split(" ").map(Number);
    line++;

    diagonalSum(N, arr);
    

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
1
1
2
1 2 3 4
3
1 2 3 4 5 6 7 8 9`);
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