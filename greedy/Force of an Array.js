function    forceOfArr(arr){

    console.log(arr);

}


function runProgram(input) {
   var input = input.trim().split('\n');

   var testCases = +input[0];

   var line = 1;
   for(var i = 0; i < testCases; i++){

        var arr = input[line].trim().split(" ");
        line++;
        forceOfArr(arr)

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
0 1 6 4
1 1 4 2`);
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