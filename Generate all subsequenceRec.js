

function allSub(N, str, curr,s,newStr){
    // return N
    

    if(curr > str.length-1){
        return;
    }

    for(var i = s; i <= curr; i++){
        newStr += str[i];
        console.log(newStr);
    }
    

    

    return allSub(N,str,curr+1,s+1,newStr);
}



function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var str = input[1].trim()
   var curr = 0;
   var s = 0 ;
    console.log(allSub(N,str,curr,s));
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4
abcd`);
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