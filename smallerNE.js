function smallerNE(N, arr){
   var stack = [];
   var ans = [];

   for( var i = 0; i < N; i++){
       if( stack.length > 0 && stack[stack.length-1] >= arr[i] ){
         stack.pop();
       }
       if(stack.length == 0){
         ans[i] = -1;
      } else{
        ans[i] = stack[stack.length-1]
      }
      stack.push(arr[i])

   }
   return ans;
}



function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var arr = input[1].split(" ").map(Number);

  console.log( smallerNE(N, arr));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4
1 3 2 4`);
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