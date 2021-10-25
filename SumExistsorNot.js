function gSub(N, K, str, newStr, cur) {
    // console.log(N,K,str,newStr,cur);

    if (newStr.length > 0) {
        newStr
        var out = 0;
        for (var j = 0; j < newStr.length; j++) {
            out += newStr[j];
        }
        console.log(out);

    }
    if (cur == str.length) {
        return;
    }
    for (var i = cur; i < str.length; i++) {
        newStr.push(str[i])
        gSub(str, newStr, i + 1);
        newStr.pop();
    }


}






function runProgram(input) {
    var input = input.trim().split("\n");

    var N = +input[0].trim();
    var str1 = input[1].trim().split(" ");
    var str = ""
    for(var i = 0; i < str1.length;i++){
        str += str1[i];
    }

    var cur = 0;
    var K = +input[2].trim();
    var newStr = [];
    gSub(N,K,str, newStr, cur);

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`9
1 2 3 4 5 6 7 8 9
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