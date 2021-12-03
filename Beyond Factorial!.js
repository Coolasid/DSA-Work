var sum = 0;

function bfact(N, curr){
    // console.log(N,curr)

    if(curr > N){
        return sum.toFixed(4);
    }

    sum += Math.log(curr);

    return  bfact(N, curr+1);
}



function runProgram(input) {
   var N = +input.trim();
    var curr = 1;
   console.log(bfact(N,curr));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3`);
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