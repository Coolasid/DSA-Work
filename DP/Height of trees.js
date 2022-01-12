function    heightT(N, arr){


    // console.log(N, arr)j
    let arr1 = [];
    let arr2 = [];
    

    // console.log(dArr);c


    let max1 = -Infinity;
    let max2 = -Infinity;

    for(let i = 0; i < N; i++){

        if( arr[i] > max1){
            arr1.push(arr[i]);
            max1 = arr[i];
            
        }

    }

    // console.log(arr1);

    console.log(arr1.length);
    

}

function runProgram(input) {
   var input = input.trim().split('\n');

   var N = +input[0];

   var arr = input[1].trim().split(" ").map(Number);

   heightT(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`9
10 22 9 33 21 50 41 60 80`);
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