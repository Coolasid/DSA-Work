function perfectq(N, K, arr){

    for(let i = 0; i < N; i++){
        if(arr[i] == K){
            return console.log(i)
        }
    }

    return console.log("Not Found")
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];
   let line = 1;

   for(let i = 0; i < testCases; i++){
        let [N, K] = input[line].trim().split(" ").map(Number);
        line++;
        let arr = input[line].trim().split(' ').map(Number);
        line++;

        perfectq(N, K, arr)
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
7 40
10 3 40 20 80 70 90`);
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