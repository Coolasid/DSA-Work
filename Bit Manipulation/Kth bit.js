function bitK(N, K){

    let i = 1;

     i = i << K;

     let res = N & i

     if(res == 0) return console.log("No")
     else return console.log("Yes");

    // console.log(i);

}

function runProgram(input) {
   var input = input.trim().split('\n');

   let testCases = +input[0];
   let line = 1;

   for (let i = 0; i < testCases; i++) {
     let [N, K] = input[line].trim().split(' ').map(Number);
     line++;
     bitK(N, K);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
5 2
5 1`);
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