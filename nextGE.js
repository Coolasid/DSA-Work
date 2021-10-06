function nextGE(N, arr){
    var stack = [];
    var ans = [];
    var last = stack.length-1;

    for( var i = N-1; i >= 0; i--){
        while( stack.length && arr[i] >= stack[last]){
            stack.pop();
            last--;
        } if( stack.length){
            ans.push(stack[last])
        } else{
            ans.push(-1);
        }
        top++;
        stack[top] = arr[i]
    }
    var out = "";
    for( var i = ans.length-1; i>= 0; i--){
        out = out + ans[i] + " ";

    }
    console.log(out);
    
}

function runProgram(input) {
    var input = input.trim().split("\n");

    var testCases = +input[0];

    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
       
        nextGE(N, arr);
    
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`1
4
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