function subEndingK(N, K, str) {
  // console.log(N, K, str);
  let count = 0;
  for (let i = 0; i < N; i++) {
    let newStr = [];
    for (let j = i; j < N; j++) {
      newStr.push(str[j]);
      if (newStr[newStr.length - 1] == K) {
        count++;
      }
    }
  }

  return count;
}

function runProgram(input) {
  var input = input.trim().split('\n');
  let testCases = +input[0];

  let line = 1;

  for (let i = 0; i < testCases; i++) {
    let N = +input[line];
    line++;
    let str = input[line].trim().split('');
    line++;
    let K = input[line].trim();
    line++;
    console.log(subEndingK(N, K, str));
  }
}
if (process.env.USERNAME === 'siddhesh') {
  runProgram(`1
    4
    aman
    a`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
