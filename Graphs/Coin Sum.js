function    coinSum(arr, curr, newArr, mySet){

    // console.log( arr, curr, newArr, mySet);
  
  if(newArr.length  > 0){
    // var ans = newArr.join()
    // console.log(newArr);
    
   let eachArr = newArr.reduce((a, b) => {
      return  a + b
    })

    // console.log(newArr);
    // console.log(eachArr);

    mySet.add(eachArr)
    
  }
  if(curr == arr.length){
    return;
  }

  for(var i = curr; i < arr.length; i++){
    newArr.push(arr[i]);
    coinSum(arr,i+1, newArr, mySet);
    newArr.pop();
  }
  

}

function runProgram(input) {
   var input = input.trim().split("\n");

   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number);

   let curr = 0;
   let newArr = []

   let mySet = new Set();

   coinSum( arr, curr, newArr, mySet);

//    console.log(mySet);

   let array = [...mySet]

//    console.log(array);

    console.log(array.length);

    console.log(array.sort((a, b)=> a-b).join(" "));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
3 5 2 `);
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