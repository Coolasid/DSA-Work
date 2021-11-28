


var temp = 0;
var upStr;

function famousSum( newStr){
  // return newStr;
  if(newStr.length == 0){
    return 0;
  }
  if(newStr.length == 1){
    return newStr;
  }

 temp = 0;
  for(var i = 0; i < newStr.length; i++){
    temp += +newStr[i];
  }
  // return temp;
  upStr = temp.toString();
  
  // return upStr;
  

  return famousSum(upStr);
}




function runProgram(input) {
   var input = input.trim().split(" ");
   var str = input[0].trim();
   var N = +input[1];

  
  var P = famousSum(str);
  
  var P = (P * N).toString();
  
  var ans = famousSum(P);
  console.log(ans);
  
   
   
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`9875 4`);
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