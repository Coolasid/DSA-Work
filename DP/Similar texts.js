function    simText(N, M, arr1, arr2){

    // console.log(N, arr1, arr2);

    if(N == 0 || M == 0){
        return 0;
    }
    if( arr1[N-1] == arr2[M-1]){
        return (1+ simText(N-1, M-1, arr1, arr2));
    }else{
        return ( Math.max( simText(N-1, M, arr1, arr2), simText(N, M-1, arr1, arr2)))
    }


}


function runProgram(input) {
   var input = input.trim().split("\n");

   let arr1 = input[0].trim().split("");

   let arr2 = input[1].trim().split("");

   let N = arr1.length;

   let M = arr2.length;

 console.log( simText(N, M, arr1, arr2)); 

   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`AEDFHR
ABCDGH`);
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