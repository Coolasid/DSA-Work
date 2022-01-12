function BTM(N, arr){

    // console.log(N, arr);
let count = 0;
    for(let i = 0; i < N; i++){

        i += arr[i]-1
        count++;
        if( i > N){
            return 0;
        }
        if(i == N){
            return count;
        }

    }

    

}


function runProgram(input) {
   var input = input.trim().split('\n');

   var N = +input[0];
   var arr = input[1].trim().split(' ').map(Number)
   
  console.log(  BTM(N, arr));
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`11
1 3 5 8 9 2 6 7 6 8 9`);
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