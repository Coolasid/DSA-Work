let promise = new Promise((resolve, reject) => {
  let a = 1 + 2;

  if (a == 2) {
    resolve('promise get resolved');
  } else {
    reject('promise is rejected');
  }
});

// 1. .then and .catch

promise.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})

// 2. async and await

let handlePromise = async()=>{
    try {
        let res = await promise;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

handlePromise()