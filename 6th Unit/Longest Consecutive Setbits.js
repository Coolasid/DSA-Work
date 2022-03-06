function setMBits(N){
    // console.log(N);

    let c = 0

     N = N.toString(2).split("")
     N = N.join("")
     N = N.split("0")
     let min = 0;

     for(let i = 0; i < N.length; i++){
        if(N[i].length > min){
            min = N[i].length
        }
     }
    console.log(min);
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0]

   let line = 1;

   for(let i = 0; i < testCases; i++){
        let N = +input[line];
        line++;
        setMBits(N);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
1
0
4294967295
13`);
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