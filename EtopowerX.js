var ans = 0;

function factorial(e) {
    if (e == 0 || e == 1){
        return 1;
    }
     
    return e * factorial(e - 1);
}
// console.log(factorial(5))

function eToX(x, n, m, s){

    if(m > n){
        return ans.toFixed(4);
    }

ans = ans + ((x**(s))/factorial(m));

return eToX(x,n,m+1,s+1);
}


function runProgram(input) {
   var input = input.trim().split(" ");

   var x = +input[0];
   var n = +input[1];
   var m = 0;
   var s = 0;

   console.log(eToX(x,n,m,s))
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4 2`);
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