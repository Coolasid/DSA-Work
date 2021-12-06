

function allSub(str, newStr, curr) {
  // return N

  if (K < 0) {
    return 0;
  }
  if (newStr.length == str.length) {
    console.log(newStr);
    newStr = [];
    return;
  }




  for (var i = 0; i < str.length ; i++) {
    newStr.push(str[i]);
    masaiways(str, newStr,curr + 1);
  }

}


function runProgram(input) {
  var input = input.trim().split("\n");
  var N = +input[0];
  var str = input[1].trim().split(" ").map(Number);
  var curr = 0;
  var newStr = [];
  allSub(str, newStr, curr);
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