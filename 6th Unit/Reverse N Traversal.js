function  NTrav(mat, N){

    // console.log(mat, N);
    // console.log("sid");

    if(N == 1){
        return  console.log(mat[0].join(" "))
    }

    let ans = [];

    for(let i = 0; i < N; i++){
        ans.push(mat[i][0])
    }

    let left = 1;
    let bottom = N-2;
    

    while(left <= N-2 && bottom >= 1 ){
        ans.push(mat[bottom][left])
        bottom--;
        left++;
    }

    for(let i = 0; i< N; i++){
        ans.push(mat[i][N-1])
    }



    console.log(ans.join(" "));
}

function runProgram(input) {
   var input = input.trim().split("\n");
   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){
        let mat = [];

        let N = +input[line];
        line++;

        for(let j = 0; j < N; j++){
            let eachRow = input[line].trim().split(" ").map(Number);
            line++;
            mat.push(eachRow);
        }

        // console.log(mat);

        NTrav(mat, N)
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
3
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
1
5`);
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