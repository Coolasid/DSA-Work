function runProgram(input) {
   var input = input.trim().split("\n");
   let N = +input[0];

   let str = input[1].trim().split("");
   let countV = 0
   let countC = 0

   for(let i = 0; i < N; i++){
       if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"  ){
           countV++;
       }else{
           countC++;
       }
   }


   console.log((countV*5) + (countC*2));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
aman`);
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