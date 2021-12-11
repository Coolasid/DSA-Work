function partition(arr, low, high) {

    pivot = low;
    i = low;
    j = high;

    while (i < j) {
        while (arr[i] <= arr[pivot] && i < high) {
            i++;
        }
        while (arr[j] > arr[pivot] && j > low) {
            j--;
        }

        if (i < j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }

    var temp1 = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp1;


    return j;
}


function oppQuickS(arr, low, high) {

    if (low >= high) {
        return;
    }

    var pivot = partition(arr, low, high);
    // console.log(pivot)
    oppQuickS(arr, low, pivot - 1);
    oppQuickS(arr, pivot + 1, high);



}



function runProgram(input) {
    var input = input.trim().split("\n");
    var N = +input[0];

    var arr = input[1].trim().split(" ").map(Number);


    var low = 0;
    var high = N - 1;

    oppQuickS(arr, low, high);
    console.log(arr.join(" "));
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
2 3 1 4 5`);
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