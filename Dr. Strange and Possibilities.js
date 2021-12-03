function genSub(str, newStr, newCurr){
    // console.log(str,newCurr,newStr);

    if(newStr.length >= 0){
        console.log(newStr.join(" "));
    }
    if(newCurr > str.length){
        return;
    }

    for(var i = newCurr; i < str.length; i++){
            newStr.push(str[i]);

        genSub(str,newStr,i+1);

            newStr.pop();
    }
}


function runProgram(input) {
   var N = +input.trim()
   var curr = 1;
   var arr = [];
   function split(N,curr){
        if(curr > N ){
            return arr;
        }

        arr.push(curr);

        return split(N,curr+1);
   }

   var str = split(N,curr)
    // console.log(str);

    var newCurr = 0;
    var newStr = [];

        genSub(str,newStr,newCurr);


  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`10`);
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