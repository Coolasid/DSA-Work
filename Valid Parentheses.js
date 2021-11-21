


function validP(s){
let map = {
    ")" : "(",
    "]" : "[",
    "}" : "{"
}
    var stack = [];
for(var i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
        stack.push(s[i]);
    } else {
       
        if (stack[stack.length-1 ] === map[s[i]] ){
            stack.pop();
            
        } else {
            return false;
        }
       

    }



}

if (stack.length == 0) {
    return true;
} else {
    return false;
}

}
console.log(validP("()[]{}"));
// console.log("sid");

