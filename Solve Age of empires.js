function ageEmp(N, arr){
    // console.log(N,arr);

    var ans =[];

    var sortArr = arr.sort((a,b) => {
        return a-b;
    })

    for(var i = 0; i < sortArr.length; i = i + 2){
        if(sortArr[i] <= sortArr[i+1]){
            ans.push(sortArr[i]);
        }
    }
// console.log(ans);
    var out = 0;

    for(var i = 0; i < ans.length; i++){
        out += ans[i];
    }

    console.log(out);
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];

   var arr = input[1].trim().split(" ").map(Number);

   ageEmp(N,arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
1 3 1 2`);
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