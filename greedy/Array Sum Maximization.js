 function      arrSumMax(N,arr){
    //  console.log(N, arr);

    var ansArr = [];

    for(var i = 0; i < N; i++){
        let newArr = [];
        for(var j = 0; j < N; j++){

            if( j != i && arr[j] < arr[i]){

                let small =  arr[j] * (-1);

                    newArr.push(small)

            }else if( j != i && arr[j] > arr[i]){

                let big = arr[i];
                newArr.push(big)
            }else{
                newArr.push(arr[i]);
            }

        }

        // console.log(newArr);
        
        ansArr.push( newArr.reduce((a, b) => {return a+b}));

    }

    // console.log(ansArr);

    ansArr.sort((a,b)=>{return b-a});

    console.log(ansArr[0])

 }



function runProgram(input) {
   var input = input.trim().split('\n');

   var testCases = +input[0];

   var line = 1;

   for(var i = 0; i < testCases; i++){
        
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);

        line++;

        arrSumMax(N,arr)

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
3
2 3 1
5
1 6 7 1 5`);
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