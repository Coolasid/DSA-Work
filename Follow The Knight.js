
function knight(i, j,N,B){
    // return i;
    
    
     if(i < 1 || j < 1 || i > 10 || j > 10){
         return ;
     }
    if (N == 0 && B[i][j] == 1) {
       

        return;
    }
     
     
     if(N == 0){
         B[i][j] = 1;
     }
     else{

     

// 1st
    knight(i-2,j+1,N - 1,B);
    
// 2
    knight(i - 2, j - 1, N - 1,B);
    
//3
    knight(i + 2, j + 1, N - 1,B);
    
//4
    knight(i + 2, j - 1, N - 1,B);
   
// 5
    knight(i - 1, j - 2, N - 1,B);
    
// 6
    knight(i + 1, j - 2, N - 1,B);
    
// 7    
    knight(i - 1, j + 2, N - 1,B);
    
//  8   
    knight(i + 1, j + 2, N - 1,B);
     }
    return B;
    
}
 
// console.log(count);
 
 function runProgram(input) {
    var arr = input.trim().split(" ").map(Number);

    var i = arr[0];
    var j = arr[1];
    var N = arr[2];
    var B = [
        [0,0,0,0,0,0,0,0,0,0,0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  knight(i,j,N,B);

    var count = 0;
    for(var i = 0; i < 11;i++){
        for(var j = 0; j < 11; j++){
            if(B[i][j] == 1){
                count++;
            }
        }
    }
console.log(count);
   }
   if (process.env.USERNAME === "siddhesh") {
       runProgram(`1 1 2`);
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