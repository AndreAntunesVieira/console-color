## simple-console-color ##

Node server console upgrate, to create console.logs with colors with a simple form, without any other modules.

## Instalation ##

npm install simple-console-color

## Usage ##

Native javascript console.log keep the same, new methods are addicteds:

 - Console.logColors  
    ✓ console.logBlack('Print text in color Black');  
    ✓ console.logRed('Print text in color Red');  
    ✓ console.logGreen('Print text in color Green');  
    ✓ console.logYellow('Print text in color Yellow');  
    ✓ console.logBlue('Print text in color Blue');  
    ✓ console.logMagenta('Print text in color Magenta');  
    ✓ console.logCyan('Print text in color Cyan');  
    ✓ console.logWhite('Print text in color White');  
    ✓ console.logCrimson('Print text in color Crimson');  

 - Just Colors ( Must be used inside console.log() )  
    ✓ console.black('This text will be converted to color black');  
    ✓ console.red('This text will be converted to color red');  
    ✓ console.green('This text will be converted to color green');  
    ✓ console.yellow('This text will be converted to color yellow');  
    ✓ console.blue('This text will be converted to color blue');  
    ✓ console.magenta('This text will be converted to color magenta');  
    ✓ console.cyan('This text will be converted to color cyan');  
    ✓ console.white('This text will be converted to color white');  
    ✓ console.crimson('This text will be converted to color crimson');  

 - Juts Background colors ( Must be used inside console.log() )  
    ✓ console.bg.black('This text will be converted to background color black');  
    ✓ console.bg.red('This text will be converted to background color red');  
    ✓ console.bg.green('This text will be converted to background color green');  
    ✓ console.bg.yellow('This text will be converted to background color yellow');  
    ✓ console.bg.blue('This text will be converted to background color blue');  
    ✓ console.bg.magenta('This text will be converted to background color magenta');  
    ✓ console.bg.cyan('This text will be converted to background color cyan');  
    ✓ console.bg.white('This text will be converted to background color white');  
    ✓ console.bg.crimson('This text will be converted to background color crimson');  


## Samples ##

console.logRed('Print text in color Red'); // <font color="red">Print text in color Red</font>  
console.log(console.red('Print text in color Red')); // <font color="red">Print text in color Red</font>  
console.log('Print text in color', console.red('Red')); // Print text in color <font color="red">Red</font>  >
