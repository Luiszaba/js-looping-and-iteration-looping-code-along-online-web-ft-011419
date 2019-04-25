// Code your solutions in this file

// we create an array with a const variable global.  I want to have the array persist across all the functions and not change.  If I wanted it to change I would have used let.  
const badges = ['Ada', 'Brendan', 'Ali'];


// we create a function called printBadges with our badges variable passed in.  
function printBadges (badges) {
// create a for loop within the function.  Here we have a let variable equal to 0.  the 0 is the starting point for our counter. As long as i is less than the length of the badges array, the function will continue to loop and increase the counter console.log().  i++ signifies a positive +1 increment for every loop.
  for (let i = 0; i < badges.length; i++) {
    console.log('Welcome #${badges[i]}, You are employee #${i + 1).');
  }
// we return the completed for loop as a string
  return badges;
}

// the function tailsNeverFails asserts the assumption that there is a .50 chance tails will not fail.  A coin only has who sides.  
function tailsNeverFails () {
// counter [i] = 0
  let i = 0;

// [key word] => 'while' a random num is equal to or greater than .5 increase the counter.
  while (Math.random() >= 0.5) {
    i++;
  }
// return the counter total
  return `You got ${i} tails in a row!`;
}


// function printBadges(badges) {
//  for (let i= 0, i < badges.length; i++) {
//  console.log("Welcome, #${badges}, You are employee #${i + 1}");
// }
// return badges;
// }
// 