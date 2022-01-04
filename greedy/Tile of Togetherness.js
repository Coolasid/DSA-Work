function tileOfT(R, H){
    let toS = R.toString();

    // console.log(toS);
    let s = 0;

    for(var i = 0; i < toS.length; i++){

        s += (+toS[i]);

    }
    // console.log(s)

    if( (R + s) < H){
      return  tileOfT( (R + s), H);
    }
     if((R + s) == H){
        return (R+s);
    }else{
        return -1;
    }
    

}


function runProgram(input) {
   var [A, B] = input.trim().split(" ").map(Number);
    let R,H
//    console.log(A, B);

    if( A < B){
         R = A;
        H = B
    }else{
        R = B;
        H = A;
    }

   console.log( tileOfT(R, H));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`32 47`);
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