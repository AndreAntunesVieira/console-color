"use strict";
let console = require('./src/console-color');

console.log('- Console.logColors');
console.logBlack('Print text in color Black');
console.logRed('Print text in color Red');
console.logGreen('Print text in color Green');
console.logYellow('Print text in color Yellow');
console.logBlue('Print text in color Blue');
console.logMagenta('Print text in color Magenta');
console.logCyan('Print text in color Cyan');
console.logWhite('Print text in color White');
console.logCrimson('Print text in color Crimson');

console.log('\n\n- Just Colors ( Must be used inside console.log() )');
console.log(console.black('This text will be converted to color black'));
console.log(console.red('This text will be converted to color red'));
console.log(console.green('This text will be converted to color green'));
console.log(console.yellow('This text will be converted to color yellow'));
console.log(console.blue('This text will be converted to color blue'));
console.log(console.magenta('This text will be converted to color magenta'));
console.log(console.cyan('This text will be converted to color cyan'));
console.log(console.white('This text will be converted to color white'));
console.log(console.crimson('This text will be converted to color crimson'));

console.log('\n\n- Juts Background colors ( Must be used inside console.log() )');
console.log(console.bg.black('This text will be converted to background color black'));
console.log(console.bg.red('This text will be converted to background color red'));
console.log(console.bg.green('This text will be converted to background color green'));
console.log(console.bg.yellow('This text will be converted to background color yellow'));
console.log(console.bg.blue('This text will be converted to background color blue'));
console.log(console.bg.magenta('This text will be converted to background color magenta'));
console.log(console.bg.cyan('This text will be converted to background color cyan'));
console.log(console.bg.white('This text will be converted to background color white'));
console.log(console.bg.crimson('This text will be converted to background color crimson'));

console.logRed('\n\nPrint text in color Red'); // Print text in color Red
console.log(console.red('Print text in color Red')); // This text will be converted to color red
console.log('Print text in color', console.red('Red')); // This text will be converted to color red
console.log('Print text in color ' + console.red('Red') + ' or ' + console.blue('Blue')); // This text will be converted to color red or blue
console.log('Print text in color ' + console.red('Red') + ' or ' + console.blue('Blue') + ' or ' + console.green('Green')); // This text will be converted to color red or blue or green