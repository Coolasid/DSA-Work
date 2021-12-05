function mrRobotE(N, str){
    console.log(N,str);
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
   var line = 1;

   for(var i = 0; i < testCases; i++){
       var N = +input[line];
       line++;
       var str = input[line].trim()
       line++;
       mrRobotE(N,str);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);
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