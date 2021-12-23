

function NumbOLog(N, K, arr, low, high, ans) {

    // console.log(N, K, arr);


    let mid = Math.floor((low + (high - low) / 2));

    if (low > high) {
        return -1;
    }

    if (arr[mid] == K) {
        ans.push(mid);
        arr.splice(mid, 1)
        return NumbOLog(N, K, arr, low, high, ans)
    }
    if (arr[mid] > K) {

        return NumbOLog(N, K, arr, low, mid - 1, ans)
    } else {

        return NumbOLog(N, K, arr, mid + 1, high, ans);
    }



}




function runProgram(input) {
    var input = input.trim().split("\n");

    var arr1 = input[0].trim().split(" ").map(Number);

    var arr = input[1].trim().split(" ").map(Number)

    //    console.log(arr);
    var ans = [];
    var N = +arr1[0];
    var K = +arr1[1];

    var low = 0;
    var high = N - 1;


    NumbOLog(N, K, arr, low, high, ans);
    console.log(ans);
    console.log(ans.length);


}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`5 2
1 1 2 2 5`);
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