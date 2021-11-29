function plusMinus(arr){
    var len = arr.length;
    var p = 0;
    var m = 0;
    var z = 0;
    for(var i = 0; i < len; i++){
        if(arr[i] == 0){
            z++;
        }else if(arr[i] > 0){
            p++;
        }else if(arr[i] < 0){
            m++;
        }
         
    }

    
        console.log((p / len).toFixed(6))
    console.log((m / len).toFixed(6))
    console.log((z / len).toFixed(6))

}

plusMinus([1, 1, 0, -1, -1])