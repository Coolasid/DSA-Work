function pairLessK(N, K, arr){
    
    arr.sort();
    var first = 0;
    var second = 0;
    var count = 0;
   
    while(first< N && second< N && first >= 0 && second >= 0){
        var sum = arr[first] + arr[second];
        if( sum < K){
            count++;
            first++;
            second++;
        }else if( sum > K){
            first--;
        } else if( sum == K){
            first++;
            second--;
        }
    }
   console.log(count );
}



function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];

    var line = 1;
    for(var i =0 ; i < testCases ; i++){
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        var K = +input[line];
        line++;
        pairLessK(N, K, arr);
    }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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