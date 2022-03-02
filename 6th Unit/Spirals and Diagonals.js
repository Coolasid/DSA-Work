function diagonalSum(N, arr){


    // console.log(N, arr);
    if(N == 1){
        return console.log(arr[0]);
    }

    let mat = new Array(N);

    for(let i = 0; i < N; i++){
        mat[i] = new Array(N).fill(0);

    }

    // console.log(mat);

    let left = 0
    let right = N-1;
    let top = 0;
    let bottom = N-1;
    let count = 0;


    while( count < N*N ){

        for(let i = left; i <= right && count < N*N; i++){
            mat[top][i] = arr[count];
            count++;
        }
        top++;

        for(let i = top ; i <= bottom && count < N*N; i++){
            mat[i][right] = arr[count];
            count++;
        }
        right--;

        for(let i = right; i >= left && count < N*N; i--){
            mat[bottom][i] = arr[count]
            count++;
        }
        bottom--;

        for(let i = bottom; i >= top && count < N*N; i--){
            mat[i][left] = arr[count];
            count++;
        }
        left++;

    }


    // console.log(mat);
    let d1 = [];
    let d2 = [];

    for(let i = 0; i < N; i++){
        d1.push(mat[i][i]);
        d2.push(mat[i][N-i-1]);
    }
    
    // console.log(d1, d2);

//   console.log(sum1 + sum2);

    if(N %2 == 0){
        

  let sum1 =  d1.reduce((a, b) => a+b)
  let sum2 =  d2.reduce((a, b) => a+b)
        console.log(sum1 + sum2);
    }else{
        let r = Math.floor(N/2)
        d2[r] = 0;
        

  let sum1 =  d1.reduce((a, b) => a+b)
  let sum2 =  d2.reduce((a, b) => a+b)
        console.log(sum1 + sum2);
    }


}

function runProgram(input) {
   var input = input.trim().split("\n");
   
   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){

    let N = +input[line]
    line++;

    let arr = input[line].trim().split(" ").map(Number);
    line++;

    diagonalSum(N, arr);
    

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
1
1
2
1 2 3 4
3
1 2 3 4 5 6 7 8 9`);
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