function redString(str) {
    // console.log(str);
    var stack = [];
    var ans = [];

    for(var i = 0; i < str.length; i++){

        while (stack.length > 0 && str[i] == stack[stack.length - 1]) {
            stack.pop();

        } if (stack.length == 0) {
            ans[i] = -1;
        } else {
            ans[i] = stack[stack.length - 1]
        }

        stack.push(str[i])

    }


    console.log(ans.join(" "));
    }

    
   




function runProgram(input) {
    var str = input.trim()

    redString(str);
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`aaabccddd`);
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