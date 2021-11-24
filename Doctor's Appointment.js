function doctorApp(N, arr1, arr2){
    // console.log(arr1,arr2);

    var queue = [];
    var count = 0;

    for (var i = 0; i < Infinity; i++) {
        if (arr2[0] != arr1[0]) {
            queue.push(arr2[0])
            arr2.shift();
            count++;
            
        }
        if (arr2[0] == arr1[0]) {
            arr1.shift()
            arr2.shift()
            
        }
        if (arr2.length == 0) {
            break;
        }



    }
    console.log(count);
}

function runProgram(input) {
   var input = input.trim().split("\n")
   
   var N = +input[0];

   var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);

    doctorApp(N,arr1,arr2);
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4
1 2 3 4
4 2 3 1`);
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