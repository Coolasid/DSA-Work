function redString(str){
    // console.log(str);
    var out = ""
    for( var i = 0; i < str.length; i++){
        if(str[i] != str[i+1] ){
           
            out = out + str[i];
            
        }
    }
    console.log(out);
}


function runProgram(input) {
   var str = input.trim()
    
        redString(str);
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`aaabccddd`);
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