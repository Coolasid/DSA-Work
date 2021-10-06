function classicPrb(arr){
    // console.log(arr);
    var count = 0;
    var right = arr.length-1;
    var left = 0;
    
    while(left < right){
        if(arr[left] == arr[right]){
            count++;
        }

        left++;
        right--;
    }
    // console.log(count);
    if(count == Math.floor(arr.length/2)){
        console.log("balanced");

    } else{
        console.log("not balanced");
    }
}



function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];

   var line = 1;

   for( var i =0 ; i < testCases; i++){
       var arr = input[line].trim().split("");
       line++;

        classicPrb(arr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
{([])}
()
([]
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