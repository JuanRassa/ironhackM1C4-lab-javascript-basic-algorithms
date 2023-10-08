// Iteration 1: Names and Input
console.log('<<Iteration 1: Names and Input>>');
const hacker1 = 'Guilherme';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Juan';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log('<<Iteration 2: Conditionals>>');
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
console.log('<<Iteration 3: Loops>>');
const hacker1Split = hacker1.split('');
const hacker1Spaces = hacker1Split.join(' ');
const hacker1SpacesUpper = hacker1Spaces.toUpperCase();
console.log(
  'Driver name Uppercase and with spaces between characters:',
  hacker1SpacesUpper
);

const hacker2Split = hacker2.split('');
const hacker2Reverse = hacker2Split.reverse();
const hacker2ReverseString = hacker2Reverse.join('');
console.log('Navigator name reversed:', hacker2ReverseString);

if (hacker1.charAt(0) < hacker2.charAt(0)) {
  console.log("The driver's name goes first");
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}

console.log('<<Bonus 1>>');
console.log('<<Lorem Ipsum Bonus Exercise>>');
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit elit sit amet viverra pellentesque. Praesent non libero sit amet felis dignissim efficitur. Duis rhoncus hendrerit lectus, non aliquam odio blandit non. Nulla erat enim, posuere nec leo sit amet, lacinia scelerisque augue. Etiam dapibus congue porttitor. Vestibulum gravida, tellus ut lacinia pulvinar, purus massa laoreet est, in pharetra diam libero id purus. Aenean ac felis vitae purus commodo consequat at sollicitudin augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet tellus vitae risus faucibus imperdiet et id tellus. Aenean eleifend bibendum orci id maximus. Morbi ut neque a est varius venenatis ac nec tortor. Phasellus tortor velit, consequat id turpis sed, semper condimentum dui.

Curabitur ut fermentum ex. Nulla vitae risus id arcu volutpat sodales. Vestibulum magna erat, ornare tristique iaculis a, consectetur in eros. Quisque finibus erat eget dolor dapibus, sed bibendum justo cursus. Praesent semper enim mauris, nec semper eros feugiat ut. Aenean rhoncus odio velit, eu imperdiet lectus imperdiet et. Suspendisse faucibus, urna eu elementum lacinia, sem sapien vehicula ligula, ut dignissim tellus eros in nisl. Aliquam semper tempus vehicula. Aenean quis turpis neque. Nullam commodo nulla ut fringilla rutrum. In sodales, leo et efficitur dapibus, nulla nibh euismod dolor, in volutpat nunc nibh a nunc. Integer iaculis felis at convallis tristique. Etiam molestie id lacus sed mollis. Mauris a massa ut sem mollis tincidunt vitae eleifend nisl. Quisque eros turpis, consequat eu quam id, facilisis aliquet ipsum. Etiam vehicula nibh ligula, quis molestie purus convallis ac.

Vestibulum eget feugiat est. Mauris eu blandit leo. Mauris posuere varius bibendum. In at volutpat sapien, tempus cursus nisl. Nulla cursus a nibh vel lobortis. Quisque congue orci lorem, id cursus nisl tincidunt ac. Aliquam bibendum ultricies ipsum. Donec eu turpis nibh. Ut ut venenatis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac facilisis arcu, sed condimentum elit. Morbi volutpat, velit eu viverra consectetur, orci neque pellentesque purus, vel tempor risus mi feugiat sapien. Fusce in tincidunt est, vel accumsan diam. Maecenas egestas elit ut porttitor tincidunt. Quisque sodales facilisis turpis at scelerisque. Donec scelerisque blandit condimentum.`;

const longTextSplit = longText.split(' ');
console.log(
  `The first three paragraphs of 'Lorem Ipsum' has ${longTextSplit.length} words.`
);

console.log('<<BONUS 2>>');
console.log('<<Palindrome Bonus Exercise>>');
const phraseToCheck = 'step on no pets';
const prasheJustLetters = phraseToCheck.replace(/[^a-zA-Z]/gi, '');
const phraseLower = phraseToCheck.toLocaleLowerCase();

const phraseReverse = phraseLower.split('').reverse().join('');

if (phraseLower === phraseReverse) {
  console.log(`The phrase "${phraseToCheck}" IS a palindrome!`);
} else {
  console.log(`The phrase "${phraseToCheck}" IS NOT a palindrome!`);
}
