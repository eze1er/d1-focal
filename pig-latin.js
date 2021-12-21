'use strict';
// const { number, array } = require("yargs");
const args = process.argv.slice(2);

const pigLatin = function(args) {
  // return Error for empty array
  if (!args[0]) {
    console.log("Error try again");
    return "Error try again";
  }
  let array = '';
  // loop in the array without first element
  for (let i = 0; i < args.length; i++) {
    if (args.length === 1) {
      array = (args[0] + 'ay ');
    } else {
      // split the element for to loop starting by the second character
      let array1 = args[i].split('');
      for (let y = 1; y < array1.length; y++) {
        array += array1[y];
      }
      // write first element in last position and string "ay"
      array += (array1[0]+ 'ay ');
    }
  }
  console.log(array);
  return array;
};
// calling the function by process.argv argument
pigLatin(args);