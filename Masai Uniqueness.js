function masaiUniq(str){
    console.log(str);
}


function runProgram(input) {
   var str = input[0].trim();

   masaiUniq(str);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`masai`);
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