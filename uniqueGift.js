function uniqueGift(arr){
  // console.log(arr);

  var stack = [];
  var ans = [];

  for (var i = 0; i < arr.length; i++) {
    
    while(stack.length>0 && stack[stack.length-1] == arr[i]){
      ans[i] = "#";
      stack.pop();
    }
    if(stack.length == 0){
      ans[i] = arr[i];
    }else{
      
    }
   

  }
  return ans;
}

function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];
  var line = 1;

   for( var i = 0; i < testCases; i++){
    var arr = input[line].trim().split("");

    line++;
     
   }
  console.log(uniqueGift(arr));
    
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
abadbc
abcabc`);
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