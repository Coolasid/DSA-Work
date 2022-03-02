function     sep(N, arr, K){
    // console.log(N, arr, K);
    let oddArr = [];
    let evenArr = [];

    for(let i = 0; i < N; i++){
        if(arr[i] %2== 0){
            evenArr.push(arr[i])
        }else{
            oddArr.push(arr[i])
        }
    }

    evenArr.sort((a, b) => a-b)
    oddArr.sort((a, b) => a-b)

    if(K == 1){
        let ans = [...evenArr, ...oddArr]
        console.log(ans.join(" "))
    }else{
        
        let ans = [...oddArr, ...evenArr]
        console.log(ans.join(" "))
    }
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
    let K = +input[line];
    line++;

    sep(N, arr, K)


   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
6
1 3 5 2 7 4
1
6 
1 3 5 2 7 4
2`);
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