function GPRecu(arr){
    // console.log(arr);

    var sum = 0;
    var r = 0;
    function sumGP(i){
        if(i == arr.length){
            return sum;
        }
        r = (arr[1]/arr[0]);

        sum = (arr[0] / (1-r));
        console.log(sum);
    }

    
    // console.log(sumGP(0));
}


function runProgram(input) {
   var arr = input.trim().split(" ").map(Number);

    GPRecu(arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3 5`);
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