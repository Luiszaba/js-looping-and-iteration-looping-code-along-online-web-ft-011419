// Code your solutions in this file

// we create an array with a const variable global.  I want to have the array persist across all the functions and not change.  If I wanted it to change I would have used let.  
const badges = ['Ada', 'Brendan', 'Ali'];


// we create a function called printBadges with our badges variable passed in.  
function printBadges (badges) {
// create a for loop within the function.  Here we have a variable (let) equal to 0
  for (let i = 0; i < badges.length; i++) {
    console.log('Welcome #${badges[i]}, You are employee #${i + 1).');
  }
  return badges;
}

function tailsNeverFails () {
// counter [i] = 0
  let i = 0;

// while random num is equal to or greater than .5 increase the counter.
  while (Math.random() >= 0.5) {
    i++;
  }
// return the counter total
  return `You got ${i} tails in a row!`;
}