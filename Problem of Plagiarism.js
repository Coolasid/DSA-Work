




function runProgram(input) {
    var input = input.trim().split("\n");
    var N = +input[0];
    var arr1 = input[1].trim().split(" ").map(Number);

    var L = +arr1[0];
    var R = +arr1[1];
    var countO = 0;
    var curr1 = 1;
    var arr = [];
    function split(N, curr1) {
        if (curr1 > N) {
            return arr;
        }

        arr.push(curr1);

        return split(N, curr1 + 1);
    }

    var mainArr = split(N, curr1)

    // console.log(mainArr);

    var curr = 0;
    


    function GP(mainArr, curr, L, R) {
        // return N
        // return mainArr
        // console.log(str,newStr,curr);

        if (curr == mainArr.length) {
            //    console.log( mainArr);
            var sum = 0;
            for (var i = L; i <= R; i++) {
                sum += mainArr[i];
            }

            if (sum % 2 == 1) {
                countO++;
            }

            return;
        }
        for (var i = curr; i < mainArr.length; i++) {
            var temp = mainArr[i];
            mainArr[i] = mainArr[curr];
            mainArr[curr] = temp;

            GP(mainArr, curr + 1, L, R)



            var temp1 = mainArr[i];
            mainArr[i] = mainArr[curr];
            mainArr[curr] = temp1;

        }

    }

   GP(mainArr, curr,L,R)

    console.log(countO);


}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
0 1`);
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