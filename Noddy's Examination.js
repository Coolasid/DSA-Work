function    noddyE(N, X, arr){

    // console.log(N, X, arr);
    
    var count = 0;
    for(var i = 0; i < N; i++){

        if( arr[i] <= X){
            count++;
        }else{

            if( arr[i+1] <= X){
                count++;
            }else{
                count = 0;
            }

        }

    }

    console.log(count);

}

function runProgram(input) {
   var input = input.trim().split('\n');

   var [N, X] = input[0].trim().split(" ").map(Number);

   var arr =  input[1].trim().split(" ").map(Number);

        noddyE(N, X, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`7 6
4 3 7 6 7 2 2`);
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