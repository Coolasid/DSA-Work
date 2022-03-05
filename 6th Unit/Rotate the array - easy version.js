function rotateArr(N, arr, K){

    // console.log(N, arr, K);

    K = K%N;

    swap(arr, 0, N-1)
    
    swap(arr, 0, K-1 );

    swap(arr, K, N-1);

    console.log(arr.join(" "));


}


function swap(arr, left, right){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = input[0].trim().split(" ");

   let line = 1;

   for(let i = 0; i < testCases; i++){

        let [N, K] = input[line].trim().split(" ").map(Number)
        line++;
        let arr = input[line].trim().split(" ").map(Number)
        line++;

        rotateArr(N, arr, K)
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);
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