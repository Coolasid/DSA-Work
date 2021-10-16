
function strLength(str, i){

    if( i == str.length){
        return i;
    }
    return strLength(str, i+1);
    
}



function runProgram(input) {
    var i = 0;
    var str = input.trim();
  console.log(strLength(str, i));
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`masaischool`);
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