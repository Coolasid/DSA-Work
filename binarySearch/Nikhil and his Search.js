function lowerBound(arr, x){

  let low = 0;
  let high = arr.length - 1;

  let ans = -1;

  while(low <= high){

    let mid = Math.floor(low + (high - low) / 2);

    if( arr[mid] == x){

      ans = mid;
      high = mid -1;

    }else if( arr[mid] > x){

      high = mid - 1;
    }else{

      low = mid +1;

    }


  }

  return ans;

}


function upperBound(arr, x){

  let arr1 = [];

  let low = 0;

  let high = arr.length - 1;

 

  while (low <= high) {

    let mid = Math.floor((low + (high - low) / 2));



    if (arr[mid] > x) {
      arr1.push(mid);
      high = mid - 1;

    } else {
      low = mid + 1;
    }

  }

  // console.log(arr1);

  return Math.min(...arr1);

}




function nikhilS(N, arr, x, q, countO, countZ){

    // console.log(N,arr, x , q);

  let lb = lowerBound(arr, x);

  let ub = upperBound(arr, x);

  

  return ub;

}


function runProgram(input) {
   var input = input.trim().split("\n");

    var N = +input[0];

    var arr = input[1].trim().split(" ").map(Number);

    var testCases = +input[2];

    var line = 3;
    
  arr.sort((a, b) => {return a-b});
  
    for(var i = 0; i < testCases; i++){
        // arr.sort()

        var arr1 = input[line].trim().split(" ").map(Number);

        var q = +arr1[0];
        var x = +arr1[1];

        var countO = 0;
        var countZ = 0;

        line++;

        

       console.log( nikhilS(N, arr, x, q, countO, countZ));
    }

   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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