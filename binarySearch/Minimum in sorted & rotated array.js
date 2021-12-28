function minSortArr(N, arr){

    console.log(N, arr);

}



function runProgram(input) {
   var input = input.trim().split('\n');

   var N = +input[0];

   var arr = input[1].trim().split(" ").map(Number);

   minSortArr(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`10
4 6 7 9 10 -1 0 1 2 3`);
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