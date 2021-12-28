function rotateArr(N, arr, K){

    let low = 0;
    let high = N -1;

    let ans = -1;

    while( low <= high ){

        let mid = Math.floor( low + ( high - low)/ 2);


        if( arr[mid] == K){

            return mid;

        }else if( arr[mid] > K){

            high = mid -1;
        }else{

            low = mid +1;
        }

    }

    return ans

}


function runProgram(input) {
   var input = input.trim().split("\n");

   var arr1 = input[0].trim().split(" ").map(Number);

   var arr = input[1].trim().split(" ").map(Number);

   var N = +arr1[0];
   var K = +arr1[1];

//    arr.sort();
    
  console.log(  rotateArr(N, arr, K));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5 1
3 4 5 1 2`);
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