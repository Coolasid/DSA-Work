
var reqArr = [];

function GP(arr,curr) {
  // return N

  // console.log(str,newStr,curr);

  if(curr == arr.length){
    var ans = arr.join("");
    reqArr.push(ans);
    return;
  }
  for(var i = curr; i < arr.length; i++){
    var temp = arr[i];
      arr[i] = arr[curr];
      arr[curr] = temp;

      GP(arr,curr+1);

      var temp1 = arr[i];
      arr[i] = arr[curr];
      arr[curr] = temp1;

  }

}



function runProgram(input) {
  var input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var curr = 0;
  
  GP(arr, curr);

  reqArr.sort((a,b) => (a -b))

  reqArr.forEach((el)=>{
    var reqAns = el.split("")

    console.log(reqAns.join(" "));
  })

   
}
if (process.env.USERNAME === "siddhesh") {
  runProgram(`3
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
    process.exit(0);
  });
} 