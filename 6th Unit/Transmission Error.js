function trans(N) {
  // console.log(N);

  N = N.toString(2).split('').map(Number);

  for (let i = 0; i < 62 - N.length; i++) {
    N.push(0);
  }

  N = +N.join("")
  

  console.log(N);
}


function runProgram(input) {
  var input = input.trim().split('\n');

  let testCases = +input[0];
  let line = 1;

  for (let i = 0; i < testCases; i++) {
    let N = +input[line];
    line++;

    trans(N);
  }
}
if (process.env.USERNAME === 'siddhesh') {
  runProgram(`3
0
1
2`);
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
