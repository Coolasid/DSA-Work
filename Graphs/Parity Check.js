function  checkP(N, arr){
    let countE = 0;
    let countO = 0;


    for(let i = 0; i < N; i++){
        if(arr[i] %2 == 0){
            countE++;
        }else{
            countO++;
        }
    }

    console.log(Math.abs(countE-countO));
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let N = +input[0];

   let arr = input[1].trim().split(" ").map(Number);

   checkP(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
1 2 3 4 5`);
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