
function runProgram(input) {
    
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].split(" ").map(Number); 

    let ans = [];
    for(var i = 0; i < N; i++){

      ans.push(i)

    }
    
    for(var i = 0; i < N-1;i++){

      for(var j = 0; j < N -i -1; j++){

        if( arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;

          let flag = ans[j];
          ans[j] = ans[j+1];
          ans[j+1] = flag;
        }

      }

    }

    console.log(ans.join(" "));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
4 5 3 7 1`);
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