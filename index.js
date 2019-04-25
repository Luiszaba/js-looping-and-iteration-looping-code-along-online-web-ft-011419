// Code your solutions in this file

// we create an array with a const tag
const badges = ['Ada', 'Brendan', 'Ali'];

function printBadges (badges) {
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