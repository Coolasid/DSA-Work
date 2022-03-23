function longestPaliSubStr(arr){
    // console.log(arr);
    let N = arr.length;
    let length = 0;
    for(let i = 0; i < N; i++){
        let newStr = "";
        for(let j = i; j < N; j++){
            newStr += arr[j]
            // console.log(newStr);
            if(checkPali(newStr)){
                length = Math.max(length, newStr.length)
            }
        }
    }

    return length;
}

function checkPali(str){
    let low = 0;
    let high = str.length-1;

    while(low < high){
        if(str[low] !== str[high]){
            return false
        }
        low++;
        high--;
    }
    return true
}

function runProgram(input) {
   var input = input.trim().split("")

   console.log(longestPaliSubStr(input));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`thisracecarisgood`);
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