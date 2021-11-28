function marathon(enengy, distance){
    // console.log(enengy,distance);

    var sumEArr = [];
    var sumDArr = [];
    var sum = 0;

  for (var i = enengy.length-1; i >= 0 ; i--){
      sum = sum + enengy[i]
      sumEArr.push( sum );
    }
    sum = 0;
  for (var i = distance.length-1; i >= 0; i--) {
    sum = sum + distance[i]
    sumDArr.push(sum);
  }
  //   console.log(sumEArr);
  // console.log(sumDArr);
var count = 0;
  for(var i = 0; i < sumEArr.length; i++){
    if(enengy[i] > distance[i] && sumEArr[i] > sumDArr[i]){
      
      console.log(i);
      break;
    }else{
      // 
      count++;

    }
  }

  if(count == sumDArr.length){
    console.log("No starting points");
  }
    
    
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];
   var line = 1;
   var energy = [];
   var distance = [];

   for(var i = 0; i < testCases; i++){
       var arr = input[line].trim().split(" ").map(Number);
line++;
       energy.push(arr[0]);
       distance.push(arr[1]);

   }

   marathon(energy,distance);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
1 5
10 3
3 4`);
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