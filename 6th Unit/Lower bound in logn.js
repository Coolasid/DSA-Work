function lowerBound(N, K, arr){

    // console.log(N, K, arr)

    let low = 0;
    let high = N-1;
    let ans = -1;

    while(low <= high ){

        let mid = low + Math.floor((high-low)/2)

        if(K == arr[mid]){
            ans = mid;
            high = mid - 1;
        }
        if( K < arr[mid]){
            high = mid-1;
        }else if(K > arr[mid]){
            low = mid + 1;
        }

    }

    return ans

}

function runProgram(input) {
   var input = input.trim().split("\n");
   let [N, K] = input[0].trim().split(" ").map(Number);
   let arr = input[1].trim().split(' ').map(Number);

   console.log(lowerBound(N, K, arr));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`7 1
1 1 4 5 6 7 8`);
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