var count = 0;


function validSudoku(B, row, col){

    //base case
    if(row == 9){
        count++;
        for (var i = 0; i < 9; i++) {
            var str = "";
            for (var j = 0; j < 9; j++) {
                str += B[i][j] + ' ';
            }

            console.log(str);
        }

    //    console.log(B)
        return;
    }

    var nextRow = 0;
    var nextCol = 0;

    if( col == 8 ){
        nextRow = row + 1;
        nextCol = 0;
    }else{
        nextRow = row;
        nextCol = col + 1;
    }

    if( B[row][col] != 0){
        validSudoku(B, nextRow, nextCol);
    }else{
        for(var i = 1; i <= 9; i++){
            if(check(B,row,col,i) == true){
                B[row][col] = i;
                validSudoku(B, nextRow, nextCol);
                B[row][col] = 0;

            }
        }
    }


}


function check(B,row,col,value){


    //horizontal check=>

    for(var j = 0; j < 9; j++){
        if( B[row][j] == value){
            return false;
        }
    }

    //vertical check=>

    for(var k = 0; k < 9; k++){
        if( B[k][col] == value){
            return false;
        }
    }

    //Box check=>

    var x = Math.floor(row/3) * 3;
    var y = Math.floor(col/3) * 3;

    for(var l = 0; l < 3; l++){
        for(var m = 0; m < 3; m++){
            if( B[l + x][m + y] == value){
                return false
            }
        }
    }
    return true;
}




function runProgram(input) {
   var input = input.trim().split("\n");

    var B = [];
    var row = 0;
    var col = 0;

   for(var i = 0; i < 9; i++){
       var arr = input[i].trim().split(" ").map(Number);
       
       B.push(arr);
   }
//    console.log(B);

  validSudoku(B, row, col);

  if(count == 0){
      
      console.log("-1")
  }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`0 0 0 0 0 0 0 0 0 
0 0 5 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 
0 5 0 0 0 0 0 0 0 
0 0 0 0 9 0 0 5 0 
0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 5 0 0 
5 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0`);
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