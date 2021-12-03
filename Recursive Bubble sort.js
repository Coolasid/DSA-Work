function recBu(arr, curr){
    // console.log(arr,curr);

    if(curr > arr.length-1){
        return arr.join(" ");
    }

    for(var i = 0; i < arr.length - curr -1; i++){
        if(arr[i] > arr[i+1]){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return recBu(arr,curr+1);
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
    var curr = 0;
    console.log(recBu(arr,curr));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
3 5 0 9 8`);
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