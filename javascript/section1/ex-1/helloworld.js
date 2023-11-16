const chalk = require('chalk');

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(chalk.green(`Hello, ${name}!`));

  rl.close();
});
