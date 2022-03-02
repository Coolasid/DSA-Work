function spiralTrav(N, mat){

    // console.log(N, mat);

    let top = 0;
    let bottom= N-1;
    let left = 0;
    let right = N-1;

    let count = 0;
    let ans = [];


    while(count < N*N){

      for( let i = left; i <= right; i++){
        ans.push(mat[bottom][i]);
        count++;
      }
      bottom--;

      for( let i = bottom; i >= top; i--){
        ans.push(mat[i][right])
        count++;
      }
      right--;

      for(let i = right; i >= left; i--){
        ans.push(mat[top][i]);
        count++;
      }
      top++;

      for(let i = top; i<= bottom; i++){
        ans.push(mat[i][left]);
        count++;
      }
      left++;


    }

    console.log(ans.join(" "));
    
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){

        let N = +input[line];
        line++;
        let mat = []
        for(let j = 0; j < N; j++){
            let eachRow = input[line].trim().split(" ").map(Number);
            line++;
            mat.push(eachRow);

        }

        spiralTrav(N, mat)
        
   }


   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
3 
1 2 3
4 5 6
7 8 9`);
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