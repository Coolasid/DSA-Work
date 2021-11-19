function masaiCodingC(arr1, arr2, arr3){
    // console.log(arr1, arr2, arr3)

    var club1 = [];
    var club2 = [];
    var club3 = [];
    var club4 = [];

    for( var i = 0; i < arr1.length; i++){
        if(arr1[i] == "E"){
            if(arr2[i] == 1){
                club1.push(arr2[i],arr3[i]);
                // console.log(club1);
            }
            if (arr2[i] == 2) {
                club2.push(arr2[i], arr3[i]);
                // console.log(club2);
            }
            if (arr2[i] == 3) {
                club3.push(arr2[i], arr3[i]);
                // console.log(club3);
            }
            if (arr2[i] == 4) {
                club4.push(arr2[i], arr3[i]);
                // console.log(club4);
            }

          
        }
        
        
    }
    var club1Str = "";
    for(var i = 0; i < club1.length; i++){
        club1Str += club1[i];
    }
    // console.log(club1Str);
    var club2Str = "";
    for (var i = 0; i < club2.length; i++) {
        club2Str += club2[i];
    }
    var club3Str = "";
    for (var i = 0; i < club3.length; i++) {
        club3Str += club3[i];
    }
    var club4Str = "";
    for (var i = 0; i < club4.length; i++) {
        club4Str += club4[i];
    }
    // console.log(club1Str + club2Str + club3Str + club4Str)

    var allClubs = club1Str + club2Str + club3Str + club4Str;
    // console.log(allClubs)

    allClubsArr = [];
    for(var i = 0; i < allClubs.length; i++){
        allClubsArr.push(allClubs[i])
    }
    // console.log(allClubsArr);
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] == "D"){
            console.log(allClubsArr[0]+ " " + allClubsArr[1])
            allClubsArr.shift();
            allClubsArr.shift();
        }
    }
}

function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];

   var line = 1;
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    

    for( var i = 0; i < testCases ; i++){
        var arr = input[line].trim().split(" ");

        arr1.push(arr[0]);
        arr2.push(arr[1]);
        arr3.push(arr[2]);
        line++;
    }
   
        masaiCodingC(arr1,arr2,arr3);
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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