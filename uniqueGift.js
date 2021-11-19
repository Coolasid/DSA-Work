function uniqueGift(arr){
  // console.log(arr);

  var unique = [];
  var ans = [];
  var front = 0;
  var rear = 0;
  for (var i = 0; i < arr.length; i++) {
    unique.push(arr[i]);

    if(arr[i] == ans[i])
   
   

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