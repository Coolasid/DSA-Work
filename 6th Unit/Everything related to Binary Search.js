function bS(N, arr, K){

    // console.log(N, arr, K);

    function upperBound(arr, N, K){

        let low = 0;
        let high = N-1;

        while(low < high){
            let mid = Math.floor((low+high)/2);

            if(K < arr[mid]){
                high = mid
            }else{
                low = mid + 1;
            }
        }
        return low;
    }

    function lowerBound(arr, N, K){

        let low = 0;
        let high = N -1;

        while(low < high){
            let mid = Math.floor((low+high)/2);

            if(K <= arr[mid]){
                high = mid
            }else{
                low = mid + 1;
            }
        }

        return low 
    }

    console.log(
      lowerBound(arr, N, K),
      upperBound(arr, N, K),
      upperBound(arr, N, K) - lowerBound(arr, N, K) +1
    );

}

function runProgram(input) {
   var input = input.trim().split('\n');

   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
   let K = +input[2]
    
   bS(N, arr, K)

  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
1 2 3 4 5
5`);
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