


function NGElement(N, arr){

    // console.log(N, arr);

    
    var leftStack = [];
    var rightStack = [];
    var leftAns = [];
    var rightAns = [];
    
   

  for (let i = 0; i < N; i++) {
    while (leftStack.length > 0 && arr[i] >= arr[leftStack[leftStack.length - 1]]) {
      leftStack.pop();

    } if (leftStack.length == 0) {
      leftAns.push(-1) ;
      
    } else {
      leftAns.push( leftStack[leftStack.length - 1]);
      
    }

    leftStack.push(i)

  }
  // console.log( leftAns);
  



  var arr1 = arr.reverse()
  // console.log(arr1)


  for (let i = 0; i < N; i++) {
    while (rightStack.length > 0 && arr1[i] >= arr[rightStack[rightStack.length - 1]]) {
      rightStack.pop();

    } if (rightStack.length == 0) {
      rightAns.push(-1);
     
    } else {
      rightAns.push(rightStack[rightStack.length - 1]);
      
    }

    rightStack.push(i)

  }
  // console.log(rightAns.reverse());

  var revRightAns1 = rightAns.reverse();
  var revRightAns = [];

  for (var i = 0; i < revRightAns1.length; i++){
    if(revRightAns1[i] != -1){
          revRightAns.push((N-1)-revRightAns1[i]);
    }else{
      revRightAns.push(-1);
    }
  }

  // console.log( revRightAns);

  var finalAns = [];
  arr.reverse();
  for(var i = 0; i < N; i++){
    if(leftAns[i] == -1 && revRightAns[i] == -1){
      finalAns.push(-1);
    }
    else if( leftAns[i] == -1){
      finalAns.push(arr[revRightAns[i]]);
    }
    else if( revRightAns[i] == -1){
      finalAns.push(arr[leftAns[i]]);
    }
    else if( leftAns[i] < revRightAns[i]){
      finalAns.push(arr[leftAns[i]]);
    }
    else if( revRightAns[i] < leftAns[i]){
      finalAns.push(arr[revRightAns[i]]);
    }
    else if (leftAns[i] == revRightAns[i] ){
      finalAns.push(arr[leftAns[i]]);
    }
  }

  console.log(finalAns.join(' '));
}



function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
   var line = 1;
   for(var i = 0; i < testCases; i++){
     var N = +input[line];

     line++;

     var arr = input[line].trim().split(" ").map(Number);
     line++;
     NGElement(N, arr);
   }
  

   
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
21
5 2 84 23 52 6 28 3 82 6 7 5 6 22 77 63 33 7 6 95 24`);
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