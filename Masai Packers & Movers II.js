
var arrW = [];
function masaiways2(arr, N, K,curr,){
  if (K < 0) {
    return;
  }
    if(K == 0){
       
       arrW.push(curr)
       curr = 0;
        return;
    }

    
    for(var i = 0; i < arr.length; i++){
        masaiways2(arr,N, K - arr[i],curr+1)
    }
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var arr1 = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);

    var K = +arr1[0];
    var N = +arr1[1];

    masaiways2(arr, N, K,0);
     arrW.sort((a,b) => (a-b))

    if(arrW.length > 0){
      console.log(arrW[0], arrW[arrW.length-1]);
    }else{
      console.log("-1")
    }
    



}
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`39 3
8 10 2`);
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