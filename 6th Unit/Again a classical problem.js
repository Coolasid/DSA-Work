function againClassical(arr){

 let stack = [];

 let top = stack.length-1;

 for(let i = 0; i < arr.length; i++){

    if( arr[i] == "(" || arr[i] == "{" || arr[i] == "["){
        stack.push(arr[i])
        top++;;
    }else{

        if(stack.length == 0){
            return false
        }

        if(stack[top] == '(' && arr[i] == ")" || stack[top] == "{" && arr[i] == "}" || stack[top] == '[' && arr[i] == "]"){
            stack.pop();
            top--;
        }else{
            return false;
        }

    }


 }

 if(stack.length === 0){
     return true
 }else{
     return false
 }

}


function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];

   for(let i = 1; i <= testCases; i++){
        let arr = input[i].trim().split("")

        if(againClassical(arr)){
            console.log("balanced")
        }else{
            console.log("not balanced");
        }
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
{([])}
()
([]
`);
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