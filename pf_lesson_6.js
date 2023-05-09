/**
 *
 * Flow Control is when you alter the order in which instructions
 * are run during a program.
 *
 * Examples: loops, if, else, functions
 *
 */

// 1 = Mon, 2 = Tues, 3 = Wed, 4 = Thurs, 5 = Fri
let today = 1;
let isFriday = today === 5;
if (isFriday) {
  console.log('Get something to eat.');
} else if (today === 1) {
  console.log('Go to the gym.');
} else {
  console.log('Go home.');
}
