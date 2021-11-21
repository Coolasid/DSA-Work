function uniqueGift(arr){
  // console.log(arr);

  var queue = [];
  var obj = {}
var ans = [];

   for(var i = 0; i < arr.length; i++){

     if (obj[arr[i]] === undefined) {
       obj[arr[i]] = 1;
       queue.push(arr[i]);
 
     } else {
       obj[arr[i]]++;
       
     }
      for (key in obj) {
       if (key.value == 1) {
         ans.push(queue[0])
       } else {
         queue.shift();
       }
     }
    
     
   }
  
   console.log(ans)
  

  
}

function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];
  var line = 1;

   for( var i = 0; i < testCases; i++){
    var arr = input[line].trim();

    line++;
     
    uniqueGift(arr);
   }
 
    
   
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