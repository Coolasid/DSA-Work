
var sum = 0;
function sumRec(N, arr, M){
    // return N;

    var diff = 0;
    if(M  == N-1){
        // console.log(diff); 
        return sum;
    }
    diff = Math.abs(arr[M] - arr[M + 1]);
    sum = sum + diff;
    
    
   return sumRec(N,arr,M+1);
   
}


function runProgram(input) {
   var input = input.trim().split("\n");
    var M = 0;
   var testCases = +input[0];
   var line = 1;
    
   for(var i = 0; i < testCases; i++){
       
       var N = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;

      console.log( sumRec(N, arr,M));

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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