function gPremu(arr,cur){
    // console.log(arr);

    if( cur == arr.length){
        console.log(arr);
        return;
    }

    for( i = cur; i< arr.length; i++){
        var flag = i;
        i = cur;
        cur = flag;
        gPremu(arr,cur+1);
        var temp = i;
        i = cur;
        cur = temp;
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var arr = input[1].trim().split(" ").map(Number);
   var cur = 0;
        gPremu(arr,cur);
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
1 2 3`);
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