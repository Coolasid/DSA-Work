function abOnly(arr){
// console.log(arr);

let ans = "";

    for(var i = 0; i < arr.length; i++){

        if( arr[i] == "?"){

            if( arr[i+1] == "b"){
                arr[i] = "a";
            }
            if( arr[i -1] == "a"){
                arr[i] = "b";
            }

            if( i == 0 && arr[i + 1] == "b"){
                arr[i] = "a";
            }else if( i == 0 && arr[i + 1] != "b"){
                arr[i] = "b";
            }

            if( i == arr.length-1 && arr[i -1] == "a"){
                arr[i] = "b";
            }else if( i == arr.length-1 && arr[i -1] != "a"){
                arr[i] = "a";
            }

        }


    }


console.log(arr.join(""));

}


function runProgram(input) {
   var input = input.trim().split("\n");

   var arr = input[0].trim().split("");

   abOnly(arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`?ba??b`);
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