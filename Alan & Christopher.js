function alanChri(arr){
    // console.log(arr);
    var stack = [];


    for(var i = 0; i < arr.length; i++ ){
        if(arr[i] == "#" && stack.length > 0){
            stack.pop();
        }

        if(arr[i] != "#"){
            stack.push(arr[i]);
        }
        
    }

    console.log(stack.join(""));
}


function runProgram(input) {
   var input = input.trim().split("\n")

   var testCases = +input[0];
var line=1;
   for(var i = 0; i < testCases; i++){
        var arr = input[line].trim().split("");
line++
        alanChri(arr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
ab#d
a#bc`);
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