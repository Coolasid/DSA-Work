function check(stack) {
  var min = +stack[0];

  for (var j = 0; j < stack.length; j++) {
    if (min > +stack[j]) {
      min = +stack[j]
    }
  }
  return min;
}


function mimStack(name, num) {
  var stack = [];

  // console.log(arr)
  for (var i = 0; i < name.length; i++) {
    if (name[i] == "push") {
      stack.push(num[i]);
    }
  }

  for (var i = 0; i < name.length; i++) {
    if (name[i] == "pop") {
      stack.pop();
    }
    if (name[i] == "getMin") {
      console.log(check(stack))
    }
  }


}


function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  var name = [];
  var num = [];
  var line = 1;

  for (var i = 0; i < testCases; i++) {
    var arr = input[line].trim().split(" ");
    name.push(arr[0]);
    num.push(arr[1]);

    line++;
  }
  mimStack(name, num);

}
if (process.env.USERNAME === "siddhesh") {
  runProgram(`8
push 5
push 3
push 1
getMin
pop
getMin
pop
getMin`);
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