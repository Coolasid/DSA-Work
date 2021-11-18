function stackUsingQ(arr1, arr2){
    // console.log(arr1,arr2);

    var stack = [];

    for(var i = 0; i < arr1.length; i++){

        if(arr1[i] == 0){
            stack.push(arr2[i]);
        }
        if(arr1[i] == 1){
            console.log(stack[stack.length-1])
        }
        if(arr1[i] == 2){
            stack.pop();
        }
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
    var arr1 = [];
    var arr2 = [];
   var line = 1;

   for(var i = 0; i < testCases; i++){
       var arr = input[line].trim().split(" ").map(Number);

       arr1.push(arr[0]);
       arr2.push(arr[1]);
        line++;
   }

   stackUsingQ(arr1,arr2);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`6
0 1
0 2
0 3
1
2
1`);
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