function marathon(enengy, distance){
    console.log(enengy,distance);
var queue = [];


    
    
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];
   var line = 1;
   var energy = [];
   var distance = [];

   for(var i = 0; i < testCases; i++){
       var arr = input[line].trim().split(" ").map(Number);
line++;
       energy.push(arr[0]);
       distance.push(arr[1]);

   }

   marathon(energy,distance);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
1 5
10 3
3 4`);
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