let N = 27;

let K = 1;

function clear(N, K){

    let i = 1;
    
    i = 1 << K
    j = ~i;
    let res = j & N;

    return res;
}

console.log(clear(N, K));