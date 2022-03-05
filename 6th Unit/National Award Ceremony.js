function nationalAward(N, arr){
    // console.log(N, arr);

    let low = 0, high = N -1, mid = 0;

    while(mid <= high){
        switch(arr[mid]){
            case 0:{
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                low++;
                mid++;
                break;
            }case 1:{
                mid++;
                break;
            }case 2: {
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
                break
            }

        }
    }

    console.log(arr.join(" "));
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){
        let N = +input[line]
        line++;
        let arr = input[line].trim().split(" ").map(Number);
        line++;

        nationalAward(N, arr)
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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