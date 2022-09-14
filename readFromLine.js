const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name', (input) => {

  console.log(`Hello ${input}`);

  rl.close();
});