(function(global){
  "use strict";
  const colors = ['black','red','green','yellow','blue','magenta','cyan','white','crimson'];
  console.bg = {};

  colors.forEach(function(colorName){
    let ColorName = CamelCase(colorName);
    console['log'+ColorName] = (content) => logContentWithColor(content, colorName);
    console[colorName] = (content) => getTextColored(content, colorName);
    console.bg[colorName] = (content) => getBgColored(content, colorName);
  });

  function getTextColored(text, colorName){
    return colors[colorName] + text + colors.reset;
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
      return console.log('%c', 'color: '+colorName);
    }
    return console.log(content);
  }
})(this);


console.logRed('aa');
//console.log(cls);