function masaiM(N){

    // return N;
    
    if(Math.floor(N) == 0){
        return 1;
    }

    return masaiM(Math.floor(N/2)) + masaiM( Math.floor(N/3)) + masaiM( Math.floor(N/4));

}


function runProgram(input) {
   var input = input.trim().split('\n');

    var line = 0;
    // console.log(input.length);

    for(let i = 0; i < input.length; i++){

        let N = +input[line];

        line++;

        console.log(masaiM(N));


    }


   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`12
2`);
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