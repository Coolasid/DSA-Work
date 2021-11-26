function knight(i, j, N){
    // console.log(i,j,N);

     var count = 0;

    for (var k = 0; k < N; k++) {
        var up1i = i - 2;
        var up1j = j - 1;

        if (up1i < 0 || up1j < 0 || up1i > 10 || up1j > 10) {
            break;
        }
        else {
            count++;
        }
       knight(up1i,up1j);
    }


     for(var k = 0; k < N; k++){
         var up2i = i - 2;
         var up2j = j + 1;

         if (up2i < 0 || up2j < 0 || up2i > 10 || up2j > 10) {
             break;
         }
         else{
             count++;
         }

         knight(up2i,up2j);
     }
    

    

    for (var k = 0; k < N; k++) {
        var left3i = i - 1;
        var left3j = j - 2;

        if (left3i < 0 || left3j < 0 || left3i > 10 || left3j > 10) {
            break;
        }
        else {
            count++;
        }
        knight(left3i, left3j);
    }
    


    for (var k = 0; k < N; k++) {
        var left4i = i + 1;
        var left4j = j - 2;

        if (left4i < 0 || left4j < 0 || left4i > 10 || left4j > 10) {
            break;
        }
        else {
            count++;
        }
        knight(left4i, left4j);
    }

   

    for (var k = 0; k < N; k++) {
        var down5i = i + 3;
        var down5j = j - 1;

        if (down5i < 0 || down5j < 0 || down5i > 10 || down5j > 10) {
            break;
        }
        else {
            count++;
        }
        knight(down5i, down5j);
    }
    

    for (var k = 0; k < N; k++) {
        var down6i = i + 3;
        var down6j = j + 1;

        if (down6i < 0 || down6j < 0 || down6i > 10 || down6j > 10) {
            break;
        }
        else {
            count++;
        }
        knight(down6i, down6j);
    }
   

    for (var k = 0; k < N; k++) {
        var right7i = i + 1;
        var right7j = j + 2;

        if (right7i < 0 || right7j < 0 || right7i > 10 || right7j > 10) {
            break;
        }
        else {
            count++;
        }
        knight(right7i, right7j);
    }
    

    for (var k = 0; k < N; k++) {
        var right8i = i - 1;
        var right8j = j + 2;

        if (right8i < 0 || right8j < 0 || right8i > 10 || right8j > 10) {
            break;
        }
        else {
            count++;
        }
        knight(right8i, right8j);
    }
   

     

     return count;
}
 
 
 function runProgram(input) {
    var arr = input.trim().split(" ").map(Number);

    var i = arr[0];
    var j = arr[1];
    var N = arr[2];

    console.log(knight(i,j,N));

   }
   if (process.env.USERNAME === "siddhesh") {
       runProgram(`3 3 1`);
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
       process.exit(0) ;
     });
   }