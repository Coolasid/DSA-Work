function similarT(str1, str2, n, m){

    // console.log(str1, str2, n, m);

    if( n == 0 || m == 0){
        return 0;
    }

    if( str1[n-1] == str2[m-1]){
        return (1 + similarT(str1, str2, n-1, m-1));
    }else{
        return ( Math.max(similarT(str1, str2, n-1, m), similarT(str1, str2, n, m-1)));
    }



}

function runProgram(input) {
   var input = input.trim().split('\n');

   var str1 = input[0].trim().split("");
   var str2 = input[1].trim().split("");

   var n = str1.length;
   var m = str2.length;

  console.log(  similarT(str1, str2, n, m));
   
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