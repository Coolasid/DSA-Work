function countWCond(N, arr, newArr, curr, sumArr) {
    // console.log(N, arr, newArr, curr)

    if (newArr.length > 0) {
        // console.log(newArr);
        var sum = 0;
        for (var j = 0; j < newArr.length; j++) {
            sum += newArr[j];
        }
        sumArr.push(sum);
    }
    if (curr > N) {
        return;
    }
    for (var i = curr; i < N; i++) {
        newArr.push(arr[i]);
        countWCond(N, arr, newArr, i + 1, sumArr);
        newArr.pop();
    }
}


function runProgram(input) {
    var input = input.trim().split("\n");
    var arr1 = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var newArr = [];
    var sumArr = [];
    var curr = 0;
    var N = arr1[0];
    var K = arr1[1];
    var count = 0;
    countWCond(N, arr, newArr, curr, sumArr);

    // console.log(sumArr);

    for (var k = 0; k < sumArr.length; k++) {
        if (sumArr[k] == K) {
            count++;
        }
    }

    if (count > 0) {
        console.log(count);
    } else {
        console.log(0)
    }
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`4 10
1 2 3 4`);
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