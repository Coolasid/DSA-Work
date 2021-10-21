function gSub(str, newStr, cur){
    // console.log(N,str,newStr,cur);

    if( newStr.length > 0){
         newStr
         var out = "";
         for( var j = 0; j < newStr.length; j++){
            out += newStr[j];
         }
         console.log(out);
        
    }
    if(cur == str.length){
        return;
    }
    for(var i = cur; i< str.length; i++){
        newStr.push(str[i])
        gSub(str,newStr,i+1);
        newStr.pop();
    }

   
}






function runProgram(input) {
   var input = input.trim().split("\n");
   
   var str = input[1];
    var newStr = [];
    var cur = 0;
       gSub(str,newStr,cur);
   
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