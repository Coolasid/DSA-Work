function optCurve(a, b, c, K, curr){

    // console.log(a, b, c, K);


    if(( a * ( curr ** 2)) + ( b * curr) + c >= K){
        return curr;
    }

    return optCurve(a , b, c, K, curr+1);

}




function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];

   for(var i = 0; i < testCases; i++){

        var arr = input[1].trim().split(" ").map(Number);

        var a = +arr[0];
        var b = +arr[1];
        var c = +arr[2];
        var K = +arr[3];

        var curr = 1;

        console.log(  optCurve(a, b, c, K, curr));

    }

   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`1
3 2 4 15`);
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