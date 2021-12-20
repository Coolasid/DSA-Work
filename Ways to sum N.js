function NoWays(N) {
    // return N;

    if (N < 0) {
        return 0;
    }
    if (N == 0) {
        return 1;
    }

    return NoWays(N - 1) + NoWays(N - 2) + NoWays(N - 5);
}



function runProgram(input) {
    var input = input.trim().split("\n").map(Number);
    var testCases = +input[0];
    

    var line = 1;

    for(var i = 0; i < testCases; i++){
        var N = +input[line];
        // var K = 0;
        line++;
        console.log(NoWays(N));
    }
    
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
5`);
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