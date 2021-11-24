


function NGElement(N, arr){

    // console.log(N, arr);

    var count = 0;
    var leftStack = [];
    var rightStack = [];
    var leftAns = [];
    var rightAns = [];
    var leftIS = [];
    var rightIS = [];

  for (let i = 0; i < N; i++) {
    while (leftStack.length > 0 && arr[i] >= leftStack[leftStack.length - 1]) {
      leftStack.pop();

    } if (leftStack.length == 0) {
      leftAns[i] = -1;
      leftIS[i] = -1;
    } else {
      leftAns[i] = leftStack[leftStack.length - 1]
      leftIS[i] = i-1;
    }

    leftStack.push(arr[i])

  }
  console.log(leftAns);
  console.log(leftIS);



  for (let i = N-1; i >= 0; i--) {
    while (rightStack.length > 0 && arr[i] >= rightStack[rightStack.length - 1]) {
      rightStack.pop();

    } if (rightStack.length == 0) {
      rightAns[i] = -1;
      rightIS[i] = -1;
    } else {
      rightAns[i] = rightStack[rightStack.length - 1]
      rightIS[i] = i; 
    }

    rightStack.push(arr[i])

  }
  console.log(rightAns);
  // console.log(rightIS);

   for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < rightAns.length; j++){
      if (rightAns[j] == arr[i] ){
        rightIS.push(i);
       }
      else if(rightAns[j] === -1){
        rightIS.push("-1");
      }
    }
  }
  console.log(rightIS);
}



function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);

   NGElement(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`7
6 5 7 8 4 3 9`);
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