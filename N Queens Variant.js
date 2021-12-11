

function nQueens(B, currRow, N){

    if( currRow == N){
        count++;
        return;
    }
    for(var i = 0; i < N; i++){
        if(isQueenSafe( B, currRow, i, N) == true){
            B[currRow][i] = 1;
            nQueens(B, currRow + 1, N)
            B[currRow][i] = 0;
        }
    }

}

function isQueenSafe(B, currRow, i, N){
    var countq = 0;

    //for vertical=>
    for(var j = 0; j < N; j++ ){
        if( B[j][i] == 1){
            countq++;
        }
    }

    //for diagonal left=>
    for(var k = currRow; k >= 0; k--){
        for(var l = k; l >= 0; l--){
            if( B[k][l] == 1){
                countq++;
                break;
            }
        }
    }

    //for diagonal right=>
    for(var m = currRow; m >= 0; m--){
        for(var o= m; o < N; o++){
            if( B[m][o] == 1){
                countq++;
                break;
            }
        }
    }

    if(countq > 1){
        return false;
    }else{
        true;
    }

}


function runProgram(input) {
   var N = +input;
   var currRow = 0;
    var count = 0;
//    console.log(N);

    // var B = [N][N];
  var B =   Array(N).fill(0).map(() => Array(N).fill(0))
    // console.log(B)

    nQueens(B,currRow,N)
    console.log(count);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4`);
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