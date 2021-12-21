'use strict';
// const { number, array } = require("yargs");
const args = process.argv.slice(2);
// args1.toString();
const reverse = function(args) {
  let array = '';
  for (let i = 0; i < args.length; i++) {
    const args1 = args[i].split("");
    for (let y = args1.length - 1; y >= 0; y--) {
      array += args1[y];
    }
    console.log(array);
    array = '';
  }
};
reverse(args);

