function pairLessK(N, K, arr){
    
    arr.sort();
    var first = 0;
    var second = N-1;
    var count = 0;
    var arr1 = [];

    while(first< N && second>= 0 ){
        var sum = arr[first] + arr[second];
        if( sum == K){
            
            first++;
            second--;
            arr1.push(sum);
        }else if(sum < K){
          first++;
          
          arr1.push(sum);
          break;
        }else if(sum > K){
          second--;
          arr1.push(sum);
        }
    }
  //  console.log(arr1);

  for(var i = 0; i < arr1.length; i++){
    if(arr1[i] < K){
      console.log(arr1[i])
      break;
    }else{
      count++;
    }
  }

  if(count>0){
    console.log("-1");
  }
  
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