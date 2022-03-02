function sortingArr(N, arr){

    // console.log(N, arr);

    let oddArr = [];
    let evenArr = [];

    for(let i = 0; i < N; i++){
        if(arr[i] % 2 == 0){
            evenArr.push(arr[i])
        }else{
            oddArr.push(arr[i])
        }
    }

    oddArr.sort((a, b)=> a-b)
    evenArr.sort((a, b)=> a-b)

    let ansArr = [...oddArr, ...evenArr]

    return ansArr.join(" ")
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number);

  console.log(sortingArr(N, arr)); 
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
2 5 1 4 2 `);
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