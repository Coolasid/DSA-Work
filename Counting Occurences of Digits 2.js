function cODigits(N, arr){
    // console.log(N,arr);

    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }

    }

    // console.log(obj)

    var z = [];
    var n = [];
    for( key in obj){
        z.push(obj[key]);
    }
    for(var i = z.length-1; i>= 0; i--){
        n.push(z[i]);
    }
    // console.log(n);
    // console.log(z)
    for(key in obj){
        // console.log(obj[key]);

   while(i >= 9){

    
        if(key== "9"){
            var a = obj[key];
        }else{
            a = 0;
        }
        if (key == "8") {
            var b = obj[key];
        } else {
            b = 0;
        }
        if (key == "7") {
            var c = obj[key];
        } else {
            c = 0;
        }
        if (key == "6") {
            var d = obj[key];
        } else {
            d = 0;
        }
        if (key == "5") {
            var e = obj[key];
        } else {
            e = 0;
        }
        if (key == "4") {
            var f = obj[key];
        } else {
            f = 0;
        }
        if (key == "3") {
            var g = obj[key];
            // console.log(obj[key]);
        } else {
            g = 0;
        }
        if (key == "2") {
            var h = obj[key];
        } else {
            h = 0;
        }
        if (key == "1") {
            var i = obj[key];
        } else {
            i = 0;
        }
        if (key == "0") {
            var j = obj[key];
        } else {
            j = 0;
        }
        
    }
}
    console.log(a, b, c, d, e, f, g, h, i, j);
    
}


function runProgram(input) {
   var input = input.trim().split("\n");
    var testCases = +input[0];

   var line = 1;
   for(var i = 0; i< testCases; i++){
       var N = +input[line];
       line++;
       var arr = input[line].trim().split("").map(Number);
        line++;
       cODigits(N,arr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
5
21321
6
235452`);
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