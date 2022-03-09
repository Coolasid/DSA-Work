function upperBound(N, K, arr) {
    
    let low = 1;
    let high = N-1;

    while(low < high){

       let mid = Math.floor((high+low)/2)

       if( K < arr[mid]){
           high = mid
       }else{
           low = mid+1
       }
    }
    
    return low;
}


function runProgram(input) {
    var input = input.trim().split("\n");

    var arr1 = input[0].trim().split(" ").map(Number);

    var arr = input[1].trim().split(" ").map(Number);

    var N = +arr1[0];
    var K = +arr1[1];
    // console.log("sid");

  console.log(  upperBound(N, K, arr));
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`10 4
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