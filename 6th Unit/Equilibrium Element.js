function equili(N, arr){
    // console.log(N, arr);

    let leftArr = [];
    let rightArr = [];
    let Lsum = 0;
    let Rsum = 0;

    for(let i = 0; i < N; i++){
        Lsum += arr[i];
        leftArr.push(Lsum);
    }

    for(let i = N-1; i >= 0; i--){
        Rsum += arr[i];
        rightArr.push(Rsum)
    }

    rightArr.reverse();
    // console.log(leftArr);
    // console.log(rightArr);

    for(let i = 0; i < N; i++){
        if(leftArr[i] == rightArr[i] ){
            return i+1
        }
    }

    return -1;
}


function runProgram(input) {
   var input = input.trim().split("\n")
   
   let N = +input[0];

   let arr = input[1].trim().split(" ").map(Number);

 console.log(equili(N, arr))
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
3 3 5 5 1`);
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