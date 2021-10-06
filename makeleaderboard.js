
function checkStrs(str1, str2) {
    var n = str1.length;
    var m = str2.length;

    for (var i = 0; i < Math.min(n, m); i++) {
        if (str1[i] != str2[i]) {
            if (str1[i] > str2[i]) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}


function makeLeaderboard(N, names, marks){
    
    for( var i = 0; i < N; i++){
        for( var j = 0; j < N-i-1; j++){
            if( checkStrs(names[j], names[j+1] ) == true){
                [names[j], names[j+1]] = [names[j+1], names[j]];
                [marks[j], marks[j+1]] = [marks[j+1], marks[j]];
            }
        }
    }
  
    for( var i = 0; i < N; i++){
        for( var j = 0; j < N-i-1; j++){
            if( marks[j] < marks[j+1]){
                [names[j], names[j + 1]] = [names[j + 1], names[j]];
                [marks[j], marks[j + 1]] = [marks[j + 1], marks[j]];
            }
        }
    }
    
    var count = 0;
    var rank = 1;
    var prev = -1;
    for( var i = 0; i < N; i++){
        if( marks[i] == prev){
            console.log(rank + " " + names[i])
        }else {
            rank += count;
            count = 0;
            console.log(rank + " " + names[i]);
        }
        count++;
        prev = marks[i];
    }
    
}



function runProgram(input) {
     var input = input.trim().split("\n");
     var N = +input[0];

     var line = 1;
     var names = [];
     var marks = [];

     for(var i = 0; i < N; i++){
         var arr = input[line].trim().split(" ");

         names.push(arr[0]);
         marks.push(arr[1]);
         line++;
     }
     makeLeaderboard(N, names, marks);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
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