function selectionSort(N, arr){

    // console.log(N , arr);

    for(let i = 0; i < N-1; i++){
        let min = i;
        for(let j = i+1; j < N; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }

    return arr.join(" ")
}

function runProgram(input) {
   var input = input.trim().split("\n");
   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
    
    console.log(selectionSort(N, arr));
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`14
4 5 3 7 1 5 86 25 2 4 57 5 3 0`);
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