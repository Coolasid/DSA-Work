function xSubArr(N, K, X, arr){
  
var i = 0;
var count  = 0;
var arr1  = [];

for( var i = 0; i < X; i++){
  arr1.push(arr[i]);
}
  if(compare(arr1, K)){
    count++;
  }

  for(var i = X; i < N; i++){
    arr1.shift();
    arr1.push(arr[i]);
      if(compare(arr1, K)){
        count++;
      }
  }

  console.log(count);
  
}

function compare(input, K){

  var i =0 ;
  var count = 0;

  while(i < input.length){
     if( input[i] > K){
      return false;
      break;
    } else if( input[i] == K){
      count++;
      i++;
    } else if( input[i] < K){
      count++;
      i++;
    }
  }

  if(count == input.length){
    return true;
  }
}
// console.log(compare("1113", 2));


function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0];

    var line = 1;
    for( var i =0 ; i< testCases; i++){
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        
        var N = +arr1[0];
        var K = +arr1[1];
        var X = +arr1[2];
  xSubArr(N, K, X, arr);
     }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
12 2 6
2 1 2 1 2 2 2 1 1 2 1 1
`);
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