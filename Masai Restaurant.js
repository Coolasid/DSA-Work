function masaiRes(arr1, arr2){
    // console.log(arr1,arr2);
    var queue = [];

    for(var i = 0; i < arr1.length; i++){
       
       
        
        if (arr1[i] == 2) {
            queue.push(arr2[i]);
        }

        
        if (arr1[i] == 1) {
            if(queue.length == 0){
                console.log("No Food");
            }else{
                console.log(queue[queue.length-1]);
                queue.pop()
            }
            
        }
    }

}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testcases = +input[0];

   var line = 1;
   var arr1 = [];
   var arr2 = [];

   for(var i = 0; i < testcases; i++){
       var arr = input[line].trim().split(" ").map(Number);
        line++;
       arr1.push(arr[0]);
       arr2.push(arr[1]);

      
   }
    masaiRes(arr1, arr2);
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`6
1
2 5
2 7
2 9
1
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