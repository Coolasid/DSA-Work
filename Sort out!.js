function sO(arr, low, high, mid){



}



function sortOut(arr,low, high){

    if( low >= high ){
      return;
    }

    var mid = Math.floor((low/high)/2);

    sortOut(arr, low, mid);
    sortOut(arr, mid+1, high);
    sO(arr, low, high, mid);
  
 

}



function runProgram(input) {
    
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].split(" ").map(Number); 
    var low = 0;
    var high = N-1;

        sortOut(arr,low,high);
   
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