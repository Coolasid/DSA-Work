var count = 0;
var arr1 = [];
function masaiways2(arr, N, K){
    
    if(K == 0){
        count++;
       
        return;
    }

    if(K < 0){
        return;
    }
    for(var i = 0; i < arr.length; i++){
        masaiways2(arr,N, K - arr[i])
    }
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var arr1 = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);

    var K = +arr1[0];
    var N = +arr1[1];

    masaiways2(arr, N, K);
    console.log(count)
console.log(arr1);


}
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3 3
1 2 3`);
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