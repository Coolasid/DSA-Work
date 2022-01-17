function    againOpt(S, arrW, arrV){

    // console.log(S, arrW, arrV);

    let obj = {};

    for(let i = 0; i < arrW.length; i++){

        obj[arrV[i]] = arrW[i];

    }

    // console.log(obj);
    let sum = 0;
    
    console.log(obj.length);
    

}

function runProgram(input) {
   var input = input.trim().split("\n");
   let testCases = +input[0];
   let line = 1;

   for(let i = 0; i < testCases;i++ ){


        let [S, N] = input[line].trim().split(" ").map(Number);

        line++;
        let arrW = [];
        let arrV = [];

        for(let i = 0; i < N; i++){

            let [W, V] = input[line].trim().split(" ").map(Number);
            arrW.push(W);
            arrV.push(V);
            line++;
            

        }
        againOpt(S, arrW, arrV);

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
4 5
1 8
2 4
3 0
2 5
2 3`);
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