// import the module for process.argv 
const { number } = require("yargs");
// the function for added the elements 
const addTwoArguments = function(args) {
  // we need to use parseInt() with each argument to change string to number. 
  let array = parseInt(args[0]) + parseInt(args[1]);
  console.log(array);
  return array;
};
// we received arguments and slice(2) to remove the two first arguments in process.argv 
const args = process.argv.slice(2);
// we need to call the function and passed args like argument for them to execute 
addTwoArguments(args);
