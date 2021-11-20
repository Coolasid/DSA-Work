function masaiCodingC(arr1, arr2, arr3){
    // console.log(arr1, arr2, arr3)
    var master = [];
    var q1 = [];
    var q2 = [];
    var q3 = [];
    var q4 = [];

    function notContain(arr,M){
        var count= 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] != M){
                count++;
            }
        }
        if(count == arr.length){
            return true;
        }else{
            return false;
        }
    }

    // console.log(notContain([1,2,3],2));
    
    for( var i = 0; i < arr1.length; i++){
        if(arr1[i] == "E"){
            if(arr2[i] == 1){
               if((master.length == 0) || notContain(master,1) ){
                   master.push(1)
               }
               q1.push(arr3[i]);
            }
            else if (arr2[i] == 2) {
                if ((master.length == 0) || notContain(master, 2)) {
                    master.push(2)
                }
                q2.push(arr3[i]);
            }
            else if (arr2[i] == 3) {
                if ((master.length == 0) || notContain(master, 3)) {
                    master.push(3)
                }
                q3.push(arr3[i]);
            }
            else if (arr2[i] == 4) {
                if ((master.length == 0) || notContain(master, 4)) {
                    master.push(4)
                }
                q4.push(arr3[i]);
            }
            
          
        }else if(arr1[i] == "D"){
            if(master[0] == 1){
                console.log(1 + " " + q1[0]);
            q1.shift();
                if(q1.length == 0){
                    master.shift();
                }
            }else if(master[0] == 2){
                console.log(2 + " " + q2[0]);
                q2.shift();
                if (q2.length == 0) {
                    master.shift();
                }
            } else if (master[0] == 3) {
                console.log(3 + " " + q3[0]);
                q3.shift();
                if (q3.length == 0) {
                    master.shift();
                }
            } else if (master[0] == 4) {
                console.log(4 + " " + q4[0]);
                q4.shift();
                if (q4.length == 0) {
                    master.shift();
                }
            }

        }
        
        
    }
    
    // console.log(q1, q2, q3, q4, master);
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
E 4 1
E 2 1
E 4 2
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