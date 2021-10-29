var count = 0;
function isOdd(arr1) {
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i];
    }
    if (sum % 2 != 0 ) {
        count++;
        // console.log(sum);
    }
}

function oddSub(N, arr, out, cur){

    // console.log(N,arr)
    
    if(out.length> 0){
        isOdd(out);
    }
        
        
    
    if( cur == arr.length){
        return;
    }
    for( var i = cur; i< arr.length; i++){
        out.push(arr[i])
        oddSub(N,arr, out, i+1)
        out.pop();
    }
    // console.log(count);
}




function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
    var cur = 0;
    var out = [];
    oddSub(N, arr, out, cur);
    console.log(count);
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