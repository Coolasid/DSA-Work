
function runProgram(input) {
   var input = input.trim().split("\n");
   var arr1 = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
  let count = 0;
    var K = +arr1[0];
    var N = +arr1[1];
 
        masaiways(arr, N , K , 0);
  console.log(count);
        function masaiways(arr, N, way){
          if(K<way){
            return;
          }
          if(K == way){
            count++;
            return;
          }

          for( let i = 0; i < N; i++){
            masaiways(arr,N,way+arr[i]);
          }
        }
        
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3 3
1 2 3`);
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