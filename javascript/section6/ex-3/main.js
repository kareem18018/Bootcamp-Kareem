

const stringUtils = require('./utils/stringUtils');

const inputString = 'Welcome to aganitha';
const reversedString = stringUtils.reverseString(inputString);
const characterCount = stringUtils.countCharacters(inputString);

console.log('Original string:', inputString);
console.log('Reversed string:', reversedString);
console.log('Character count:', characterCount);
