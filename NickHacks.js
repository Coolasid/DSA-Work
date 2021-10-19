function NickHacks(N){
    // console.log(N);
    if( N % 10 == 0  || N % 20 == 0 || N == 1){
        console.log("Yes");
    }else{
        console.log("No");
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];

   var line = 1;
   for( var i = 0; i < testCases; i++){
       var N = +input[line].trim();
       line++;
       
        NickHacks(N);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
1
2
10
25
200`);
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