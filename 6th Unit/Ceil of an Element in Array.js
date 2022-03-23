let input = [1, 2, 3, 4, 8, 10, 10, 12, 29];
let K = 30;

let Ceil = (arr, K) =>{

    let N = arr.length-1;
    let low = 0;
    let high = N-1;
    let ans = -1;

    while(low <= high){

        let mid = Math.floor((low+high)/2);

        if(arr[mid] == K){
            return mid
        }
        if(arr[mid] > K){
            ans = mid;
            high = mid -1;
        }else if(arr[mid] < K){
            low = mid + 1;
        }

    }

    return ans

}

console.log(Ceil(input, K));