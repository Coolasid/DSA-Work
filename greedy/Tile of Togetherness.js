function tileOfT(R, H, arr){
arr.push(H);
  for(var i = 0; i< arr.length; i++){

      if( arr[i] == R){
      return R;

      }
    }

    if( R > H){
      return -1;
    }
    
    // console.log(arr);

    
    
    let toS = R.toString();

    let toS1 = H.toString();
 
    let s = 0;

    let s1 = 0;

    for(var i = 0; i < toS.length; i++){

        s += (+toS[i]);

    }

    for(var i = 0; i < toS1.length; i++){

      s1 += (+toS1[i]);

    } 

    
      return  tileOfT( (R + s), (H + s1), arr);
    
    
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
    
    var arr = []

   console.log( tileOfT(R, H, arr));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`45069 89672`);
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