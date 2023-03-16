/**
 *
 *  Loops are a way to repeat logical steps
 *      a certain amount of times
 *
 *  for, while, do while
 *
 */

/** For Loop
 * for (INIT_VARIABLE; STOP_CONDITION; INCREMENT_VALUE) {
 *   STEPS_TO_REPEAT
 * }
 */
let forArray = [10, 20, 30];
for (let i = 0; i < forArray.length; i++) {
  forArray[i] = forArray[i] + 1;
}

console.log(forArray);

// While
let whileArray = [10, 20, 30];
let whileCount = 0;
while (whileCount < whileArray.length) {
  whileArray[whileCount] = whileArray[whileCount] + 1;
  whileCount++;
}

console.log(whileArray);

// Do While
let doWhileArray = [10, 20, 30];
let doWhileCount = 0;
do {
  doWhileArray[doWhileCount] = doWhileArray[doWhileCount] + 1;
  doWhileCount++;
} while (doWhileCount < doWhileArray.length);

console.log(doWhileArray);
