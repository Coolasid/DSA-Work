function drStrPoss(N, arr){
    var data = {};

    function rec(curr, n, arr, newArr){
        if(data[newArr.join(" ")] == undefined){
            data[newArr.join(" ")] =1
            console.log(newArr.join(" "))
        }

        if(curr == arr.length){
            return
        }

        for( var i = curr; i< n;i++){
            newArr.push(arr[i])
            rec(i+1,n,arr,newArr)
            newArr.pop()
        }
    }
    rec(0,N,arr,[]);
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number).sort((a, b) => {return a-b});

    drStrPoss(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
1 2 2`);
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