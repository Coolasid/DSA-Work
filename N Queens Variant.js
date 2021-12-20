
var count = 0;
function nQueens(B, currRow, N){

    if( currRow == N){
        count++;
        // console.log(B);

        // to get Board=>

        for(var i = 0; i < N; i++){
            var print = "";
            for(var j = 0; j < N; j++){
                print += B[i][j] + " ";
            }
            console.log(print);
            
        }
        console.log("----------")
        
        
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

function isQueenSafe(B, row, col, N){
    var countq = 0;

    //for vertical=>
    for(var j = 0; j < N; j++ ){
        if( B[j][col] == 1){
            countq++;
        }
    }

    if (countq >= 1) {
        return false;
    }
    
    //for diagonal left=>
    var j = col - 1;
    for(var k = row-1; k >= 0; k--){
        
        while(j >= 0){
            if( B[k][j] == 1){
                return false
            }
            break;
        }

        j--;
        
    }

    //for diagonal right=>
    var m = col + 1;

    for(var l = row-1; l >= 0; l--){
        
        while( m < N){
            if(B[l][m]== 1){
                return false
            }
            break
        }
        m++;
    }

    return true;

}


function runProgram(input) {
   var N = +input;
   var currRow = 0;
    
//    console.log(N);

    // var B = [N][N];
  var B =   Array(N).fill(0).map(() => Array(N).fill(0))
    // console.log(B)

    nQueens(B,currRow,N)
    console.log(count);
    
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`6`);
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