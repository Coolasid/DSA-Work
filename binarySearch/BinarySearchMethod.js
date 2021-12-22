let arr = [1, 5, 8, 15, 12, 45];

let N = arr.length;

let key = 8;

function binaryS(arr, N, key){

    arr.sort((a,b) => {return a-b});

    console.log(arr);

    let low = 0;
    let high = N-1;
    // console.log(key);
    while( low <= high){
        var mid = Math.floor((low + high)/2);
        
        if( arr[mid] == key){
            return mid;
        }
        
        if( key < arr[mid]){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }

    return -1;

}

console.log( binaryS(arr, N, key ));