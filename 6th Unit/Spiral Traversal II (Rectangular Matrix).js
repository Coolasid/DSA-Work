function spiralTrav(N, M, mat){
    // console.log(N, M, mat);

    let top = 0;
    let bottom= N-1;
    let left = 0;
    let right = M-1;

    let count = 0;
    let ans = [];

    while(count < N*M){

        for( let i = bottom; i >= top && count < N*M ; i--){
            ans.push(mat[i][left])
            count++;
        }
        left++;

        for( let i = left; i<= right && count < N*M; i++){
            ans.push(mat[top][i]);
            count++;
        }
        top++;

        for( let i = top; i <= bottom && count < N*M; i++){
            ans.push(mat[i][right]);
            count++;
        }
        right--;

        for(let i = right; i >= left && count < N*M; i--){
            ans.push(mat[bottom][i]);
            count++;
        }
        bottom--;



    }

    console.log(ans.join(" "));

}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0]

   let line = 1;

   for(let i = 0; i < testCases; i++){
        let [N, M] = input[line].trim().split(" ").map(Number);
        line++;

        let mat = [];

        for(let j = 0; j < N; j++){

            let newRow = input[line].trim().split(" ").map(Number);
            line++;
            mat.push(newRow);
        }

        spiralTrav(N, M, mat);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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