function ProdArr(N, arr){
    // console.log(N, arr);

    let allEleProd = arr.reduce((a, b)=> a*b);

    // console.log(allEleProd);
    let ans = ""
    for(let i = 0; i < N; i++){
        let div = allEleProd/arr[i];
        ans += div + " "
    }

    console.log(ans);
}

function runProgram(input) {
   var input = input.trim().split("\n");

    let testCases = +input[0];

    let line =1;

    for(let i = 0; i < testCases; i++){
        let N = +input[line];
        line++;
        let arr = input[line].trim().split(" ").map(Number);
        line++;
        
        ProdArr(N, arr)
    }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
5
1 2 3 4 5
3
3 2 7`);
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