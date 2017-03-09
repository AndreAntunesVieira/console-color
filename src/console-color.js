(function(module){
  "use strict";
  const colors = require('../lib/colors');

  let consoleColor = {
    bg: {}
  };

  Object.keys(colors.fg).forEach(function(colorName){
    let ColorName = CamelCase(colorName);
    consoleColor['log'+ColorName] = (content) => logContentWithColor(content, colorName);
    consoleColor[colorName] = (content) => getTextColored(content, colorName);
    consoleColor.bg[colorName] = (content) => getBgColored(content, colorName);
  });

  consoleColor.log = console.log;
  consoleColor.clear = console.clear;

  function getTextColored(text, colorName){
    return colors.fg[colorName] + text + colors.reset;
  }

  function getBgColored(text, colorName){
    return colors.bg[colorName] + text + colors.reset;
  }

  function CamelCase(str){
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  function logContentWithColor(content, colorName){
    if(typeof content === 'string' || typeof content === 'number'){
      return console.log(getTextColored(content, colorName));
    }
    return console.log(colors.fg[colorName],content, colors.reset);
  }

  module.exports = consoleColor;
})(module);
