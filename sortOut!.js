function sortOut(N, arr){
    var arr1 = [];
    for( var i = 0; i< arr.length; i++){
        arr1.push(arr[i]);
    }
    // console.log(arr1);
    for( var i = 0; i< N-1; i++){
        for( var j = 0; j < N-i-1; j++){
            if( arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

    }
    // console.log(arr)
      var out = "";
    for( var i = 0 ; i < arr.length; i++){
        for( var j = 0; j < arr1.length; j++){
        if(arr[i] == arr1[j]){
            out = out + j + " ";
        }
      }
      }
      console.log(out);
}



function runProgram(input) {
    
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].split(" ").map(Number); 

        sortOut(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
4 5 3 7 1`);
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