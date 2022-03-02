function majority(N, arr){

    // console.log(N, arr);

    let obj = {};

    for(let i = 0; i < N; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] =1;
        }else{
            obj[arr[i]]++;
        }
    }

    // console.log(obj);

    let M = Math.floor(N/2)

    for(key in obj){
        if(obj[key] > M){
            return key;
        }
    }
    return -1
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){

    let N = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;

   console.log( majority(N, arr));

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
6
1 1 1 1 2 3
5
1 1 2 2 3`);
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