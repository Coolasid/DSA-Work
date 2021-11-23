function redString(str) {
    // console.log(str);
    var stack = [];
    var ans = [];

    for(var i = 0; i < str.length; i++){

       if(stack.length == 0){
           stack.push(str[i]);
       }else{
           if(str[i] == stack[stack.length - 1]){
               stack.pop();
           }else{
               stack.push(str[i]);
               ans.push(stack[stack.length-1]);
           }
       }

       
        
        

    }

    if(stack.length !=0 ){
        console.log(stack.join(""));
    }else{
        console.log("Empty String");
    }
   
    }

    
   




function runProgram(input) {
    var str = input.trim()

    redString(str);
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`aaabccddd`);
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