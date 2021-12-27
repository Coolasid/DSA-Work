function upperBound(N, K, arr) {



    // console.log(N, K, arr);

    let arr1 = [];

    let low = 0;

    let high = N - 1;

    let ans = -1;

    while (low <= high) {

        let mid = Math.floor((low + (high - low) / 2));



        if (arr[mid] > K) {
            arr1.push(mid);
            high = mid - 1;

        } else {
            low = mid + 1;
        }

    }

    // console.log(arr1);

    console.log(Math.min(...arr1));

}


function runProgram(input) {
    var input = input.trim().split("\n");

    var arr1 = input[0].trim().split(" ").map(Number);

    var arr = input[1].trim().split(" ").map(Number);


    var N = +arr1[0];
    var K = +arr1[1];

    upperBound(N, K, arr);
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`10 3
0 2 4 4 5 5 7 7 9 10`);
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