function bubbleSort(N, arr){

    for(let i = 0; i< N -1; i++){
        for(let j = 0; j < N-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            } 
        }
    }

    return arr.join(" ");
}

function runProgram(input) {
   var input = input.trim().split("\n")
    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    console.log(bubbleSort(N, arr));
   
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