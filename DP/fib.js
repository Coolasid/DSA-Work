
let arr = function calfib(N){

    var dp = [];

    for(let i = 0; i <= N; i++){

        dp[i] = -1;

    }

    dp[1] = 1;
    dp[2] = 2;

    // console.log(dp);

    return dp;
    
}

function fib(N, dp){

    if( dp[N] != -1){
        return dp[N];
    }else{

        var X = fib(N-1);
        var Y = fib(N-2);
        
        dp[N] = X + Y;
    }


    return dp[N];
}

console.log(fib(5, arr(5)));
