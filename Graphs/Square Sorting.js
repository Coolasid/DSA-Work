function sortS(N, arr){
    
    let squareArr = []

    for(let i = 0; i < N; i++){
        squareArr.push(arr[i] ** 2)
    }

    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(squareArr[j] > squareArr[j+1]){
                
                let final = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = final
                
                let temp = squareArr[j];
                 squareArr[j] = squareArr[j+1];
                squareArr[j+1] = temp;

            }
        }
    }

    // console.log(squareArr);
    console.log(arr.join(" "));

}

function runProgram(input) {
   var input = input.trim().split("\n");
   
   let testCases = +input[0];
   let line = 1

   for(let i = 0; i < testCases; i++){
       let N = +input[line];
       line++;
       let arr = input[line].trim().split(" ").map(Number)
       line++;
       sortS(N, arr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
5
-2 3 1 -4 6
`);
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