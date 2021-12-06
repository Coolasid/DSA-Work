function mrRobotE(N, str, newStr){
    // console.log(N,str);


    if(N % 2 == 1){
    var midPart = str[Math.floor(str.length/2)]
    }else{
      var midPart = str[Math.floor(str.length / 2)-1]
    }
    // console.log(midPart);
    newStr += midPart;
  for (var i = 0; i < Math.floor(str.length / 2) ; i++){
    newStr += str[i];
  }

  for (var i = Math.floor(str.length / 2) + 1; i < str.length; i++){
    newStr += str[i];
  }

  console.log(newStr);

}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
   var line = 1;

   for(var i = 0; i < testCases; i++){
     var newStr = "";
       var N = +input[line];
       line++;
       var str = input[line].trim()
       line++;
       mrRobotE(N,str,newStr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);
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